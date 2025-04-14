import { InView } from '../ui/in-view';

export default function FadeBlur({
  children,
  className,
  slide = true,
}: {
  children: React.ReactNode;
  className?: string;
  slide?: boolean;
}) {
  return (
    <InView
      className={className}
      viewOptions={{ margin: '0px 0px -200px 0px' }}
      variants={{
        hidden: { filter: 'blur(4px)', opacity: 0, y: slide ? 20 : 0 },
        visible: {
          filter: 'blur(0px)',
          opacity: 1,
          y: 0,
          transition: {
            type: 'spring',
            bounce: 0.3,
            duration: 1.5,
            filter: { type: 'tween', duration: 0.5 },
          },
        },
      }}
    >
      {children}
    </InView>
  );
}

