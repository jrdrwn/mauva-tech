import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";

export default function Blogs() {
  const blogs = [
    {
      title: "How to build a successful startup",
      summary:
        "Learn how to build a successful startup from scratch with our step-by-step guide.",
      date: "2022-01-01",
      category: "News",
      image:
        "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=matthew-smith-Rfflri94rs8-unsplash.jpg&w=640",
    },
    {
      title: "The future of AI in business",
      summary:
        "Discover how AI is transforming businesses and what the future holds for this technology.",
      date: "2022-01-02",
      category: "Technology",
      image:
        "https://images.unsplash.com/photo-1533518463843-d7d7e2b3c3b3?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=franck-v-2Q3P2Jh8J0-unsplash.jpg&w=640",
    },
    {
      title: "Design trends to watch out for in 2022",
      summary:
        "Stay ahead of the curve with our list of design trends that will dominate 2022.",
      date: "2022-01-03",
      category: "Design",
      image:
        "https://images.unsplash.com/photo-1556740739-887f6717d7e1?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=charles-deluvio-7lXJ6YQbc4Y-unsplash.jpg&w=640",
    },
  ];
  return (
    <section className="container mx-auto min-h-[calc(100dvh-65px)] flex items-center justify-center flex-col py-16">
      <h1 className="text-center text-4xl font-medium mb-2">
        Insights & Updates
      </h1>
      <p className="text-center text-lg mb-6 text-foreground/80">
        Stay ahead of the curve with our latest insights on technology, design,
        and business growth.
      </p>
      <div className="flex flex-wrap gap-4 justify-center">
        {blogs.map((blog) => (
          <BlogCard key={blog.title} {...blog} />
        ))}
      </div>
    </section>
  );
}

interface BlogCardProps {
  title: string;
  summary: string;
  date: string;
  category: string;

  image: string;
}

function BlogCard(props: BlogCardProps) {
  return (
    <div className="max-w-96 ">
      <div className="relative rounded-lg overflow-hidden">
        <Image
          alt="An Image"
          src={
            "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-4.0.3&q=85&fm=jpg&crop=entropy&cs=srgb&dl=matthew-smith-Rfflri94rs8-unsplash.jpg&w=640"
          }
          width={600}
          height={400}
          className="max-w-96 w-full h-40 object-cover rounded-lg object-center"
        />
        <div className="absolute bottom-4 left-4 flex flex-wrap gap-2">
          <Badge className="shadow-lg" variant={"secondary"}>
            {props.date &&
              new Date(props.date).toLocaleDateString("id", {
                dateStyle: "medium",
              })}
          </Badge>
          <Badge className="shadow-lg uppercase" variant={"secondary"}>
            {props.category}
          </Badge>
        </div>
      </div>
      <Card className="mt-1 relative h-52 flex flex-col">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <CardHeader>
          <CardTitle className="text-ellipsis line-clamp-2">
            {props.title}
          </CardTitle>
          <CardDescription className="text-ellipsis line-clamp-2">
            {props.summary}
          </CardDescription>
        </CardHeader>
        <CardFooter className="relative flex-1 items-end">
          <Button variant={"outline"} className="group/button">
            Read More
            <span>
              <MoveUpRight className="w-4 group-hover/button:rotate-45 group-hover/button:size-5 transition-all duration-300" />
            </span>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
