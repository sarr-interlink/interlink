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

  {
    label: "Technologie",
    href: "/tech",
    items: [],
  }

];

export interface ImageProp {
    imageUrl: string,
    imageAlt: string
}
export const techImages: ImageProp[] = [
    {
        imageUrl: "http://localhost:1337/uploads/react_native_e6b047e683.png",
        imageAlt: ""
    },
    {
        imageUrl: "http://localhost:1337/uploads/symfony_f79c2ffa2c.png",
        imageAlt: ""
    },
    {
        imageUrl: "http://localhost:1337/uploads/flutter_a8b74f56bb.png",
        imageAlt: ""
    },
    {
        imageUrl: "http://localhost:1337/uploads/docker_5d1df56bed.png",
        imageAlt: ""
    },
    {
        imageUrl: "http://localhost:1337/uploads/nodejs_2571d885bd.png",
        imageAlt: ""
    },
    {
        imageUrl: "http://localhost:1337/uploads/php_68c9307bce.png",
        imageAlt: ""
    },
    {
        imageUrl: "http://localhost:1337/uploads/typescript_a0d749f316.png",
        imageAlt: ""
    },
    {
        imageUrl: "http://localhost:1337/uploads/firebase_logo_bd988f4a66.png",
        imageAlt: ""
    },
    {
        imageUrl: "http://localhost:1337/uploads/next_js_logo_d378cb46ad.png",
        imageAlt: ""
    },
    {
        imageUrl: "http://localhost:1337/uploads/spring-boot.png",
        imageAlt: ""
    },

]

export  interface Article {
  id: number,
  imageSrc: string,
  title: string,
  description: string
  link: string
}



export const articles: Article[] = [
    {
      id: 1,
      imageSrc: "https://priv-web-nomeo-prod.apnl.ws/blog/article-66c6ec860999d.png",
      title: "Comment les chatbots intelligents transforment-ils le service client en ligne ?",
      description: "Les chatbots intelligents révolutionnent le service client en ligne en offrant une disponibilité 24/7, des réponses instantanées, et une personnalisation des interactions. En intégrant l'intelligence artificielle, ils permettent de réduire les coûts, d'améliorer l'expérience utilisateur, et de gérer efficacement un grand nombre de demandes simultanées.",
      link: "/blog/les%20chatbots%20intelligents%20transforment%20le%20service%20client%20en%20ligne",
    },
    {
      id: 2,
      imageSrc: "https://priv-web-nomeo-prod.apnl.ws/blog/article-66a7a944ab56f.png",
      title: "Comment l'Intelligence Artificielle peut-elle révolutionner votre expérience utilisateur ?",
      description: "Les chatbots intelligents révolutionnent le service client en ligne en offrant une disponibilité 24/7, des réponses instantanées, et une personnalisation des interactions. En intégrant l'intelligence artificielle, ils permettent de réduire les coûts, d'améliorer l'expérience utilisateur, et de gérer efficacement un grand nombre de demandes simultanées.",
      link: "/blog/les%20chatbots%20intelligents%20transforment%20le%20service%20client%20en%20ligne",
    },
    {
      id: 3,
      imageSrc: "https://priv-web-nomeo-prod.apnl.ws/blog/article-66a3760e47d5f.png",
      title: "L'IA dans les applications mobiles : quels sont les fondamentaux à connaître ?",
      description: "Les chatbots intelligents révolutionnent le service client en ligne en offrant une disponibilité 24/7, des réponses instantanées, et une personnalisation des interactions. En intégrant l'intelligence artificielle, ils permettent de réduire les coûts, d'améliorer l'expérience utilisateur, et de gérer efficacement un grand nombre de demandes simultanées.",
      link: "/blog/les%20chatbots%20intelligents%20transforment%20le%20service%20client%20en%20ligne",
    },
];


export const methodologieTabData = [
    {
        value: "conseil",
        iconClass: "ri-heart-pulse-line",
        title: "Conseil et définition de votre projet",
        tabContent: {
            title: "Conseil et définition de votre projet",
            listData: [
                "Identité graphique",
                "Logos",
                "Iconographie",
                "Colors",
            ]
        }
    },
    {
        value: "conception",
        iconClass: "ri-heart-pulse-line",
        title: "Conseil et définition de votre projet",
        tabContent: {
            title: "Conseil et définition de votre projet",
            listData: [
                "Identité graphique",
                "Logos",
                "Iconographie",
                "Colors",
            ]
        }
    },
    {
        value: "dev",
        iconClass: "ri-heart-pulse-line",
        title: "Développement technique",
        tabContent: {
            title: "Développement technique",
            listData: [
                "Agilité",
                "App (web/mobile/…)",
                "BO & API",
                "Tests",
            ]
        }
    },
    {
        value: "exploitation",
        iconClass: "ri-heart-pulse-line",
        title: "Lancement & Exploitation",
        tabContent: {
            title: "Conseil et définition de votre projet",
            listData: [
                "Hébergement & Mise en production (ou soumission sur les stores)",
                "Communication & Animation",
                "Analyse et optimisation",
                "Support, Maintenance & évolution"
            ]
        }
    }
]