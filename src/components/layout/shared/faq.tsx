import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { GridLayout } from '@/components/ui/grid-layout';

export default function FAQSection({ onlyFaq = false }: { onlyFaq?: boolean }) {
  const faq = [
    {
      question: 'What makes MauvaTech different from other software houses?',
      answer:
        "At MauvaTech, we combine technical expertise with a client-centric approach. We don't just build products—we craft tailored solutions that align with your unique business goals. Our team stays ahead of the curve with the latest technologies, ensuring high-quality results every time.",
    },
    {
      question: 'What services does MauvaTech offer?',
      answer:
        'We specialize in web development, mobile app development, UI/UX design, and ongoing maintenance and support. We also offer technology consulting to help businesses choose the best solutions for their needs.',
    },
    {
      question: 'How long does it take to complete a project?',
      answer:
        "The timeline depends on the complexity and scope of the project. After an initial discussion, we'll provide a realistic estimate and ensure we meet the agreed deadlines without compromising quality.",
    },
    {
      question: 'Do you work with small businesses or only large enterprises?',
      answer:
        'We work with businesses of all sizes, from startups to large enterprises. Our goal is to help every client, regardless of their scale, achieve their digital transformation goals.',
    },
    {
      question: 'How can I start a project with MauvaTech?',
      answer:
        "Getting started is easy! Simply reach out to us via the contact form on our website or email us at info@mauvasolution.com. We'll schedule a consultation to discuss your needs and provide a tailored proposal.",
    },
  ];

  return (
    <section className="container mx-auto  py-16">
      <div className=" flex h-full flex-col items-center justify-center">
        {!onlyFaq && (
          <>
            <h1 className="mb-2 px-2 text-center text-2xl font-medium md:text-4xl">
              <GridLayout
                crosshairs={{
                  topLeft: true,
                  topRight: true,
                  bottomLeft: true,
                  bottomRight: true,
                }}
                lineVariant="none"
                className="mx-auto max-w-max p-2"
              >
                Frequently Asked Questions
              </GridLayout>
            </h1>
            <p className="mb-6 px-2 text-center text-foreground/70 md:text-lg">
              Quick answers to common questions about our products and services.
            </p>
          </>
        )}
        <Accordion
          type="single"
          className="mt-6 max-w-3xl"
          defaultValue="question-0"
        >
          {faq.map(({ question, answer }, index) => (
            <AccordionItem key={question} value={`question-${index}`}>
              <AccordionTrigger className="text-left text-lg">
                {question}
              </AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
