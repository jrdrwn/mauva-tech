import EndCTA from '@/components/layout/shared/end-cta';
import FAQSection from '@/components/layout/shared/faq';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';
import Hero from '@/components/layout/shared/hero';
import { useTranslations } from 'next-intl';

export default function FAQ() {
  const t = useTranslations('pages.faq.hero');

  return (
    <>
      <Header />
      <Hero
        label={t('label')}
        title={t('title')}
        description={t('description')}
        cta={t('cta')}
        ctaLink={t('ctaLink')}
      />
      <FAQSection onlyFaq={true} />
      <EndCTA />
      <Footer />
    </>
  );
}
