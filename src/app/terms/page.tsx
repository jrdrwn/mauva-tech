import EndCTA from '@/components/layout/shared/end-cta';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';
import Hero from '@/components/layout/shared/hero';
import TitleSubSection from '@/components/layout/shared/title-sub-section';
import { useTranslations } from 'next-intl';

export default function TermsOfService() {
  const t = useTranslations('pages.terms');

  return (
    <>
      <Header />
      <Hero
        label={t('hero.label')}
        title={t('hero.title')}
        description={t('hero.description')}
      />
      <section className="container mx-auto px-2 py-16 lg:px-0">
        <TitleSubSection
          title={t('content.title')}
          description={t('content.description')}
          descriptionClassName="max-w-2xl mx-auto"
        />
        <div className="prose mx-auto mt-12 dark:prose-invert">
          <h2>{t('content.eligibility.title')}</h2>
          <p>{t('content.eligibility.description')}</p>
          <h2>{t('content.prohibitedActivities.title')}</h2>
          <p>{t('content.prohibitedActivities.description')}</p>
          <h2>{t('content.intellectualProperty.title')}</h2>
          <p>{t('content.intellectualProperty.description')}</p>
          <h2>{t('content.limitationOfLiability.title')}</h2>
          <p>{t('content.limitationOfLiability.description')}</p>
          <h2>{t('content.governingLaw.title')}</h2>
          <p>{t('content.governingLaw.description')}</p>
          <h2>{t('content.changesToTerms.title')}</h2>
          <p>{t('content.changesToTerms.description')}</p>
          <h2>{t('content.contactUs.title')}</h2>
          <p>{t('content.contactUs.description')}</p>
        </div>
      </section>
      <EndCTA />
      <Footer />
    </>
  );
}

