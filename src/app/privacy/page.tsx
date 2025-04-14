import EndCTA from '@/components/layout/shared/end-cta';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';
import Hero from '@/components/layout/shared/hero';
import TitleSubSection from '@/components/layout/shared/title-sub-section';

export default function PrivacyPolicy() {
  return (
    <>
      <Header />
      <Hero
        label="Privacy Policy"
        title="Our Commitment to Your Privacy"
        description="Learn how we collect, use, and protect your personal information."
      />
      <section className="container mx-auto px-2 py-16 lg:px-0 ">
        <TitleSubSection
          title="Privacy Policy"
          description="At Mauva, we value your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and safeguard your data."
          descriptionClassName="max-w-2xl mx-auto"
        />
        <div className="prose mx-auto mt-12 dark:prose-invert">
          <h2>Information We Collect</h2>
          <p>
            We may collect personal information such as your name, email
            address, phone number, and payment details when you interact with
            our website or services. Additionally, we may gather non-personal
            data like browser type, IP address, and usage statistics to improve
            our offerings.
          </p>
          <h2>How We Use Your Information</h2>
          <p>
            Your information is used to provide and improve our services,
            process transactions, respond to inquiries, and send updates or
            promotional materials. We may also use your data for analytics and
            research to enhance user experience.
          </p>
          <h2>Sharing Your Information</h2>
          <p>
            We do not sell your personal information. However, we may share your
            data with trusted third-party service providers to facilitate our
            services, comply with legal obligations, or protect our rights.
          </p>
          <h2>Data Protection</h2>
          <p>
            We implement robust security measures, including encryption and
            access controls, to protect your data from unauthorized access,
            alteration, or disclosure. Despite our efforts, no method of
            transmission over the internet is 100% secure.
          </p>
          <h2>Your Rights</h2>
          <p>
            You have the right to access, update, or delete your personal
            information. To exercise these rights, please contact us .
          </p>
          <h2>Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. Any changes
            will be posted on this page with an updated revision date.
          </p>
          <h2>Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact
            us.
          </p>
        </div>
      </section>
      <EndCTA />
      <Footer />
    </>
  );
}

