import { InView } from '../ui/in-view';

export default function FadeBlur(props: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <InView
      className={props.className}
      viewOptions={{ margin: '0px 0px -200px 0px' }}
      variants={{
        hidden: { filter: 'blur(4px)', opacity: 0, y: 20 },
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
      {props.children}
    </InView>
  );
}

