'use client';

import { AnimatedGroup } from '@/components/ui/animated-group';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import Particles from '@/components/ui/particles';
import { hslToHex } from '@/lib/utils';
import { ArrowRight, MoveUpRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

interface HeroProps {
  label: string;
  title: string;
  description: string;
  cta: string;
  support?: React.ReactNode;
  ref?: React.RefObject<HTMLElement | null>;
}

export default function Hero({
  label,
  title,
  description,
  cta,
  support,
  ref,
}: HeroProps) {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState('');

  useEffect(() => {
    const particlesColor = setTimeout(() => {
      const hsl = window
        .getComputedStyle(document.documentElement)
        .getPropertyValue('--foreground');
      const [h, s, l] = hsl
        .split(' ')
        .map((value, index) =>
          index === 0 ? parseInt(value) : parseFloat(value),
        );
      const hex = hslToHex(h, s, l);
      setColor(hex);
    }, 0);
    return () => clearTimeout(particlesColor);
  }, [resolvedTheme]);
  return (
    <section ref={ref} className="relative">
      <Particles
        className="absolute inset-0"
        quantity={50}
        ease={80}
        color={color}
        refresh
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative  left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-[linear-gradient(to_top_right_in_oklab,var(--tw-gradient-stops))] from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-[linear-gradient(to_top_right_in_oklab,var(--tw-gradient-stops))] from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
      <AnimatedGroup
        className="container relative z-10 mx-auto flex flex-col items-center justify-center px-2 py-16 md:pt-24 lg:pt-36"
        preset="blur"
      >
        <button className="group mx-auto flex w-fit items-center gap-4 rounded-full border bg-muted p-1 pl-4 shadow-md  transition-colors duration-300 hover:bg-background dark:border-t-white/5  dark:hover:border-t-border">
          <span className="text-sm text-foreground">{label}</span>
          <span className="block h-4 w-0.5 border-l bg-white dark:border-background dark:bg-zinc-700"></span>

          <div className="size-6 overflow-hidden rounded-full bg-background duration-500 group-hover:bg-muted">
            <div className="flex w-12 -translate-x-1/2 duration-500 ease-in-out group-hover:translate-x-0">
              <span className="flex size-6">
                <ArrowRight className="m-auto size-3" />
              </span>
              <span className="flex size-6">
                <ArrowRight className="m-auto size-3" />
              </span>
            </div>
          </div>
        </button>
        <h1 className="mx-auto mt-4 max-w-5xl bg-gradient-to-br from-foreground/80 to-foreground/20  bg-clip-text px-4 text-center text-5xl font-semibold leading-normal text-transparent md:text-5xl md:leading-relaxed lg:text-7xl lg:leading-snug">
          {title}
        </h1>
        <p className="mx-auto mt-4  max-w-xs  text-center  text-foreground/60 md:max-w-xl md:text-lg">
          {description}
        </p>
        <HoverBorderGradient
          containerClassName="rounded-full mx-auto mt-8"
          as="button"
          className="group/button flex items-center gap-2 bg-background text-foreground  "
        >
          <span>{cta}</span>
          <span>
            <MoveUpRight className="w-4 transition-all duration-300 group-hover/button:size-5 group-hover/button:rotate-45" />
          </span>
        </HoverBorderGradient>
        {support}
      </AnimatedGroup>
    </section>
  );
}
