'use client';

import { Skeleton } from '@/components/ui/skeleton';

export default function Loading() {
  return (
    <section className="flex h-screen items-center justify-center">
      <div className="container mx-auto w-full space-y-6 px-4 py-16">
        <Skeleton className="mx-auto h-8 w-3/4" />
        <Skeleton className="mx-auto h-6 w-1/2" />
        <Skeleton className="mx-auto h-64 w-full rounded-lg" />
        <div className="space-y-4">
          <Skeleton className="h-4 w-full" />
          <Skeleton className="h-4 w-5/6" />
          <Skeleton className="h-4 w-4/6" />
        </div>
        <Skeleton className="mx-auto h-10 w-32 rounded-full" />
      </div>
    </section>
  );
}

