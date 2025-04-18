import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <section className="container mx-auto w-full px-4 py-16">
      <Skeleton className="mb-2 h-16 w-[90%]  rounded-lg" />
      <Skeleton className="mx-auto h-12  w-4/5 rounded-lg" />
      <div className="mx-auto mt-8 flex w-full max-w-prose flex-col gap-4">
        <Skeleton className="h-60 w-full  rounded-lg" />
        <Skeleton className="h-10 w-full  rounded-lg" />
        <Skeleton className="h-10 w-2/3 rounded-lg" />
        <Skeleton className="h-10 w-2/3  rounded-lg" />
        <Skeleton className="h-10 w-1/2  rounded-lg" />
        <Skeleton className="mt-8   h-20 rounded-lg" />
        <Skeleton className="h-10   rounded-lg" />
        <Skeleton className="h-10   rounded-lg" />
      </div>
    </section>
  );
}

