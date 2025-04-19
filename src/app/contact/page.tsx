import ContactDetail from '@/components/layout/contact/contact-detail';
import EndCTA from '@/components/layout/shared/end-cta';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';
import Hero from '@/components/layout/shared/hero';
import { useTranslations } from 'next-intl';

export default function Contact() {
  const t = useTranslations('pages.contact.hero');

  return (
    <>
      <Header />
      <Hero
        label={t('label')}
        title={t('title')}
        description={t('description')}
      />
      <ContactDetail />
      <EndCTA />
      <Footer />
    </>
  );
}
