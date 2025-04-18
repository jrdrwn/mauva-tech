import FadeBlur from '@/components/animations/fade-blur';
import { Boxes } from '@/components/ui/background-boxes';
import { HoverBorderGradient } from '@/components/ui/hover-border-gradient';
import { MoveUpRight } from 'lucide-react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';

export default function EndCTA() {
  const t = useTranslations('shared.end-cta');
  return (
    <section className="flex h-full flex-col items-center justify-center px-2 md:px-0">
      <div className="container relative  mx-auto flex flex-col items-center justify-center overflow-hidden rounded-3xl border-2 border-border bg-secondary/50 px-4 py-20 shadow-xl">
        <FadeBlur>
          <h1 className="mb-2 text-center text-xl font-medium text-secondary-foreground lg:text-2xl xl:text-4xl">
            {t('title')}
          </h1>
          <p className="mb-6 text-center text-sm text-secondary-foreground/80 md:text-lg">
            {t('description')}
          </p>
        </FadeBlur>
        <Link href="/contact">
          <HoverBorderGradient
            containerClassName="rounded-full mx-auto mt-4"
            as="button"
            className="group/button flex items-center gap-2 bg-secondary text-foreground  "
          >
            <span>{t('cta')}</span>
            <span>
              <MoveUpRight className="w-4 transition-all duration-300 group-hover/button:size-5 group-hover/button:rotate-45" />
            </span>
          </HoverBorderGradient>
        </Link>
        <Boxes />
      </div>
    </section>
  );
}
