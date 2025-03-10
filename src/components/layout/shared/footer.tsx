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

export default function Footer() {
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
              <Button variant={'link'} className="px-0">
                Home
              </Button>
              <Button variant={'link'} className="px-0">
                About
              </Button>
              <Button variant={'link'} className="px-0">
                Services
              </Button>
              <Button variant={'link'} className="px-0">
                Projects
              </Button>
              <Button variant={'link'} className="px-0">
                Blogs
              </Button>
              <Button variant={'link'} className="px-0">
                Contact
              </Button>
            </div>
          </div>
          <div>
            <h3 className="mb-4  text-xl font-semibold tracking-tight md:text-2xl">
              Social
            </h3>
            <div className="flex flex-col items-start">
              <Button variant={'link'} className="px-0">
                Facebook
              </Button>
              <Button variant={'link'} className="px-0">
                Twitter
              </Button>
              <Button variant={'link'} className="px-0">
                Instagram
              </Button>
              <Button variant={'link'} className="px-0">
                LinkedIn
              </Button>
            </div>
          </div>
          <div>
            <h3 className="mb-4  text-xl font-semibold tracking-tight md:text-2xl">
              Contact
            </h3>
            <div className="flex flex-col items-start">
              <Button variant={'link'} className="px-0">
                Jakarta, Indonesia
              </Button>
              <Button variant={'link'} className="px-0">
                +62 123 4567 890
              </Button>
              <Button variant={'link'} className="px-0">
                info@mauvatech.com
              </Button>
            </div>
          </div>
        </div>
        <Separator className="my-4 md:my-8" />
        <div className=" flex flex-col-reverse flex-wrap items-center justify-center gap-2 md:flex-row md:justify-between">
          <p className="leading-7 [&:not(:first-child)]:mt-6">
            © 2025 MauvaTech. All rights reserved.
          </p>
          <div className="flex gap-2">
            <Button variant={'link'} className="px-0">
              Privacy Policy
            </Button>
            <Button variant={'link'} className="px-0">
              Terms & Conditions
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}
