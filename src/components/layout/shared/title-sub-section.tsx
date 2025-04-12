import FadeBlur from '@/components/animations/fade-blur';
import { GridLayout } from '@/components/ui/grid-layout';

interface TitleSubSectionProps {
  title: string;
  description: string;
}

export default function TitleSubSection(props: TitleSubSectionProps) {
  return (
    <FadeBlur>
      <h1 className="mb-2 px-2 text-center text-2xl font-medium md:text-4xl">
        <GridLayout
          crosshairs={{
            topLeft: true,
            topRight: true,
            bottomLeft: true,
            bottomRight: true,
          }}
          lineVariant="none"
          className="mx-auto max-w-max p-2"
        >
          {props.title}
        </GridLayout>
      </h1>
      <p className="mb-6 px-2 text-center text-foreground/70 md:text-lg">
        {props.description}
      </p>
    </FadeBlur>
  );
}

