import Articles from '@/components/layout/article/articles';
import EndCTA from '@/components/layout/shared/end-cta';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';
import Hero from '@/components/layout/shared/hero';
import { useTranslations } from 'next-intl';

export default function ArticlePage() {
  const t = useTranslations('pages.article.hero');

  return (
    <>
      <Header />
      <Hero
        label={t('label')}
        title={t('title')}
        description={t('description')}
      />
      <Articles />
      <EndCTA />
      <Footer />
    </>
  );
}
