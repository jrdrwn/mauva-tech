import { Button } from '@/components/ui/button';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Separator } from '@/components/ui/separator';
import { MountainIcon } from 'lucide-react';
import Link from 'next/link';

interface LinkItem {
  name: string;
  href: string;
  target?: string;
}

function LinkGroup(links: LinkItem[]) {
  return links.map((link) => (
    <Link href={link.href} key={link.name} target={link.target}>
      <Button variant={'link'} className="px-0 text-muted-foreground">
        {link.name}
      </Button>
    </Link>
  ));
}

export default function Footer() {
  const menuLinks: LinkItem[] = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Projects', href: '/projects' },
    { name: 'Blogs', href: '/blog' },
    { name: 'Contact', href: '/contact' },
  ];
  const socialLinks: LinkItem[] = [
    { name: 'Facebook', href: 'https://facebook.com', target: '_blank' },
    { name: 'Twitter', href: 'https://twitter.com', target: '_blank' },
    { name: 'Instagram', href: 'https://instagram.com', target: '_blank' },
    { name: 'LinkedIn', href: 'https://linkedin.com', target: '_blank' },
  ];
  const contactLinks: LinkItem[] = [
    {
      name: 'Jakarta, Indonesia',
      href: 'https://goo.gl/maps/xyz',
      target: '_blank',
    },
    { name: '+62 123 4567 890', href: 'tel:+621234567890', target: '_blank' },
    {
      name: 'info@mauvatech.com',
      href: 'mailto:info@mauvatech.com',
      target: '_blank',
    },
  ];

  const footerLinks: LinkItem[] = [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
  ];

  return (
    <footer className="pt-10 md:py-16">
      <div className="container mx-auto rounded-t-3xl bg-secondary/50 p-4 md:rounded-3xl md:p-8">
        <div className=" grid gap-8  sm:grid-cols-2 sm:gap-4  lg:grid-cols-5">
          <div className="col-span-2">
            <MountainIcon size={150} />
            <h3 className="my-4  text-xl font-semibold tracking-tight md:text-2xl">
              From a small team with big dreams to a trusted partner for
              businesses worldwide.
            </h3>
            <Select defaultValue={'en'}>
              <SelectTrigger className="w-max">
                <SelectValue placeholder="Language" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="en" defaultChecked>
                  English
                </SelectItem>
                <SelectItem value="id">Indonesia</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div>
            <h3 className="mb-4  text-xl font-semibold tracking-tight md:text-2xl">
              Menu
            </h3>
            <div className="flex flex-col items-start">
              {LinkGroup(menuLinks)}
            </div>
          </div>
          <div>
            <h3 className="mb-4  text-xl font-semibold tracking-tight md:text-2xl">
              Social
            </h3>
            <div className="flex flex-col items-start">
              {LinkGroup(socialLinks)}
            </div>
          </div>
          <div>
            <h3 className="mb-4  text-xl font-semibold tracking-tight md:text-2xl">
              Contact
            </h3>
            <div className="flex flex-col items-start">
              {LinkGroup(contactLinks)}
            </div>
          </div>
        </div>
        <Separator className="my-4 md:my-8" />
        <div className=" flex flex-col-reverse flex-wrap items-center justify-center gap-2 md:flex-row md:justify-between">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            © 2025 MauvaTech. All rights reserved.
          </p>
          <div className="flex gap-2">{LinkGroup(footerLinks)}</div>
        </div>
      </div>
    </footer>
  );
}
