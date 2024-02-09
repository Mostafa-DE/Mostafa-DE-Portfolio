export interface IProjectCardData {
  title: string;
  subtitle: string;
  description: string;
  techs: string;
  images: { src: string }[];
  demoLink?: string;
  githubLink?: string;
  isDemoBtnShow: boolean;
  isGithubBtnShow: boolean;
}

export const projectCardData: IProjectCardData[] = [
  {
    title: "DE Language (delang)",
    subtitle: "An interpreted, dynamic, high-level programming language.",
    description: `
    An interpreted, dynamic, high-level programming language. It is Javascript-Python-like, combining the two language syntaxes to create a straightforward, easy-to-understand language.
    `,
    techs: `Go`,
    images: [{ src: "/delang/delang3.png" }, { src: "/delang/delang2.png" }],
    demoLink: "https://delang.mostafade.com",
    githubLink: "https://github.com/Mostafa-DE/delang",
    isDemoBtnShow: true,
    isGithubBtnShow: true,
  },
  {
    title: "Unicorns Store",
    subtitle: "E-commerce platform",
    description: `
            Full-stack e-commerce platform built with Next.js, Material UI, and strapi as CMS.
            It has a lot of features like: product comparison, wish list, product details, auto size selection, and more.
        `,
    techs: `Next.js, Material UI, Strapi`,
    images: [
      { src: "/unicorns/home.png" },
      { src: "/unicorns/special_offers.png" },
      { src: "/unicorns/special_offers_with_hover.png" },
      { src: "/unicorns/wish_list_page.png" },
      { src: "/unicorns/compare_products.png" },
      { src: "/unicorns/details_page.png" },
    ],
    demoLink: "https://unicorns-store.com",
    githubLink: "https://github.com/Mostafa-DE/unicorn-store-frontend",
    isDemoBtnShow: true,
    isGithubBtnShow: true,
  },
  {
    title: "Al Fayyad Store",
    subtitle: "E-commerce platform",
    description: `
            Full-stack e-commerce platform built with Next.js, Material UI, and strapi as CMS.
            `,
    techs: `Next.js, Material UI, Strapi`,
    images: [
      { src: "/alfayyad/home_page.png" },
      { src: "/alfayyad/product_overview.png" },
      { src: "/alfayyad/cart_list.png" },
      { src: "/alfayyad/shipping_address_page.png" },
      { src: "/alfayyad/order_confirm.png" },
      { src: "/alfayyad/account_page.png" },
    ],
    demoLink: "https://alfayyad.vercel.app",
    isDemoBtnShow: true,
    isGithubBtnShow: false,
  },
  {
    title: "Awesome Color Picker",
    subtitle: "Color Picker",
    description: `
            Color picker built with React.js and Material UI.
            It has a lot of features like: color picker, custimizable color palettes, and more.
            You can easily click on the color to copy it to the clipboard.
            `,
    techs: `React.js, Material UI`,
    images: [
      { src: "/colors/home.png" },
      { src: "/colors/palette.png" },
      { src: "/colors/design_palette.png" },
      { src: "/colors/color_copied.png" },
    ],
    demoLink: "https://pcolors-nijg2n2k2-mostafa-de.vercel.app",
    githubLink: "https://github.com/Mostafa-DE/Colors-Project-With-React-app",
    isDemoBtnShow: true,
    isGithubBtnShow: true,
  },
  {
    title: "Simple Auth App (Django & React)",
    subtitle:
      "Simple demo app authentication using Django(drf and knox) and React(Vite).",
    description: `
            The idea of this app is to make Django handle all the cookies (Token)
            and all the authentication without the need to manage them on the frontend
        `,
    techs: `Django, Vite`,
    images: [{ src: "/auth/home.png" }],
    demoLink: "https://demoauth-gamma.vercel.app",
    githubLink: "https://github.com/Mostafa-DE/simple-auth-django-react",
    isDemoBtnShow: true,
    isGithubBtnShow: true,
  },
];
