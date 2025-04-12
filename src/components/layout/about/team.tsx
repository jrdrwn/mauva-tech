import { Button } from '@/components/ui/button';
import { IconBrandGithub, IconBrandLinkedin } from '@tabler/icons-react';
import Image from 'next/image';
import Link from 'next/link';

import TitleSubSection from '../shared/title-sub-section';

export default function Team() {
  const teamMembers = [
    {
      name: 'John Doe',
      title: 'Founder & CEO',
      bio: 'Former co-founder of Opendoor. Early staff at Spotify and Clearbit.',
      imageUrl:
        'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Jane Doe',
      title: 'Engineering Manager',
      bio: 'Lead engineering teams at Figma, Pitch, and Protocol Labs.',
      imageUrl:
        'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Bob Smith',
      title: 'Product Manager',
      bio: 'Former PM for Linear, Lambda School, and On Deck.',
      imageUrl:
        'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      name: 'Peter Johnson',
      title: 'Frontend Developer',
      bio: 'Former frontend dev for Linear, Coinbase, and Postscript.',
      imageUrl:
        'https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];

  return (
    <section className="container mx-auto flex h-full flex-col items-center justify-center py-16">
      <TitleSubSection
        title="Meet the Team"
        description="The passionate minds behind MauvaTech."
      />
      <div className="grid w-full grid-cols-1 gap-x-8 gap-y-12 px-2 md:grid-cols-2">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center gap-4  md:flex-row md:items-stretch md:gap-8"
          >
            <Image
              src={member.imageUrl}
              alt={member.name}
              className="aspect-square w-40 rounded-xl bg-secondary object-cover"
              width={600}
              height={600}
            />
            <div className="flex flex-col items-center text-center md:items-start md:text-left">
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-sm text-muted-foreground">{member.title}</p>
              <p className="mt-3 line-clamp-2">{member.bio}</p>
              <div className="mt-3 flex flex-1 items-end gap-2.5 md:mt-0 ">
                <Button
                  className="bg-accent text-muted-foreground shadow-none hover:bg-accent"
                  size="icon"
                  asChild
                >
                  <Link href="#" target="_blank">
                    <IconBrandLinkedin className="stroke-muted-foreground" />
                  </Link>
                </Button>
                <Button
                  className="bg-accent text-muted-foreground shadow-none hover:bg-accent"
                  size="icon"
                  asChild
                >
                  <Link href="#" target="_blank">
                    <IconBrandGithub className="stroke-muted-foreground" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
