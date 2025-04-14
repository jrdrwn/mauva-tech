'use client';

import UnknownError from '@/components/ilustrations/unknown-error';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

/* eslint-disable @typescript-eslint/no-unused-vars */

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const router = useRouter();
  return (
    <div className="container mx-auto flex min-h-screen items-center px-4 py-12 sm:px-6 md:px-8 lg:px-12 xl:px-16">
      <div className="w-full space-y-6 text-center">
        <div className="space-y-6">
          <UnknownError className="mx-auto w-full max-w-xs" />
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl ">
            Oops! Something went wrong.
          </h1>
          <p className="text-gray-500">
            Looks like you&apos;ve ventured into the unknown digital realm.
          </p>
        </div>
        <div className="flex justify-center gap-2">
          <Button variant="outline" onClick={() => router.back()}>
            Back
          </Button>
          <Link href={'/'}>
            <Button>Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

