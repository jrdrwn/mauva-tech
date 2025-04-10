import Articles from '@/components/layout/blog/articles';
import EndCTA from '@/components/layout/shared/end-cta';
import Footer from '@/components/layout/shared/footer';
import Header from '@/components/layout/shared/header';
import Hero from '@/components/layout/shared/hero';

export default function BlogPage() {
  return (
    <>
      <Header />
      <Hero
        label="Blog"
        title="Welcome to Our Blog"
        description="Stay updated with our latest news and articles"
        cta="Read More"
      />
      <Articles />
      <EndCTA />
      <Footer />
    </>
  );
}
