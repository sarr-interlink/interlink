"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

import { menuItems, MenuItemType } from "../utils";

export function DesktopNavigation() {
  const isMobile = useIsMobile();
  const pathname = usePathname();

  return (
    <NavigationMenu viewport={isMobile} className="hidden md:block">
      <NavigationMenuList className="flex-1 flex items-center gap-x-9">
        {menuItems.map((item: MenuItemType) => {
          const isActive =
            pathname === item.href ||
            (item.href !== "/" && pathname.startsWith(item.href));
          return (
            <NavigationItem item={item} key={item.label} isActive={isActive} />
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const NavigationItem = ({
  item,
  isActive,
}: {
  item: MenuItemType;
  isActive: boolean;
}) => {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink
        asChild
        className={cn(
          "bg-transparent hover:bg-transparent data-active:bg-transparent data-[state=open]:bg-transparent",
          "relative text-lg font-semibold  transition-colors duration-300 px-3 py-2 ",
          "after:absolute after:left-0 after:-bottom-1 after:h-0.5 after:w-0 after:bg-current after:transition-all after:duration-300 after:content-['']",
          isActive
            ? "text-[#0B1F3B]  after:w-full hover:bg-white/10 font-bold px-3 py-2 text-lg md:text-xl backdrop-blur-lg border border-white/50 hover:border-white/10"
            : "hover:shadow-xl relative   text-[#0d4c92] hover:after:w-full ",
        )}
      >
        {/* <NavigationMenuLink className="text-md font-extrabold  text-[#144162]" asChild> */}
        <Link href={item.href}>{item.label}</Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
};
