import EndCTA from '@/components/layout/shared/end-cta';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';

export interface ArticleProps {
  id: string;
  title: string;
  content: string;
  created_at: string;
  category: string;
  image: string;
}

export default async function BlogDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const res = await fetch(`${process.env.APP_URL}/api/articles/${id}`);

  const data = await res.json();

  return (
    <>
      <Header />
      <div className="prose prose-neutral mx-auto px-2 py-16 dark:prose-invert">
        <Image src={data.image} alt="An Image" width={600} height={400} className="h-60 w-full rounded-lg object-cover object-center" />
        <MDXRemote source={data.content} />
      </div>
      <EndCTA />
      <Footer />
    </>
  );
}
