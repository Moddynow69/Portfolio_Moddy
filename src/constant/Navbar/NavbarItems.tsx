type NavbarItemsType = {
  [key: number]: {
    title: string;
    href: string;
  };
};

const NavbarItems: NavbarItemsType = {
  0: {
    title: "Home",
    href: "/home",
  },
  1: {
    title: "About",
    href: "/about",
  },
  2: {
    title: "Projects",
    href: "/projects",
  },
  3: {
    title: "Contact",
    href: "/contact",
  },
};

export default NavbarItems;
