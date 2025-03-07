import { StickyScroll } from '@/components/ui/sticky-scroll-reveal';

export default function WhatWeDo() {
  const content = [
    {
      title: 'Web Development',
      description:
        'We build responsive, scalable, and user-friendly websites tailored to your business needs. From company profiles to e-commerce platforms, we ensure your site is fast, secure, and optimized for growth. Let us help you create a digital presence that drives results.',
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
      title: 'Mobile App Development',
      description:
        'From concept to launch, we create mobile apps that are intuitive, engaging, and built to scale. Whether for iOS, Android, or cross-platform, we deliver solutions that stand out and keep users coming back for more.',
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
      title: 'UI/UX Design',
      description:
        'We design intuitive and visually appealing interfaces that enhance user experience and drive engagement. Our focus is on creating designs that are not only beautiful but also functional and user-centric.',
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
      title: 'Maintenance & Support',
      description:
        'We ensure your systems run smoothly with reliable support, updates, and optimization services. From bug fixes to security monitoring, we’re here to keep your digital solutions performing at their best.',
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
