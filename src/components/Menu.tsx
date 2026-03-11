"use client";

import Link from "next/link";
import Image from "next/image";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuContent,
  NavigationMenuLink,
} from "@/components/ui/navigation-menu";
import navData from "@/data/navigation.json";

export default function Menu() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-md dark:bg-black/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="transition-opacity hover:opacity-80">
          <Image
            src="/logo.png"
            alt="Portfolio Logo"
            width={80}
            height={40}
            priority
          />
        </Link>

        {/* Navigation */}
        <NavigationMenu>
          <NavigationMenuList>
            {navData.links.map((link) => (
              <NavigationMenuItem key={link.label}>
                {link.items ? (
                  <>
                    <NavigationMenuTrigger>{link.label}</NavigationMenuTrigger>
                    {/* Fixed: Removed non-standard Tailwind class and double padding */}
                    <NavigationMenuContent>
                      <ul className="flex w-70 flex-col gap-2 p-4">
                        {link.items.map((item) => (
                          <li key={item.title}>
                            <NavigationMenuLink asChild>
                              <Link
                                href={item.href}
                                className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-slate-100 hover:text-slate-900 focus:bg-slate-100 dark:hover:bg-slate-800 dark:hover:text-slate-50"
                              >
                                <div className="text-sm font-medium leading-none">
                                  {item.title}
                                </div>
                              </Link>
                            </NavigationMenuLink>
                          </li>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </>
                ) : (
                  /* Fixed: Applied the SPA-friendly `asChild` pattern to top-level links */
                  <NavigationMenuLink
                    asChild
                    className={navigationMenuTriggerStyle()}
                  >
                    <Link href={link.href}>{link.label}</Link>
                  </NavigationMenuLink>
                )}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
}
