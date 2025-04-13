import EndCTA from '@/components/layout/shared/end-cta';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';
import Hero from '@/components/layout/shared/hero';
import TitleSubSection from '@/components/layout/shared/title-sub-section';

export default function TermsOfService() {
  return (
    <>
      <Header />
      <Hero
        label="Terms of Service"
        title="Our Terms and Conditions"
        description="Understand the rules and regulations for using our services."
      />
      <section className="container mx-auto px-2 py-16 lg:px-0">
        <TitleSubSection
          title="Terms of Service"
          description="Welcome to Mauva. By accessing or using our services, you agree to be bound by these Terms of Service. Please read them carefully."
          descriptionClassName="max-w-2xl mx-auto"
        />
        <div className="prose mx-auto mt-12 dark:prose-invert">
          <h2>Eligibility</h2>
          <p>
            To use our services, you must be at least 18 years old or have the
            consent of a parent or guardian. By using our services, you
            represent and warrant that you meet these requirements.
          </p>
          <h2>Prohibited Activities</h2>
          <p>
            You agree not to engage in activities that violate any laws,
            infringe on the rights of others, or disrupt the functionality of
            our services. This includes, but is not limited to, hacking,
            spamming, and distributing malware.
          </p>
          <h2>Intellectual Property</h2>
          <p>
            All content, trademarks, and intellectual property associated with
            our services are owned by Mauva or its licensors. You may not use,
            reproduce, or distribute this content without prior written consent.
          </p>
          <h2>Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, Mauva shall not be liable
            for any indirect, incidental, or consequential damages arising from
            your use of our services.
          </p>
          <h2>Governing Law</h2>
          <p>
            These terms are governed by the laws of Tester. Any disputes arising
            from these terms shall be resolved in the courts of Tester.
          </p>
          <h2>Changes to These Terms</h2>
          <p>
            We reserve the right to update these Terms of Service at any time.
            Any changes will be posted on this page with an updated revision
            date.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about these Terms of Service, please
            contact us .
          </p>
        </div>
      </section>
      <EndCTA />
      <Footer />
    </>
  );
}

