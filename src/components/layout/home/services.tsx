import { GridLayout } from '@/components/ui/grid-layout';
import { InView } from '@/components/ui/in-view';
import { cn } from '@/lib/utils';
import {
  IconAdjustmentsBolt,
  IconHeart,
  IconHelp,
  IconTerminal2,
} from '@tabler/icons-react';

export default function Services() {
  const features = [
    {
      title: 'Web Development',
      description:
        'We build responsive, scalable, and user-friendly websites tailored to your needs.',
      icon: <IconTerminal2 />,
    },
    {
      title: 'Mobile App Development',
      description:
        'From concept to launch, we create mobile apps that users love.',
      icon: <IconHeart />, //<IconEaseInOut />,
    },
    {
      title: 'UI/UX Design',
      description:
        'We design intuitive and visually appealing interfaces for seamless user experiences.',
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: 'Maintenance & Support',
      description:
        'We ensure your systems run smoothly with reliable support and updates.',
      icon: <IconHelp />,
    },
  ];
  return (
    <section className="container mx-auto flex h-full flex-col items-center justify-center py-10">
      <InView
        viewOptions={{ margin: '0px 0px -200px 0px' }}
        variants={{
          hidden: { filter: 'blur(4px)', opacity: 0, y: 20 },
          visible: {
            filter: 'blur(0px)',
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              bounce: 0.3,
              duration: 1.5,
            },
          },
        }}
      >
        <h1 className="mb-4 px-2 text-center text-2xl font-medium md:text-4xl">
          <GridLayout
            crosshairs={{
              topLeft: true,
              topRight: true,
              bottomLeft: true,
              bottomRight: true,
            }}
            lineVariant="none"
            className="mx-auto max-w-max p-2"
          >
            Transforming Ideas into Reality
          </GridLayout>
        </h1>
        <p className="mb-6 px-2 text-center text-foreground/70 md:text-lg">
          We combine creativity, technology, and strategy to build solutions
          that make an impact.
        </p>
      </InView>
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
      <InView
        viewOptions={{ margin: '0px 0px -200px 0px' }}
        variants={{
          hidden: { filter: 'blur(4px)', opacity: 0, y: 20 },
          visible: {
            filter: 'blur(0px)',
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              bounce: 0.3,
              duration: 1.5,
            },
          },
        }}
      >
        {index < 4 && (
          <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-t from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
        )}
        {index >= 4 && (
          <div className="pointer-events-none absolute inset-0 size-full bg-gradient-to-b from-neutral-100 to-transparent opacity-0 transition duration-200 group-hover/feature:opacity-100 dark:from-neutral-800" />
        )}
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
      </InView>
    </div>
  );
};
