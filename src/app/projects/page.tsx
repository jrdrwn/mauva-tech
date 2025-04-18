import Projects from '@/components/layout/projects/projects';
import EndCTA from '@/components/layout/shared/end-cta';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';
import Hero from '@/components/layout/shared/hero';
import { useTranslations } from 'next-intl';

export default function ProjectsPage() {
  const t = useTranslations('pages.projects.hero');

  return (
    <>
      <Header />
      <Hero
        label={t('label')}
        title={t('title')}
        description={t('description')}
        cta={t('cta')}
        ctaLink="/contact"
      />
      <Projects />
      <EndCTA />
      <Footer />
    </>
  );
}
