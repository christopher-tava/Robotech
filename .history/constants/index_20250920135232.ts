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
    image: "/atdc.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "JavaScript",
    image: "/atdc.png",
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
    image: "/atdc.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "JavaScript",
    image: "/atdc.png",
    width: 60,
    height: 60,
  },

] as const;

export const BACKEND_SKILL = [
    {
    skill_name: "Go",
    image: "/atdc.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "JavaScript",
    image: "/atdc.png",
    width: 60,
    height: 60,
  },

] as const;

export const FULLSTACK_SKILL = [
    {
    skill_name: "Go",
    image: "/atdc.png",
    width: 60,
    height: 60,
  },
  {
    skill_name: "JavaScript",
    image: "/atdc.png",
    width: 60,
    height: 60,
  },

] as const;

export const OTHER_SKILL = [
  {
    skill_name: "Go",
    image: "/atdc.png",
    width: 60,
    height: 60,
  },
] as const;

export const PROJECTS = [
  {
    title: "January 23rd, 2026",
    description:
      "TBD - More information to come soon! Stay tuned for updates.",
    image: "/public/logo_robotech.png",
    link: "https://robotech2026.netlify.app",
  },
  {
    title: "January 24th, 2026",
    description:
      'TBD - More information to come soon! Stay tuned for updates.',
    image: "/public/logo_robotech.png",
    link: "https://robotech2026.netlify.app",
  },
  {
    title: "January 25th, 2026",
    description:
      'TBD - More information to come soon! Stay tuned for updates.',
    image: "/public/logo_robotech.png",
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
    title: "Sponsors",
    link: "#skills",
  },
  {
    title: "FAQ",
    link: "#projects",
  },
  {
    title: "APPLY NOW",
    link: "https://docs.google.com/forms/d/e/1FAIpQLScvzoEXp2FqPGn_8RbkU9X6wBSFUWS4iv_9fDyJt4bUhEChiA/viewform?usp=dialog",
  },
] as const;

export const LINKS = {
  sourceCode: "https://github.com/christopher-tava/robotech-website",
};
