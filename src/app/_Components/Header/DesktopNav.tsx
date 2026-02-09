"use client"
import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useIsMobile } from "@/hooks/use-mobile"
import { cn } from "@/lib/utils"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { menuItems, MenuItemType } from "../utils"

export function DesktopNavigation() {
  const isMobile = useIsMobile()
  const pathname = usePathname()

  return (
    <NavigationMenu viewport={isMobile} className="hidden md:block">
      <NavigationMenuList className="flex-1 flex items-center gap-1">
        {menuItems.map((item: MenuItemType) => {
            const isActive = pathname === item.href || (item.href !== '/' && pathname.startsWith(item.href))
            return (
                <NavigationItem item={item} key={item.label} isActive={isActive} />
            )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}

const NavigationItem = ({item, isActive}: {item: MenuItemType, isActive: boolean}) => {
    return (
        <NavigationMenuItem>
          <NavigationMenuLink 
            asChild
            className={cn(
                "text-sm font-bold transition-all duration-300 px-4 py-2 rounded-full",
                isActive 
                    ? "text-primary bg-primary/10 shadow-sm" 
                    : "text-white/80 hover:text-white hover:bg-white/5"
            )}
          >
            <Link href={item.href}>{item.label}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
    )
}
