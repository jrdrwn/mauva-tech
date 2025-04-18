import EndCTA from '@/components/layout/shared/end-cta';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';
import { MDXRemote } from 'next-mdx-remote-client/rsc';
import Image from 'next/image';
import rehypePrettyCode from 'rehype-pretty-code';

export interface ArticleProps {
  id: string;
  title: string;
  content: string;
  created_at: string;
  category: string;
  image: string;
}

export default async function ArticleDetail({
  params,
}: {
  params: Promise<{ id: string[] }>;
}) {
  const { id } = await params;
  const res = await fetch(`${process.env.APP_URL}/api/articles/${id}`);

  const data = await res.json();

  return (
    <>
      <Header />
      <div className="container mx-auto flex flex-col items-center justify-center px-2 pt-16">
        <button className="group relative inline-block cursor-pointer rounded-full bg-secondary/75 p-px text-xs font-semibold leading-6 text-secondary-foreground no-underline  shadow-2xl shadow-secondary">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative z-10 flex items-center space-x-2 rounded-full bg-secondary/75 px-4 py-0.5 ring-1 ring-ring/10 ">
            <span>{data.category}</span>
            <svg
              fill="none"
              height="16"
              viewBox="0 0 24 24"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.75 8.75L14.25 12L10.75 15.25"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </button>
        <h1 className="mx-auto mt-4 max-w-6xl bg-gradient-to-br from-foreground/80 to-foreground/20  bg-clip-text px-4 text-center text-3xl font-semibold leading-relaxed text-transparent md:text-4xl lg:text-5xl lg:leading-snug">
          {data.title}
        </h1>
        <p className="mx-auto mt-4  max-w-xs  text-center  text-foreground/60 md:max-w-xl md:text-lg">
          {new Date(data.created_at).toLocaleString('id', {
            dateStyle: 'full',
            timeStyle: 'short',
          })}
        </p>
      </div>
      <div className="prose prose-zinc mx-auto px-2 py-16 dark:prose-invert prose-img:rounded-md ">
        <Image
          src={data.image}
          alt="An Image"
          width={600}
          height={400}
          className="mx-auto h-60 w-full max-w-4xl rounded-lg object-cover object-center"
        />
        <MDXRemote
          source={data.content}
          options={{
            mdxOptions: {
              rehypePlugins: [
                [
                  rehypePrettyCode,
                  {
                    theme: 'houston',
                  },
                ],
              ],
            },
          }}
        />
      </div>
      <EndCTA />
      <Footer />
    </>
  );
}
