import EndCTA from '@/components/layout/shared/end-cta';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';
import Hero from '@/components/layout/shared/hero';
import TitleSubSection from '@/components/layout/shared/title-sub-section';
import { useTranslations } from 'next-intl';

export default function PrivacyPolicy() {
  const t = useTranslations('pages.privacy');

  return (
    <>
      <Header />
      <Hero
        label={t('hero.label')}
        title={t('hero.title')}
        description={t('hero.description')}
      />
      <section className="container mx-auto px-2 py-16 lg:px-0 ">
        <TitleSubSection
          title={t('content.title')}
          description={t('content.description')}
          descriptionClassName="max-w-2xl mx-auto"
        />
        <div className="prose mx-auto mt-12 dark:prose-invert">
          <h2>{t('content.informationWeCollect.title')}</h2>
          <p>{t('content.informationWeCollect.description')}</p>
          <h2>{t('content.howWeUseYourInformation.title')}</h2>
          <p>{t('content.howWeUseYourInformation.description')}</p>
          <h2>{t('content.sharingYourInformation.title')}</h2>
          <p>{t('content.sharingYourInformation.description')}</p>
          <h2>{t('content.dataProtection.title')}</h2>
          <p>{t('content.dataProtection.description')}</p>
          <h2>{t('content.yourRights.title')}</h2>
          <p>{t('content.yourRights.description')}</p>
          <h2>{t('content.changesToPolicy.title')}</h2>
          <p>{t('content.changesToPolicy.description')}</p>
          <h2>{t('content.contactUs.title')}</h2>
          <p>{t('content.contactUs.description')}</p>
        </div>
      </section>
      <EndCTA />
      <Footer />
    </>
  );
}

