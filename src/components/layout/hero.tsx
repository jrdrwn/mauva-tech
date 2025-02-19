import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";
import { Cover } from "../ui/cover";
import { Highlight } from "../ui/hero-highlight";
import { HoverBorderGradient } from "../ui/hover-border-gradient";

export default function Hero() {
  return (
    <section className="min-h-[calc(100dvh-65px)] flex justify-center items-center  dark:bg-grid-small-white/[0.2] bg-grid-small-black/[0.2]">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background  [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="container mx-auto flex flex-col justify-center items-center">
        <button className="bg-secondary/75 no-underline group cursor-pointer relative shadow-2xl shadow-secondary rounded-full p-px text-xs font-semibold leading-6  text-secondary-foreground inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-secondary/75 py-0.5 px-4 ring-1 ring-ring/10 ">
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
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-foreground  max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mt-4"
        >
          Where <Highlight>Vision</Highlight> Meets <Cover>Innovation</Cover>
        </motion.h1>
        <p className="mt-4 max-w-xl mx-auto text-sm md:text-lg text-foreground/60 text-center">
          We build cutting-edge websites and mobile apps that drive results.
        </p>
        <HoverBorderGradient
          containerClassName="rounded-full mx-auto mt-4"
          as="button"
          className="bg-background text-foreground flex items-center gap-2 group/button  "
        >
          <span>Explore Our Work</span>
          <span>
            <MoveUpRight className="w-4 group-hover/button:rotate-45 group-hover/button:size-5 transition-all duration-300" />
          </span>
        </HoverBorderGradient>
      </div>
    </section>
  );
}
