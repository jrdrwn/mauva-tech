'use client';

import { BentoGrid, BentoGridItem } from '@/components/ui/bento-grid';
import { cn } from '@/lib/utils';
import {
  IconBoxAlignRightFilled,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from '@tabler/icons-react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import TitleSubSection from '../shared/title-sub-section';

const SkeletonOne = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex size-full min-h-24 flex-1 flex-col space-y-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      <motion.div
        variants={variants}
        className="flex flex-row items-center space-x-2 rounded-full border  border-border bg-card p-2"
      >
        <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
        <div className="h-4 w-full rounded-full bg-gray-100 dark:bg-neutral-900" />
      </motion.div>
      <motion.div
        variants={variantsSecond}
        className="ml-auto flex w-3/4 flex-row items-center space-x-2 rounded-full border border-border bg-card p-2"
      >
        <div className="h-4 w-full rounded-full bg-gray-100 dark:bg-neutral-900" />
        <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
      </motion.div>
      <motion.div
        variants={variants}
        className="flex flex-row items-center space-x-2 rounded-full border border-border bg-card p-2"
      >
        <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
        <div className="h-4 w-full rounded-full bg-gray-100 dark:bg-neutral-900" />
      </motion.div>
    </motion.div>
  );
};
const SkeletonTwo = () => {
  const variants = {
    initial: {
      width: 0,
    },
    animate: {
      width: '100%',
      transition: {
        duration: 0.2,
      },
    },
    hover: {
      width: ['0%', '100%'],
      transition: {
        duration: 2,
      },
    },
  };
  const [arr, setArr] = useState<number[]>([]);
  useEffect(() => {
    setArr(new Array(6).fill(0));
  }, []);
  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex size-full min-h-24 flex-1 flex-col space-y-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      {arr.map((_, i) => (
        <motion.div
          key={'skelenton-two' + i}
          variants={variants}
          style={{
            maxWidth: Math.random() * (100 - 40) + 40 + '%',
          }}
          className="flex h-4 w-full flex-row items-center space-x-2  rounded-full border border-border bg-card p-2"
        ></motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonThree = () => {
  return (
    <Image
    width={640}
    height={426}
    className='aspect-video h-36 w-full rounded-xl object-cover object-center'
      src={
        'https://images.unsplash.com/photo-1562408590-e32931084e23?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=umberto-jXd2FSvcRr8-unsplash.jpg&w=1920'
      }
      alt='An Image'
    />
  );
};
const SkeletonFour = () => {
  const first = {
    initial: {
      x: 20,
      rotate: -5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const second = {
    initial: {
      x: -20,
      rotate: 5,
    },
    hover: {
      x: 0,
      rotate: 0,
    },
  };
  const avatars = [
    {
      src: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
      alt: 'Avatar 1',
      quote: 'Vanilla JavaScript is the foundation of modern web development.',
      label: 'Essential',
      labelColor: 'bg-blue-100 text-blue-600 border-blue-500',
    },
    {
      src: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      alt: 'Avatar 2',
      quote: 'Tailwind CSS simplifies styling with utility-first classes.',
      label: 'Innovative',
      labelColor: 'bg-green-100 text-green-600 border-green-500',
    },
    {
      src: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
      alt: 'Avatar 3',
      quote: 'React is a powerful library for building user interfaces.',
      label: 'Popular',
      labelColor: 'bg-orange-100 text-orange-600 border-orange-500',
    },
  ];

  return (
    <motion.div
      initial="initial"
      animate="animate"
      whileHover="hover"
      className="flex size-full min-h-24 flex-1 flex-row space-x-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      {avatars.map((avatar, index) => (
        <motion.div
          key={index}
          variants={index % 2 === 0 ? first : second}
          className="flex h-full w-1/3 flex-col items-center justify-center rounded-2xl border border-border bg-card p-4"
        >
          <Image
            src={avatar.src}
            alt={avatar.alt}
            height="100"
            width="100"
            className="size-10 rounded-full object-cover"
          />
          <p className="mt-4 text-center text-xs font-semibold text-neutral-500 sm:text-sm">
            {avatar.quote}
          </p>
          <p
            // eslint-disable-next-line tailwindcss/migration-from-tailwind-2
            className={`mt-4 rounded-full border px-2 py-0.5 text-xs ${avatar.labelColor} dark:bg-opacity-20`}
          >
            {avatar.label}
          </p>
        </motion.div>
      ))}
    </motion.div>
  );
};
const SkeletonFive = () => {
  const variants = {
    initial: {
      x: 0,
    },
    animate: {
      x: 10,
      rotate: 5,
      transition: {
        duration: 0.2,
      },
    },
  };
  const variantsSecond = {
    initial: {
      x: 0,
    },
    animate: {
      x: -10,
      rotate: -5,
      transition: {
        duration: 0.2,
      },
    },
  };

  return (
    <motion.div
      initial="initial"
      whileHover="animate"
      className="flex size-full min-h-24 flex-1 flex-col space-y-2 bg-dot-black/[0.2] dark:bg-dot-white/[0.2]"
    >
      <motion.div
      variants={variants}
      className="flex flex-row items-start space-x-2 rounded-2xl border border-border bg-card p-2"
      >
      <div className="w-20">
        <Image
        src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80"
        alt="avatar"
        height="100"
        width="100"
        className="size-10 rounded-full object-cover object-center"
        />
      </div>
      <p className="text-xs text-neutral-500">
        There are numerous frameworks like React, Angular, Vue, and Svelte that empower developers to build amazing applications efficiently and effectively.
      </p>
      </motion.div>
      <motion.div
      variants={variantsSecond}
      className="ml-auto flex w-3/4 flex-row items-center justify-end space-x-2 rounded-full border border-border bg-card p-2"
      >
      <p className="text-xs text-neutral-500">Consider exploring PHP for backend development—it remains a robust and versatile choice.</p>
      <div className="size-6 shrink-0 rounded-full bg-gradient-to-r from-pink-500 to-violet-500" />
      </motion.div>
    </motion.div>
  );
};
const items = [
  {
    title: 'Innovation',
    description: (
      <span className="text-sm">
        We embrace creativity and constantly seek new ways to solve problems and
        improve our solutions. Innovation is at the heart of everything we do,
        from brainstorming ideas to implementing cutting-edge technologies.
      </span>
    ),
    header: <SkeletonOne />,
    className: 'md:col-span-1',
    icon: <IconClipboardCopy className="size-4 text-neutral-500" />,
  },
  {
    title: 'Collaboration',
    description: (
      <span className="text-sm">
        We believe that the best results come from working together—with our
        team, our clients, and our partners. Collaboration is key to creating
        solutions that truly make an impact.
      </span>
    ),
    header: <SkeletonTwo />,
    className: 'md:col-span-1',
    icon: <IconFileBroken className="size-4 text-neutral-500" />,
  },
  {
    title: 'Sustainability',
    description: (
      <span className="text-sm">
        We are committed to using technology to create a positive impact on the
        world. From green practices to sustainable solutions, we strive to build
        a better future, one project at a time.
      </span>
    ),
    header: <SkeletonThree />,
    className: 'md:col-span-1',
    icon: <IconSignature className="size-4 text-neutral-500" />,
  },
  {
    title: 'Our Clients',
    description: (
      <span className="text-sm">
        From startups to global enterprises, we&apos;ve had the privilege of
        collaborating with amazing clients across various industries. Their
        trust and success stories drive us to keep innovating and delivering
        exceptional results.
      </span>
    ),
    header: <SkeletonFour />,
    className: 'md:col-span-2',
    icon: <IconTableColumn className="size-4 text-neutral-500" />,
  },

  {
    title: 'Our Culture',
    description: (
      <span className="text-sm">
        A workplace built on passion, creativity, and collaboration. We value
        diversity, continuous learning, and work-life balance, ensuring our team
        thrives and delivers their best work.
      </span>
    ),
    header: <SkeletonFive />,
    className: 'md:col-span-1',
    icon: <IconBoxAlignRightFilled className="size-4 text-neutral-500" />,
  },
];

export default function WhatDefinesUs() {
  return (
    <section className="container mx-auto flex h-full flex-col items-center justify-center py-16">
      <TitleSubSection
        title="What Defines Us?"
        description="Discover how our passion for technology drives us to create solutions that make a difference."
      />
      <BentoGrid className="mx-auto px-2 md:auto-rows-[20rem]  ">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            className={cn('[&>p:text-lg]', item.className)}
            icon={item.icon}
          />
        ))}
      </BentoGrid>
    </section>
  );
}
