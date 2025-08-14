import { Icons } from "@/components/icons";
import { HomeIcon } from "lucide-react";

export const DATA = {
  name: "Nafis Nihal",
  initials: "NN",
  url: "https://nafisnihal.github.io/",
  location: "Dhaka, Bangladesh",
  description:
    "Frontend tinkerer, UI optimizer, and occasional bug whisperer. I build things that make the web a better place.",
  summary:
    "I'm a frontend engineer who blends performance, usability, and attention to detail into every interface I build. My web development journey began at AIUB, where I discovered a lasting passion for React and Next.js. Over the past 2.5 years, I’ve worked on projects ranging from education platforms to high-traffic news portals — always aiming for scalable UI, clean code, and seamless collaboration. Outside of work, you'll find me experimenting with UI patterns, fine-tuning performance, and sharing insights with the developer community.",
  avatarUrl: "/me.png",
  skills: [
    "React.js",
    "Next.js",
    "JavaScript",
    "TypeScript",
    "Redux",
    "Zustand",
    "TailwindCSS",
    "ShadCN",
    "Material-UI",
    "Ant Design",
    "TanStack Query",
    "Git",
  ],
  slugs: [
    "typescript",
    "javascript",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "postgresql",
    "vercel",
    "docker",
    "git",
    "jira",
    "github",
    "visualstudiocode",
    "figma",
  ],
  navbar: [{ href: "/", icon: HomeIcon, label: "Home" }],
  contact: {
    email: "nafisnihal12@gmail.com",
    tel: "+8801797601756",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/nafisnihal",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/nafisnihal/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/nafis_nihal",
        icon: Icons.x,

        navbar: true,
      },
      Whatsapp: {
        name: "WhatsApp",
        url: "https://wa.me/8801797601756",
        icon: Icons.whatsapp,

        navbar: false,
      },

      email: {
        name: "Send Email",
        url: "mailto:nafisnihal12@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "Zzazzo Limited",
      href: "https://www.linkedin.com/company/zzazzo-limited",
      badges: [],
      location: "On-site",
      title: "Software Engineer (Frontend)",
      logoUrl: "/zzazzo.png",
      start: "May 2025",
      end: "Present",
      description:
        "I lead the frontend development of an online newspaper platform using Next.js, ShadCN, and TypeScript, focusing on performance and modular design. Working closely with product and backend teams in an Agile environment, I help deliver features efficiently while mentoring interns and junior developers through code reviews and pair programming.",
    },
    {
      company: "Techsist Ltd.",
      badges: [],
      href: "https://www.linkedin.com/company/techsistltd",
      location: "On-site",
      title: "Software Engineer - Frontend",
      logoUrl: "/techsist.png",
      start: "January 2023",
      end: "April 2025",
      description:
        "Developed responsive user interfaces for CRMs, dashboards, and e-commerce apps using Next.js, React.js, and TypeScript, reducing development time by 20% through reusable components. Optimized performance by cutting page load times by 30% with lazy loading and code-splitting techniques. Integrated RESTful APIs to ensure seamless data flow and feature implementation. Additionally, led the frontend development of an Institution Management System serving over 10,000 daily users, significantly improving operational efficiency.",
    },
  ],
  education: [
    {
      school: "American International University-Bangladesh (AIUB)",
      href: "https://www.aiub.edu",
      degree: "Computer Science and Engineering",
      logoUrl: "/aiub.png",
      start: "2018",
      end: "2022",
    },
  ],
  projects: [
    {
      title: "Umar Education",
      href: "https://umar-eg.com/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "Educational agency website for study abroad services, built with Next.js using server components and server-side rendering (SSR) for fast, SEO-friendly performance. Includes a custom CMS for efficient content management, enabling a smooth, dynamic experience for students exploring international education opportunities.",
      technologies: [
        "Next.js",
        "SSR",
        "Server Componenets",
        "Material-UI",
        "Rest API",
      ],
      links: [
        {
          type: "Website",
          href: "https://umar-eg.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/umareg.mp4",
    },
    {
      title: "UXPro Lab",
      href: "https://myuxpro.com/",
      dates: "June 2023 - Present",
      active: true,
      description:
        "UXPro Labs is a property service platform inspired by Bproperty, enhanced with a dynamic newsfeed similar to matchmaking apps. Built with a managed CMS and seamless backend integration, it features reusable components for efficient development and long-term scalability.",
      technologies: [
        "React",
        "Material-UI",
        "TypeScript",
        "React Query",
        "Reack Hook Form",
      ],
      links: [
        {
          type: "Website",
          href: "https://myuxpro.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video: "/uxpro.mp4",
    },
    {
      title: "Borgo",
      href: "",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Borgo is an Interactive Institution Information and Management System (IIIMS) web application for urban areas, developed by [EdStructure](https://www.linkedin.com/company/edstructure/). I have been involved with this project from its inception through my time at Techsist, contributing to the development of numerous features and playing a key role in shaping its functionality and user experience.",
      technologies: [
        "React",
        "React Query",
        "Ant Design",
        "TypeScript",
        "TailwindCSS",
      ],
      links: [],
      image: "",
      video: "/borgo.mp4",
    },
    {
      title: "Britto",
      href: "",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "A web application for managing rural schools, developed by [EdStructure](https://www.linkedin.com/company/edstructure/). I joined during the development phase to build the frontend, delivering key features and ensuring a clean, user-friendly experience for students, teachers, and administrators.",
      technologies: ["React", "React Query", "SCSS", "Bootstrap", "Rest API"],
      links: [],
      image: "",
      video: "britto.mp4",
    },
  ],
} as const;
