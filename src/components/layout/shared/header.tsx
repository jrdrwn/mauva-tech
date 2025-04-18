'use client';

import { Button } from '@/components/ui/button';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '@/components/ui/navigation-menu';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import { ModeToggle } from '@/components/ui/theme-toggle';
import { cn } from '@/lib/utils';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { Menu, MousePointerClick, Phone } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Ref, useRef, useState } from 'react';

import ChangeLanguage from './change-language';

export default function Header() {
  const menus = [
    {
      title: 'Home',
      href: '/',
    },
    {
      title: 'About',
      href: '/about',
    },
    {
      title: 'Services',
      href: '/services',
    },
    {
      title: 'Articles',
      href: '/articles',
    },
    {
      title: 'Projects',
      href: '/projects',
    },
    {
      title: 'Contact',
      href: '/contact',
    },
    {
      title: 'Pricing',
      href: '/pricing',
    },
  ];

  const pathname = usePathname();

  const { scrollY } = useScroll();
  const [transformHeader, setTransformHeader] = useState(false);
  const ref: Ref<HTMLElement> | undefined = useRef(null);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (ref.current && latest > ref.current.clientHeight) {
      setTransformHeader(true);
    } else {
      setTransformHeader(false);
    }
  });

  return (
    <header
      ref={ref}
      className={cn(
        'sticky z-50 transition-[top,padding] ',
        transformHeader
          ? ' container  top-1 rounded-full mx-auto px-4 bg-transparent'
          : 'w-full top-0 border-border border-b ',
      )}
    >
      <div
        className={cn(
          'container mx-auto flex h-16  items-center justify-between px-2 transition-[border-radius,padding] ',
          transformHeader
            ? 'border border-border rounded-full px-3 bg-background/70 backdrop-blur-3xl'
            : 'rounded-none',
        )}
      >
        <Link
          href="/"
          scroll={false}
          className="flex items-center gap-2"
          prefetch={false}
        >
          <Button size="icon" className="rounded-full">
            <MousePointerClick />
            <span className="sr-only">Mauva Tech</span>
          </Button>
        </Link>
        <NavigationMenu>
          <NavigationMenuList className="hidden items-center gap-2 text-sm font-medium lg:flex lg:gap-2 xl:gap-6">
            {menus.map((menu) => (
              <NavigationMenuItem key={menu.title}>
                <Link href={menu.href} legacyBehavior passHref>
                  <NavigationMenuLink
                    className={navigationMenuTriggerStyle({
                      className: 'bg-transparent ',
                    })}
                    active={pathname === menu.href}
                  >
                    {menu.title}
                  </NavigationMenuLink>
                </Link>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
        <div className="flex items-center gap-4">
          <div className="hidden items-center gap-2 text-sm font-medium md:flex">
            <Phone className="size-5 text-foreground/70" />
            <span className="text-foreground/70">123-456-7890</span>
          </div>
          <ChangeLanguage />
          <ModeToggle />
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full lg:hidden"
              >
                <Menu className="size-5 text-foreground/70" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="lg:hidden">
              <SheetTitle>Menu</SheetTitle>
              <NavigationMenu>
                <NavigationMenuList className="grid gap-4 p-4">
                  {menus.map((menu) => (
                    <NavigationMenuItem key={menu.title}>
                      <Link href={menu.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={navigationMenuTriggerStyle()}
                          active={pathname === menu.href}
                        >
                          {menu.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
