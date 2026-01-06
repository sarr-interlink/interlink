export interface MenuItemType {
    label: string,
    href: string,
    item?: MenuItemSubItem[]
}

export interface MenuItemSubItem {
     title: string,
     href: string,
     description: string
}

export const menuItems = [
  {
    label: "Accueil",
    href: "/",
    items: [],
  },

  {
    label: "Services",
    href: "/services",
    items: [],
  },

  {
    label: "Nos Offres",
    href: "/pricing",
    items: [],
  },

  {
    label: "Produits",
    href: "/products",
    items: [],
  },

  {
    label: "A propos",
    href: "/about",
    items: [],
  },

  {
    label: "Articles",
    href: "/article",
    items: [],
  },

  {
    label: "Contact",
    href: "/contact",
    items: [],
  },

];
