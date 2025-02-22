import { cn } from "@/lib/utils";
import { IconAdjustmentsBolt, IconHeart, IconHelp, IconTerminal2 } from "@tabler/icons-react";

export default function Services() {
  const features = [
    {
      title: "Web Development",
      description: "We build responsive, scalable, and user-friendly websites tailored to your needs.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Mobile App Development",
      description: "From concept to launch, we create mobile apps that users love.",
      icon: <IconHeart />, //<IconEaseInOut />,
    },
    {
      title: "UI/UX Design",
      description: "We design intuitive and visually appealing interfaces for seamless user experiences.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "Maintenance & Support",
      description: "We ensure your systems run smoothly with reliable support and updates.",
      icon: <IconHelp />,
    },
  ];
  return (
    <section className="min-h-[calc(100dvh-65px)] container mx-auto flex items-center justify-center flex-col">
      <h1 className="text-center text-4xl font-medium mb-2">Transforming Ideas into Reality</h1>
      <p className="text-center text-lg mb-6 text-foreground/80">We combine creativity, technology, and strategy to build solutions that make an impact.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  relative z-10 py-10 max-w-6xl mx-auto">
        {features.map((feature, index) => (
          <Feature key={feature.title} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
}

const Feature = ({ title, description, icon, index }: { title: string; description: string; icon: React.ReactNode; index: number }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r  py-8 relative group/feature dark:border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l dark:border-neutral-800",
        index < 4 && "lg:border-b dark:border-neutral-800"
      )}>
      {index < 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      {index >= 4 && (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b from-neutral-100 dark:from-neutral-800 to-transparent pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-8 text-neutral-600 dark:text-neutral-400">{icon}</div>
      <div className="text-lg font-bold mb-2 relative z-10 px-8">
        <div className="absolute left-0 inset-y-0 h-6 group-hover/feature:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-blue-500 transition-all duration-200 origin-center" />
        <span className="group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">{title}</span>
      </div>
      <p className="text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-8">{description}</p>
    </div>
  );
};
