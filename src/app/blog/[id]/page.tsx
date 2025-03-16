'use client';

import EndCTA from '@/components/layout/shared/end-cta';
import Footer from '@/components/layout/shared/footer';
import { useParams } from 'next/navigation';

export default function BlogDetail() {
  const { id } = useParams();
  return (
    <>
      <h1>Sample ID: {id}</h1>
      <EndCTA />
      <Footer />
    </>
  );
}
