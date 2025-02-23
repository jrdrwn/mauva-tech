import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { MountainIcon } from "lucide-react";

export default function Footer() {
  return (
    <footer>
      <div className="mx-auto container grid grid-cols md:grid-cols-3 lg:grid-cols-5 gap-4 py-20">
        <div className="col-span-2">
          <MountainIcon size={150} />
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight my-4">
            From a small team with big dreams to a trusted partner for
            businesses worldwide.
          </h3>
          <Select defaultValue={"en"}>
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
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
            Menu
          </h3>
          <div className="flex flex-col items-start">
            <Button variant={"link"} className="px-0">
              Home
            </Button>
            <Button variant={"link"} className="px-0">
              About
            </Button>
            <Button variant={"link"} className="px-0">
              Services
            </Button>
            <Button variant={"link"} className="px-0">
              Projects
            </Button>
            <Button variant={"link"} className="px-0">
              Blogs
            </Button>
            <Button variant={"link"} className="px-0">
              Contact
            </Button>
          </div>
        </div>
        <div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
            Social
          </h3>
          <div className="flex flex-col items-start">
            <Button variant={"link"} className="px-0">
              Facebook
            </Button>
            <Button variant={"link"} className="px-0">
              Twitter
            </Button>
            <Button variant={"link"} className="px-0">
              Instagram
            </Button>
            <Button variant={"link"} className="px-0">
              LinkedIn
            </Button>
          </div>
        </div>
        <div>
          <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-4">
            Contact
          </h3>
          <div className="flex flex-col items-start">
            <Button variant={"link"} className="px-0">
              Jakarta, Indonesia
            </Button>
            <Button variant={"link"} className="px-0">
              +62 123 4567 890
            </Button>
            <Button variant={"link"} className="px-0">
              info@mauvatech.com
            </Button>
          </div>
        </div>
      </div>
      <Separator className="mx-auto container" />
      <div className="mx-auto container flex gap-2 items-center justify-between py-5">
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          © 2025 MauvaTech. All rights reserved.
        </p>
        <div className="flex gap-2">
          <Button variant={"link"} className="px-0">
            Privacy Policy
          </Button>
          <Button variant={"link"} className="px-0">
            Terms & Conditions
          </Button>
        </div>
      </div>
    </footer>
  );
}
