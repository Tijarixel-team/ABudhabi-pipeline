export const navigation = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "FRP Pipes", href: "/products/frp-pipes" },
      { label: "Pre-Insulated Pipes", href: "/products/pre-insulated-pipes" },
      { label: "Fittings and Joint Systems", href: "/products/fittings-and-joint-systems" }
    ]
  },
  { label: "Industries", href: "/industries" },
  { label: "Capabilities", href: "/capabilities" },
  { label: "Quality", href: "/quality" },
  { label: "Projects", href: "/projects" },
  { label: "Downloads", href: "/downloads" },
  { label: "Contact", href: "/contact" }
] as const;
