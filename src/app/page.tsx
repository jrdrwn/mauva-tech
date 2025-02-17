"use client";
import Header from "@/components/Header";
import { Cover } from "@/components/ui/cover";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { motion } from "framer-motion";
import { MoveUpRight } from "lucide-react";

export default function Home() {
  return (
    <>
      <Header />
      <HeroHighlight className="text-center">
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
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
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto mt-4"
        >
          Where <Highlight>Vision</Highlight> Meets <Cover>Innovation</Cover>
        </motion.h1>
        <p className="mt-4 max-w-xl mx-auto text-sm md:text-lg text-neutral-700 dark:text-neutral-400 text-center">
          We build cutting-edge websites and mobile apps that drive results.
        </p>
        <HoverBorderGradient
          containerClassName="rounded-full mx-auto mt-4"
          as="button"
          className="dark:bg-black bg-white text-black dark:text-white flex items-center gap-2 group/button  "
        >
          <span>Explore Our Work</span>
          <span>
            <MoveUpRight className="w-4 group-hover/button:rotate-45 group-hover/button:size-5 transition-all duration-300" />
          </span>
        </HoverBorderGradient>
      </HeroHighlight>
    </>
  );
}
