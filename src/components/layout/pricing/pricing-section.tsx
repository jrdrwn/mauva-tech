import TitleSubSection from '@/components/layout/shared/title-sub-section';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { cn } from '@/lib/utils';
import {
  ArrowRight,
  CircleCheck,
  Code,
  Info,
  PenTool,
  Smartphone,
  Wrench,
} from 'lucide-react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const plans = [
  {
    name: 'Web Development',
    price: 499,
    description:
      'Build responsive, scalable, and user-friendly websites tailored to your business needs.',
    features: [
      'Custom website design',
      'E-commerce integration',
      'CMS setup',
      'SEO optimization',
      'Responsive design',
    ],
    buttonText: 'Start Web Development',
    icon: <Code className="size-6 text-primary" />,
  },
  {
    name: 'Mobile App Development',
    price: 999,
    isRecommended: true,
    description:
      'Create intuitive, engaging, and scalable mobile apps for iOS and Android.',
    features: [
      'iOS & Android apps',
      'Cross-platform support',
      'User-friendly designs',
      'API integration',
      'Scalable architecture',
    ],
    buttonText: 'Start Mobile Development',
    isPopular: true,
    icon: <Smartphone className="size-6 text-primary" />,
  },
  {
    name: 'UI/UX Design',
    price: 299,
    description:
      'Design intuitive and visually appealing interfaces for seamless user experiences.',
    features: [
      'User research',
      'Wireframing & prototyping',
      'Responsive design',
      'Design systems',
      'User testing',
    ],
    buttonText: 'Start UI/UX Design',
    icon: <PenTool className="size-6 text-primary" />,
  },
];

const maintenancePlan = {
  name: 'Maintenance & Support',
  price: 199,
  description:
    'Ensure your systems run smoothly with reliable support and updates.',
  features: [
    'Regular updates',
    'Security monitoring',
    'Bug fixes',
    'Backup & recovery',
    'Technical support',
  ],
  buttonText: 'Start Maintenance',
  icon: <Wrench className="size-6 text-primary" />,
};

export default function PricingSection() {
  const t = useTranslations('pages.pricing.section');
  return (
    <section className="container mx-auto px-2 py-16 lg:px-0">
      <div className="mx-auto mt-12 grid max-w-screen-lg grid-cols-1 items-center gap-8 lg:grid-cols-3 lg:gap-0">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={cn(
              'relative border p-7 rounded-xl lg:rounded-none lg:first:rounded-l-xl lg:last:rounded-r-xl',
              {
                'border-[2px] border-primary py-12 !rounded-xl': plan.isPopular,
              },
            )}
          >
            {plan.isPopular && (
              <Badge className="absolute right-1/2 top-0 -translate-y-1/2 translate-x-1/2">
                Most Popular
              </Badge>
            )}
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Info className="absolute right-4 top-4 size-4 cursor-pointer text-muted-foreground" />
                </TooltipTrigger>
                <TooltipContent>
                  <p>
                    The listed price is <br /> the starting price and <br /> may
                    vary depending on your <br /> specific requirements.
                  </p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
            <div className="mb-4 flex justify-center">
              {React.cloneElement(plan.icon, {
                className: 'w-12 h-12 text-primary',
              })}
            </div>
            <h3 className="text-center text-lg font-medium">{plan.name}</h3>
            <div className="mt-2 text-center text-4xl font-bold">
              ${plan.price}
            </div>
            <p className="mt-4 text-center font-medium text-muted-foreground">
              {plan.description}
            </p>
            <Separator className="my-6" />
            <ul className="space-y-2">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2">
                  <CircleCheck className="mt-1 size-4 text-green-600" />
                  {feature}
                </li>
              ))}
            </ul>
            <Link href="/contact">
              <Button
                variant={plan.isPopular ? 'default' : 'outline'}
                size="lg"
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-full"
              >
                {plan.buttonText} <ArrowRight className="size-4" />
              </Button>
            </Link>
          </div>
        ))}
      </div>

      {/* Maintenance & Support Section */}
      <div className="relative py-16 md:py-32">
        <div className="mx-auto max-w-5xl ">
          <TitleSubSection
            title={t('maintenance.title')}
            description={t('maintenance.description')}
          />
          <div className="mt-8 md:mt-20">
            <div className="relative rounded-3xl border bg-card shadow-2xl shadow-zinc-950/5">
              <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
                <div className="pb-12 text-center md:pb-0 md:pr-12">
                  <TooltipProvider>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Info className="absolute right-4 top-4 size-4 cursor-pointer text-muted-foreground" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>
                          The listed price is <br /> the starting price and{' '}
                          <br /> may vary depending on your <br /> specific
                          requirements.
                        </p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                  <div className="flex flex-col items-center">
                    {React.cloneElement(maintenancePlan.icon, {
                      className: 'w-12 h-12 text-primary mb-4',
                    })}
                    <h3 className="text-2xl font-semibold">
                      {maintenancePlan.name}
                    </h3>
                  </div>
                  <p className="mt-2 text-lg">{maintenancePlan.description}</p>
                  <div className="mb-6 mt-12 inline-block items-center justify-center gap-2 text-6xl font-bold">
                    <span>
                      <span className="text-4xl">$</span>
                      {maintenancePlan.price}
                    </span>
                  </div>

                  <div className="flex justify-center">
                    <Link href="/contact">
                      <Button
                        size="lg"
                        className="flex items-center justify-center gap-2"
                      >
                        {maintenancePlan.buttonText}{' '}
                        <ArrowRight className="size-4" />
                      </Button>
                    </Link>
                  </div>

                  <p className="mt-12 text-sm text-muted-foreground">
                    Includes: {maintenancePlan.features.join(', ')}
                  </p>
                </div>
                <div className="relative pt-12 md:pl-12">
                  <ul role="list" className="space-y-4">
                    {maintenancePlan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <CircleCheck className="size-3 text-green-600" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="mt-6 text-sm text-muted-foreground">
                    Team can be any size, and you can add or switch members as
                    needed.
                  </p>
                  <div className="mt-12 flex flex-wrap items-center justify-between gap-6">
                    <Image
                      className="h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nvidia.svg"
                      alt="Nvidia Logo"
                      height={20}
                      width={80}
                    />
                    <Image
                      className="h-4 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/github.svg"
                      alt="GitHub Logo"
                      height={16}
                      width={70}
                    />
                    <Image
                      className="h-5 w-fit dark:invert"
                      src="https://html.tailus.io/blocks/customers/nike.svg"
                      alt="Nike Logo"
                      height={20}
                      width={80}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

