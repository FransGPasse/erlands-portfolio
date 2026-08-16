type NavLink = {
  href: string;
  label: string;
  icon: string;
};

/** Site-relative paths; pass through `withBase` before use as href. */
export const navLinks: NavLink[] = [
  { href: "/about-me/", label: "About", icon: "ph-user" },
  { href: "/films/", label: "Film", icon: "ph-film-strip" },
  { href: "/photos/", label: "Photos", icon: "ph-camera" },
];
