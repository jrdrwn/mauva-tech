'use client';

import { AnimatedTooltip } from '@/components/ui/animated-tooltip';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { WobbleCard } from '@/components/ui/wobble-card';
import { MoveUpRight } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useId, useState } from 'react';

export default function AboutUs() {
  return (
    <section className="container mx-auto flex h-full flex-col items-center justify-center py-16">
      <h1 className="mb-2 px-2 text-center text-2xl font-medium md:text-4xl">
        Who We Are
      </h1>
      <p className="mb-6 px-2 text-center text-foreground/70 md:text-lg">
        Discover how our passion for technology drives us to create solutions
        that make a difference.
      </p>
      <WobbleCardContainer />
    </section>
  );
}

export function WobbleCardContainer() {
  const people = [
    {
      id: 1,
      name: 'John Doe',
      designation: 'Software Engineer',
      image:
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80',
    },
    {
      id: 2,
      name: 'Robert Johnson',
      designation: 'Product Manager',
      image:
        'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 3,
      name: 'Jane Smith',
      designation: 'Data Scientist',
      image:
        'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 4,
      name: 'Emily Davis',
      designation: 'UX Designer',
      image:
        'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60',
    },
    {
      id: 5,
      name: 'Tyler Durden',
      designation: 'Soap Developer',
      image:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80',
    },
  ];
  return (
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-4 px-2 md:px-0 lg:grid-cols-3">
      <WobbleCard
        containerClassName="col-span-1 lg:col-span-2 h-full  min-h-[500px] lg:min-h-[300px]"
        className=""
      >
        <div className="max-w-lg">
          <h2 className="text-balance text-left text-lg font-semibold tracking-[-0.015em] text-white md:text-xl lg:text-3xl">
            About us
          </h2>
          <p className="mt-4 text-left  text-base/6 text-neutral-200">
            MauvaTech is a leading software house specializing in web and mobile
            app development. With a team of passionate developers and designers,
            we help businesses transform their ideas into digital solutions that
            drive results.
          </p>
        </div>
        <Image
          src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=andrew-neel-cckf4TsHAuw-unsplash.jpg&w=640"
          width={500}
          height={500}
          alt="linear demo image"
          className="absolute -bottom-10 -right-4 rounded-2xl object-contain grayscale lg:right-[-40%]"
        />
      </WobbleCard>
      <Card className="relative col-span-1 flex min-h-[300px] flex-col rounded-2xl ">
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Our Team</CardTitle>
          <CardDescription>
            Meet the people who make it all happen.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-1 flex-col items-center justify-center">
          <Grid size={20} />
          <div className="flex w-full flex-row items-center">
            <AnimatedTooltip items={people} />
          </div>
        </CardContent>
        <CardFooter className=" items-end ">
          <Button variant={'ghost'} className="group/button">
            Learn More About Us
            <span>
              <MoveUpRight className="w-4 transition-all duration-300 group-hover/button:size-5 group-hover/button:rotate-45" />
            </span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

export const Grid = ({
  pattern,
  size,
}: {
  pattern?: number[][];
  size?: number;
}) => {
  const [p, setP] = useState<number[][]>(pattern ?? []);
  useEffect(() => {
    setP(
      pattern ?? [
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
        [Math.floor(Math.random() * 4) + 7, Math.floor(Math.random() * 6) + 1],
      ],
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="pointer-events-none absolute  top-0   size-full [mask-image:linear-gradient(white,transparent)]">
      <div className="absolute inset-0 bg-gradient-to-r  from-zinc-100/30 to-zinc-300/30 opacity-100 [mask-image:radial-gradient(farthest-side_at_top,white,transparent)] dark:from-zinc-900/30 dark:to-zinc-900/30">
        <GridPattern
          width={size ?? 20}
          height={size ?? 20}
          x="-12"
          y="4"
          squares={p}
          className="absolute inset-0 size-full fill-black/10  stroke-black/10 mix-blend-overlay dark:fill-white/10 dark:stroke-white/10"
        />
      </div>
    </div>
  );
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function GridPattern({ width, height, x, y, squares, ...props }: any) {
  const patternId = useId();

  return (
    <svg aria-hidden="true" {...props}>
      <defs>
        <pattern
          id={patternId}
          width={width}
          height={height}
          patternUnits="userSpaceOnUse"
          x={x}
          y={y}
        >
          <path d={`M.5 ${height}V.5H${width}`} fill="none" />
        </pattern>
      </defs>
      <rect
        width="100%"
        height="100%"
        strokeWidth={0}
        fill={`url(#${patternId})`}
      />
      {squares && (
        <svg x={x} y={y} className="overflow-visible">
          {squares.map(([x, y]: [number, number], index: number) => (
            <rect
              strokeWidth="0"
              key={`${x}-${y}-${index}`}
              width={width + 1}
              height={height + 1}
              x={x * width}
              y={y * height}
            />
          ))}
        </svg>
      )}
    </svg>
  );
}
