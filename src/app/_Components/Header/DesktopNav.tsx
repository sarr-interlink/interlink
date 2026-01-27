"use client"
import * as React from "react"
import Link from "next/link"
import { useIsMobile } from "@/hooks/use-mobile"

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"

import { menuItems, MenuItemType } from "../utils"

export function DesktopNavigation() {
  const isMobile = useIsMobile()

  return (

        <NavigationMenu viewport={isMobile} className="hidden md:block">
        
          <NavigationMenuList className="flex-1 flex">
            {menuItems.map((item: MenuItemType) => {
                return (
                    <NavigationItem item={item} key={item.label}/>
                )
            })}
          </NavigationMenuList>
        
        </NavigationMenu>

  )
}


const NavigationItem = ({item}: {item: MenuItemType}) => {
    return (
        <NavigationMenuItem className="px-3">
          <NavigationMenuLink className="text-md font-extrabold text-white " asChild>
            <Link href={item.href}>{item.label}</Link>
          </NavigationMenuLink>
        </NavigationMenuItem>
    )
}

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}
