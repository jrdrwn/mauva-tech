import { WobbleCard } from '@/components/ui/wobble-card';

export default function VisionMission() {
  return (
    <section className="container mx-auto flex h-full flex-col items-center justify-center py-16">
      <div>
        <div className="mx-auto grid w-full  grid-cols-1 gap-4 px-2 md:px-0 lg:grid-cols-3">
          <WobbleCard containerClassName="lg:col-span-1" animated={false}>
            <h1 className="mb-2 text-lg font-medium text-white md:mb-4 md:text-2xl lg:text-3xl">
              Our Vision
            </h1>
            <p className="text-white/70 md:text-lg lg:text-xl">
              To be a global leader in digital innovation, empowering businesses
              to thrive in the ever-evolving tech landscape.
            </p>
          </WobbleCard>
          <WobbleCard
            containerClassName="lg:col-span-2 bg-neutral-900"
            animated={false}
          >
            <h1 className="mb-2 text-lg font-medium text-white md:mb-4 md:text-2xl lg:text-3xl">
              Our Mission
            </h1>
            <p className="text-white/70 md:text-lg lg:text-xl">
              At MauvaTech, we are committed to delivering cutting-edge digital
              solutions that drive growth and efficiency. We work closely with
              our clients to understand their unique needs and provide tailored
              solutions that not only solve current challenges but also prepare
              them for future opportunities. Our mission is to combine
              creativity, technology, and expertise to bring our clients&apos;
              visions to life.
            </p>
          </WobbleCard>
        </div>
      </div>
    </section>
  );
}
