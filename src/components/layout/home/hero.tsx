import { Cover } from '@/components/ui/cover';
import { Highlight } from '@/components/ui/hero-highlight';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { motion } from 'framer-motion';
import { MoveUpRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="flex min-h-[calc(100dvh-65px)] items-center justify-center  bg-grid-small-black/[0.2] dark:bg-grid-small-white/[0.2]">
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-background  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container mx-auto flex flex-col items-center justify-center px-2">
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
          className="mx-auto mt-4 max-w-4xl px-4 text-center text-3xl  font-bold leading-relaxed text-foreground md:text-4xl lg:text-5xl lg:leading-snug"
        >
          Where <Highlight>Vision</Highlight> Meets <Cover>Innovation</Cover>
        </motion.h1>
        <p className="mx-auto mt-4  max-w-xs  text-center  text-foreground/60 md:max-w-xl md:text-lg">
          We build cutting-edge websites and mobile apps that drive results.
        </p>
        <HoverBorderGradient
          containerClassName="rounded-full mx-auto mt-4"
          as="button"
          className="group/button flex items-center gap-2 bg-background text-foreground  "
        >
          <span>Explore Our Work</span>
          <span>
            <MoveUpRight className="w-4 transition-all duration-300 group-hover/button:size-5 group-hover/button:rotate-45" />
          </span>
        </HoverBorderGradient>
      </div>
    </section>
  );
}
