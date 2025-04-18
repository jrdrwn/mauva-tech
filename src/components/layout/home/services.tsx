import FadeBlur from '@/components/animations/fade-blur';
import { cn } from '@/lib/utils';
import {
  IconAdjustmentsBolt,
  IconHeart,
  IconHelp,
  IconTerminal2,
} from '@tabler/icons-react';
import { useTranslations } from 'next-intl';

import TitleSubSection from '../shared/title-sub-section';

export default function Services() {
  const t = useTranslations('pages.home.services');
  const features = [
    {
      title: t('features.webDevelopment.title'),
      description: t('features.webDevelopment.description'),
      icon: <IconTerminal2 />,
    },
    {
      title: t('features.mobileAppDevelopment.title'),
      description: t('features.mobileAppDevelopment.description'),
      icon: <IconHeart />, //<IconEaseInOut />,
    },
    {
      title: t('features.uiUxDesign.title'),
      description: t('features.uiUxDesign.description'),
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: t('features.maintenanceSupport.title'),
      description: t('features.maintenanceSupport.description'),
      icon: <IconHelp />,
    },
  ];
  return (
    <section className="container mx-auto flex h-full flex-col items-center justify-center py-20">
      <TitleSubSection title={t('title')} description={t('description')} />

      <div className="relative z-10 mx-auto grid  max-w-6xl grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) => {
  return (
    <div
      className={cn(
        'flex flex-col lg:border-r  py-8 relative group/feature dark:border-neutral-800',
        (index === 0 || index === 4) && 'lg:border-l dark:border-neutral-800',
        index < 4 && 'lg:border-b dark:border-neutral-800',
      )}
    >
      {index < 4 && (
        <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      {index >= 4 && (
        <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
      )}
      <FadeBlur>
        <div className="relative z-10 mb-4 px-8 text-neutral-600 dark:text-neutral-400">
          {icon}
        </div>
        <div className="relative z-10 mb-2 px-8 text-lg font-bold">
          <div className="absolute inset-y-0 left-0 h-6 w-1 origin-center rounded-r-full bg-neutral-300 transition-all duration-200 group-hover/feature:h-8 group-hover/feature:bg-blue-500 dark:bg-neutral-700" />
          <span className="inline-block text-neutral-800 transition duration-200 group-hover/feature:translate-x-2 dark:text-neutral-100">
            {title}
          </span>
        </div>
        <p className="relative z-10 max-w-xs px-8 text-sm text-neutral-600 dark:text-neutral-300">
          {description}
        </p>
      </FadeBlur>
    </div>
  );
};
