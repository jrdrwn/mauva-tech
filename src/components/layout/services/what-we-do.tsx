import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';
import { useTranslations } from 'next-intl';

export default function WhatWeDo() {
  const t = useTranslations('pages.services');

  const content = [
    {
      title: t('whatWeDo.webDevelopment.title'),
      description: t('whatWeDo.webDevelopment.description'),
      image: '/website.webp',
      offers: [
        'Custom website',
        'E-commerce',
        'CMS integration',
        'Responsive design',
        'SEO optimization',
        'Maintenance',
      ],
    },
    {
      title: t('whatWeDo.mobileAppDevelopment.title'),
      description: t('whatWeDo.mobileAppDevelopment.description'),
      image: '/mobile.webp',
      offers: [
        'iOS & Android',
        'Cross-platform',
        'User-friendly designs',
        'API integration',
        'Scalable architecture',
        'Quality assurance',
      ],
    },
    {
      title: t('whatWeDo.uiUxDesign.title'),
      description: t('whatWeDo.uiUxDesign.description'),
      image: '/design.webp',
      offers: [
        'User research',
        'Wireframing',
        'Prototyping',
        'User testing',
        'Responsive design',
        'Design systems',
      ],
    },
    {
      title: t('whatWeDo.maintenanceSupport.title'),
      description: t('whatWeDo.maintenanceSupport.description'),
      image: '/support.webp',
      offers: [
        'Regular updates',
        'Monitoring',
        'Security patches',
        'Content management',
        'Technical support',
        'Backup and recovery',
      ],
    },
  ];

  return (
    <section className="container mx-auto flex h-full flex-col items-center justify-center py-16">
      <StickyScroll content={content} />
    </section>
  );
}
