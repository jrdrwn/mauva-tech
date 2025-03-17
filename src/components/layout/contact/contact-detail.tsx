import { MailIcon, MapPinIcon, MessageCircle, PhoneIcon } from 'lucide-react';
import Link from 'next/link';

import { Form } from './form';

interface DetailContainerProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
  label?: string;
}

function DetailContainer({
  icon,
  title,
  description,
  link,
  label,
}: DetailContainerProps) {
  return (
    <div className="flex flex-col items-center justify-center sm:block">
      <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary sm:mx-0">
        {icon}
      </div>
      <h3 className="mt-6 text-center text-xl font-semibold sm:text-start">
        {title}
      </h3>
      <p className="my-2.5 text-center text-muted-foreground sm:text-start">
        {description}
      </p>
      <Link
        className="text-center font-medium text-primary sm:text-start"
        href={link}
      >
        {label}
      </Link>
    </div>
  );
}

export default function ContactDetail() {
  return (
    <section className="container mx-auto flex items-center justify-center px-2 py-20">
      <div className="mx-auto w-full">
        <div className="grid gap-16 md:gap-10 lg:grid-cols-2">
          <div className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
            <DetailContainer
              icon={<MailIcon />}
              title="Email"
              description="Our friendly team is here to help."
              link="mailto:info@mauvasolution.com"
              label="info@mauvasolution.com"
            />
            <DetailContainer
              icon={<MessageCircle />}
              title="Live chat"
              description="Our friendly team is here to help."
              link="#"
              label="Start new chat"
            />
            <DetailContainer
              icon={<MapPinIcon />}
              title="Office"
              description="Come say hello at our office HQ."
              link="https://map.google.com"
              label="Jakarta, Indonesia"
            />
            <DetailContainer
              icon={<PhoneIcon />}
              title="Phone"
              description="Mon-Fri from 8am to 5pm."
              link="tel:+62 823-4000-0000"
              label="+62 823-4000-0000"
            />
          </div>
          <Form />
        </div>
      </div>
    </section>
  );
}
