import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

export const SKILL_DATA = [
    {
    skill_name: "Go",
    image: "go.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "JavaScript",
    image: "javascript.png",
    width: 60,
    height: 60,
  },

] as const;

export const SOCIALS = [
  {
    name: "Instagram",
    icon: RxInstagramLogo,
    link: "https://instagram.com/gt_ieee",
  },
] as const;

export const FRONTEND_SKILL = [
    {
    skill_name: "Go",
    image: "/icon1.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "JavaScript",
    image: "/icon2.png",
    width: 60,
    height: 60,
  },

] as const;

export const BACKEND_SKILL = [
    {
    skill_name: "Go",
    image: "/icon2.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "JavaScript",
    image: "/icon2.png",
    width: 60,
    height: 60,
  },

] as const;

export const FULLSTACK_SKILL = [
    {
    skill_name: "Go",
    image: "/gt.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "JavaScript",
    image: "/gt.png",
    width: 60,
    height: 60,
  },

] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "gt.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "January 23rd, 2026",
    description:
      "TBD - More information to come soon! Stay tuned for updates.",
    image: "/gt.png",
    link: "https://robotech2026.netlify.app",
  },
  {
    title: "January 24th, 2026",
    description:
      'TBD - More information to come soon! Stay tuned for updates.',
    image: "/gt.png",
    link: "https://robotech2026.netlify.app",
  },
  {
    title: "January 25th, 2026",
    description:
      'TBD - More information to come soon! Stay tuned for updates.',
    image: "/gt.png",
    link: "https://robotech2026.netlify.app",
  },
] as const;

export const FOOTER_DATA = [
  {
    title: "Join IEEE @ GT",
    data: [
      {
        name: "Discord",
        icon: RxDiscordLogo,
        link: "https://robotech2026.netlify.app",
      },
    ],
  },
  {
    title: "Social Media",
    data: [
      {
        name: "Instagram",
        icon: RxInstagramLogo,
        link: "https://www.instagram.com/gt_ieee/",
      },
    ],
  },
  {
    title: "About",
    data: [
      {
        name: "Become a Sponsor",
        icon: null,
        link: "https://sites.gatech.edu/ece-ieee/",
      },
      {
        name: "Contact IEEE",
        icon: null,
        link: "mailto:gatechiee@gmail.com",
      },
      {
        name: "Contact Event Director",
        icon: null,
        link: "mailto:ctava3@gatech.edu",
      },
    ],
  },
] as const;

export const NAV_LINKS = [
  {
    title: "About",
    link: "#about-me",
  },
  {
    title: "Tracks",
    link: "#skills",
  },
  {
    title: "Schedule",
    link: "#projects",
  },
  {
    title: "FAQ",
    link: "#projects",
  },
  {
    title: "Sponsors",
    link: "#projects",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/christopher-tava/robotech-website",
};
