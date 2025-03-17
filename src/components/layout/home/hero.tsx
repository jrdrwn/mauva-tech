import { BorderBeam } from '@/components/ui/border-beam';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import Particles from '@/components/ui/particles';
import { hslToHex } from '@/lib/utils';
import { motion } from 'framer-motion';
import { MoveUpRight } from 'lucide-react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function Hero() {
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
    <section className="relative isolate  min-h-[calc(100dvh-65px)]  ">
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
      <div className="container relative mx-auto flex flex-col items-center justify-center px-2 py-16 md:pt-24 lg:pt-36">
        <button className="group relative inline-block cursor-pointer rounded-full bg-secondary/75 p-px text-xs font-semibold leading-6 text-secondary-foreground no-underline  shadow-2xl shadow-secondary">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative z-10 flex items-center space-x-2 rounded-full bg-secondary/75 px-4 py-0.5 ring-1 ring-ring/10 ">
            <span>MauvaTech</span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="mx-auto mt-4 max-w-5xl bg-gradient-to-br from-foreground/80 to-foreground/20  bg-clip-text px-4 text-center text-3xl font-semibold leading-relaxed text-transparent md:text-4xl lg:text-7xl lg:leading-snug"
        >
          Your Partner in Modern Digital Solutions
        </motion.h1>
        <p className="mx-auto mt-4  max-w-xs  text-center  text-foreground/60 md:max-w-xl md:text-lg">
          We build cutting-edge websites and mobile apps that drive results.
        </p>
        <HoverBorderGradient
          containerClassName="rounded-full mx-auto mt-8"
          as="button"
          className="group/button flex items-center gap-2 bg-background text-foreground  "
        >
          <span>Explore Our Work</span>
          <span>
            <MoveUpRight className="w-4 transition-all duration-300 group-hover/button:size-5 group-hover/button:rotate-45" />
          </span>
        </HoverBorderGradient>
        <div className="relative mt-8 w-full overflow-hidden px-2 sm:mr-0 sm:mt-12 md:mt-20">
          <div className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl border bg-background p-1 shadow-lg  ring-1 ring-background ">
            <BorderBeam />
            <Image
              className="relative  aspect-video rounded-2xl bg-background object-cover object-center  "
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=luke-chesser-JKUTrJ4vK00-unsplash.jpg&w=1920"
              alt="app screen"
              width="1920"
              height="1080"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
