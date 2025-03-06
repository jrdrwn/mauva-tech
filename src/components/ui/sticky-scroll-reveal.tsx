'use client';

import { cn } from '@/lib/utils';
import { motion, useMotionValueEvent, useScroll } from 'framer-motion';
import React, { useRef } from 'react';

/* eslint-disable @typescript-eslint/no-explicit-any */

export const StickyScroll = ({
  content,
  contentClassName,
}: {
  content: {
    title: string;
    description: string;
    content?: React.ReactNode | any;
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
              className="top-[calc(100%-28rem)] md:mt-96 md:h-96"
            >
              <motion.h2
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: activeCard === index ? 1 : 0.3,
                }}
                className="text-2xl font-bold text-slate-100 "
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
                className="mt-10  text-lg text-slate-300"
              >
                {item.description}
              </motion.p>
              <div className="mt-4 block h-48 w-full overflow-hidden  rounded-md bg-white  md:hidden">
                {item.content ?? null}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div
        className={cn(
          'hidden md:block h-[30rem] w-full aspect-square rounded-md bg-white sticky top-[calc(100%-32rem)]  overflow-hidden',
          contentClassName,
        )}
      >
        {content[activeCard].content ?? null}
      </div>
    </motion.div>
  );
};
