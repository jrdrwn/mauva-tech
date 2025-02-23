import { Boxes } from '@/components/ui/background-boxes';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { MoveUpRight } from 'lucide-react';

export default function EndCTA() {
  return (
    <section className="flex min-h-[calc(100dvh-65px)] flex-col items-center justify-center">
      <div className="container relative  mx-auto flex flex-col items-center justify-center overflow-hidden rounded-3xl border-2 border-border bg-secondary/50 py-20 shadow-xl">
        <h1 className="mb-2 text-center text-4xl font-medium text-secondary-foreground">
          Let&apos;s Build Something Amazing Together!
        </h1>
        <p className="mb-6 text-center text-lg text-secondary-foreground/80">
          Contact us today to discuss your project and see how we can help you
          achieve your goals.
        </p>
        <HoverBorderGradient
          containerClassName="rounded-full mx-auto mt-4"
          as="button"
          className="group/button flex items-center gap-2 bg-secondary text-foreground  "
        >
          <span>Request a Quote</span>
          <span>
            <MoveUpRight className="w-4 transition-all duration-300 group-hover/button:size-5 group-hover/button:rotate-45" />
          </span>
        </HoverBorderGradient>
        <Boxes />
      </div>
    </section>
  );
}
