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
    image: "/logo_robotech.png",
    link: "https://robotech2026.netlify.app",
  },
  {
    title: "January 24th, 2026",
    description:
      'TBD - More information to come soon! Stay tuned for updates.',
    image: "/logo_robotech.png",
    link: "https://robotech2026.netlify.app",
  },
  {
    title: "January 25th, 2026",
    description:
      'TBD - More information to come soon! Stay tuned for updates.',
    image: "/logo_robotech.png",
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
    title: "Location",  
    link: "#location",  
  },
  {
    title: "APPLY NOW",
    link: "https://luma.com/suep29g0",
  },

] as const;

export const LINKS = {
  sourceCode: "https://github.com/christopher-tava/robotech-website",
};
export const FAQ_DATA = [
  {
    question: "Am I eligible?",
    answer: "Most likely yes! You just have to be a current undergrad or grad student in the Atlanta area at the time of the event. GT students will receive priority registration but other university students are welcome to apply after reading the next FAQ!"
  },
  {
    question: "Is it free to participate?",
    answer: "Yes! There is no entry fee or cost. However, if you are not at GT, you will need to arrange your own transportation to and from the event."
  },
  {
    question: "What is the application process?",
    answer: "Apply through the application Google Form until XXXX @ 11:59 pm. You will only be considered for the track you apply for and then accepted, waitlisted, or rejected for that track. Teammate requests are considered."
  },
  {
    question: "What if I don't have a full team before the event?",
    answer: "No problem! We will make available nearly all the resources you would need to be successful in your track. However, that may mean that certain parts are limited to competitors in the same track."
  },
  {
    question: "Do I have to pay for parts?",
    answer: "No! We will make available nearly all the resources you would need to be successful in your track. However, that may mean that certain parts are limited to competitors in the same track."
  },
  {
    question: "Which meals do I get for free as a competitor?",
    answer: "A Friday evening snack; breakfast, lunch and dinner on Saturday; and Sunday breakfast."
  }
] as const;