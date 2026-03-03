import { AiFillHome, AiFillMail, AiFillCode } from "react-icons/ai";

const base = import.meta.env.BASE_URL;

export const menuItems = [
  {
    title: "Home",
    href: "#home",
    icon: <AiFillHome />,
  },
  {
    title: "Projects",
    href: "#projects",
    icon: <AiFillCode />,
  },
  {
    title: "Contact",
    href: "#contact",
    icon: <AiFillMail />,
  },
];

export const projectItems = [
  {
    id: "world-1",
    imgUrl: `${base}dendent.webp`,
    logoUrl: `${base}dendent-card.png`,
    accent: "from-emerald-900/80 to-teal-900/90",
    title: "DenDent Distribution",
    description:
      "B2C e-commerce and product catalog for dental labs and practices. Browse consumables — discs, brushes, abrasive stones, mandrels, polish — by Lab or Cabinet. Filter by price, manufacturer, and material to find the right products quickly.",
    live: "https://dendentdistribution.ro",
    tech_stack: ["react", "next", "trpc", "mongodb", "payload", "tailwind", "zod"],
  },
  {
    id: "world-2",
    imgUrl: `${base}auto-docs.webp`,
    logoUrl: `${base}auto-docs-card.png`,
    accent: "from-sky-900/80 to-indigo-900/90",
    title: "Vehicle Documents Manager",
    description:
      "Track your car’s documents in one place: technical inspection (ITP), insurance (RCA), and rovinietă (road tax). Get expiry reminders and an optional daily email so you never miss a renewal. Dashboard with per-vehicle editing and secure login.",
    live: "https://edw-seven.vercel.app/sign-in?demo=true",
    source_code: "https://github.com/RoR9/edw",
    tech_stack: ["react", "next", "mongodb", "tailwind", "zod", "node"],
  },
  {
    id: "world-3",
    imgUrl: `${base}poker-plan.webp`,
    logoUrl: `${base}planning-poker-card.png`,
    accent: "from-rose-900/80 to-amber-900/70",
    title: "Planning Poker",
    description:
      "Run story-point estimation with your team in real time. Create a session, share the link, and everyone votes on backlog items. Reveal when ready and see consensus at a glance. Works for remote or in-person agile teams, no sign-up to join.",
    live: "https://plan-poker-sooty.vercel.app/",
    source_code: "https://github.com/RoR9/planning-poker",
    tech_stack: ["react", "vite", "tailwind", "socketio", "typescript", "node"],
  },
];

export const socials = [
  {
    name: "linkedin",
    url: "https://md.linkedin.com/in/valeriu-verebceanu-a9a213272",
  },
  {
    name: "codewars",
    url: "https://www.codewars.com/users/RoR9/",
  },
  {
    name: "github",
    url: "https://github.com/RoR9",
  },
];
