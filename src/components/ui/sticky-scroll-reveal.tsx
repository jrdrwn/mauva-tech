'use client';

import { cn } from '@/lib/utils';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import { BadgeCheck, MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import React, { useRef } from 'react';

import { buttonVariants } from './button';

/* eslint-disable @typescript-eslint/no-explicit-any */

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    image: string;
    offers: string[];
  }[];
  contentClassName?: string;
}) => {
  const [activeCard, setActiveCard] = React.useState(0);
  const ref = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    // uncomment line 22 and comment line 23 if you DONT want the overflow container and want to have it change on the entire page scroll
    target: ref,
    // container: ref,
    offset: ['start start', 'end start'],
  });
  const cardLength = content.length;

  useMotionValueEvent(scrollYProgress, 'change', (latest) => {
    const cardsBreakpoints = content.map((_, index) => index / cardLength);
    const closestBreakpointIndex = cardsBreakpoints.reduce(
      (acc, breakpoint, index) => {
        const distance = Math.abs(latest - breakpoint);
        if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
          return index;
        }
        return acc;
      },
      0,
    );
    setActiveCard(closestBreakpointIndex);
  });

  return (
    <motion.div
      className=" flex w-full   justify-center space-x-10 rounded-md   p-10 "
      ref={ref}
    >
      <div className="relative flex w-full items-start px-4">
        <div className=" max-w-lg space-y-20 ">
          {content.map((item, index) => (
            <div
              key={item.title + index}
              className="top-[calc(100%-28rem)] lg:mt-96 lg:h-96"
            >
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="mb-2 text-2xl font-medium md:text-4xl"
              >
                {item.title}
              </motion.h2>
              <motion.p
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="mb-6  text-foreground/70 md:text-lg"
              >
                {item.description}
              </motion.p>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="grid grid-cols-2 gap-x-1 gap-y-2"
              >
                {item.offers.map((offer, index) => (
                  <motion.span
                    key={offer + index}
                    className="text-foreground/70 md:text-lg"
                  >
                    <BadgeCheck className="mr-2 inline-block" size={20} />
                    {offer}
                  </motion.span>
                ))}
              </motion.div>
              <motion.button
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className={buttonVariants({
                  variant: 'outline',
                  className: 'mt-4 group/button',
                })}
              >
                Learn More
                <MoveUpRight className="w-4 transition-all duration-300 group-hover/button:size-5 group-hover/button:rotate-45" />
              </motion.button>
              <motion.div
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="mt-4 w-full overflow-hidden  rounded-md   lg:hidden"
              >
                <Image
                  src={item.image}
                  alt="A Project"
                  width={1024}
                  height={1024}
                  className="aspect-square size-full object-cover"
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={cn(
          'hidden lg:block h-[30rem] w-full aspect-square rounded-md  sticky top-[calc(100%-32rem)]  overflow-hidden',
          contentClassName,
        )}
      >
        <Image
          src={content[activeCard].image}
          alt="A Project"
          width={1024}
          height={1024}
          className="aspect-square size-full object-cover"
        />
      </div>
    </motion.div>
  );
};
