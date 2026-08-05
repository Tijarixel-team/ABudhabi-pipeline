export const navigation = [
  {
    label: "Products",
    href: "/products",
    children: [
      { label: "All product systems", href: "/products" },
      { label: "FRP Pipes", href: "/products/frp-pipes" },
      { label: "Pre-Insulated Pipes", href: "/products/pre-insulated-pipes" },
      { label: "Fittings and Joint Systems", href: "/products/fittings-and-joint-systems" }
    ]
  },
  { label: "Applications", href: "/industries" },
  { label: "Capabilities", href: "/capabilities" },
  {
    label: "Company",
    href: "/about",
    children: [
      { label: "About ADPF", href: "/about" },
      { label: "Quality and approvals", href: "/quality" },
      { label: "Project experience", href: "/projects" }
    ]
  },
  { label: "Resources", href: "/downloads" }
] as const;
