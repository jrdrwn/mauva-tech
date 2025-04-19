import { WobbleCard } from '@/components/ui/wobble-card';
import { useTranslations } from 'next-intl';

export default function VisionMission() {
  const t = useTranslations('pages.about.visionMission');
  return (
    <section className="container mx-auto flex h-full flex-col items-center justify-center py-16">
      <div>
        <div className="mx-auto grid w-full  grid-cols-1 gap-4 px-2 md:px-0 lg:grid-cols-3">
          <WobbleCard containerClassName="lg:col-span-1" animated={false}>
            <h1 className="mb-2 text-lg font-medium text-white md:mb-4 md:text-2xl lg:text-3xl">
              {t('vision.title')}
            </h1>
            <p className="text-white/70 md:text-lg lg:text-xl">
              {t('vision.description')}
            </p>
          </WobbleCard>
          <WobbleCard
            containerClassName="lg:col-span-2 bg-neutral-900"
            animated={false}
          >
            <h1 className="mb-2 text-lg font-medium text-white md:mb-4 md:text-2xl lg:text-3xl">
              {t('mission.title')}
            </h1>
            <p className="text-white/70 md:text-lg lg:text-xl">
              {t('mission.description')}
            </p>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}
