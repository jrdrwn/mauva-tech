import { Boxes } from "@/components/ui/background-boxes";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { MoveUpRight } from "lucide-react";

export default function EndCTA() {
  return (
    <section className="min-h-[calc(100dvh-65px)] flex items-center justify-center flex-col">
      <div className="container mx-auto  flex items-center justify-center flex-col shadow-xl rounded-3xl py-20 relative bg-secondary/50 overflow-hidden border-2 border-border">
        <h1 className="text-center text-4xl font-medium mb-2 text-secondary-foreground">
          Let&apos;s Build Something Amazing Together!
        </h1>
        <p className="text-center text-lg mb-6 text-secondary-foreground/80">
          Contact us today to discuss your project and see how we can help you
          achieve your goals.
        </p>
        <HoverBorderGradient
          containerClassName="rounded-full mx-auto mt-4"
          as="button"
          className="bg-secondary text-foreground flex items-center gap-2 group/button  "
        >
          <span>Request a Quote</span>
          <span>
            <MoveUpRight className="w-4 group-hover/button:rotate-45 group-hover/button:size-5 transition-all duration-300" />
          </span>
        </HoverBorderGradient>
        <Boxes />
      </div>
    </section>
  );
}
