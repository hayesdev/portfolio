import React from "react";
import sleak from "../assets/sleak_screenshot-2.png";
import salt from "../assets/saltinator_screenshot.PNG";
import event from "../assets/event_planner_screenshot-2.png";
import yulu from "../assets/yulu_screenshot-2.png";
import pulse from "../assets/disney_screenshot-2.png";
import {
  FaBehance,
  FaFacebook,
  FaLinkedin,
  FaTwitter,
  FaSketch,
} from "react-icons/fa";

export const data = [
  {
    title: "Disney Pulse",
    desc: "Disney Plus clone using React, Redux, react-router, firebase, and styled-components.",
    link: "https://disney-pulse.web.app/",
    image: pulse,
  },
  {
    title: "Sleak",
    desc: "Slack clone with messaging using React, Redux Toolkit, react-router, firebase, and styled-components.",
    link: "https://sleak-1acdd.web.app",
    image: sleak,
  },
  {
    title: "Yulu",
    desc: "Mobile-optimized Hulu UI clone made with Next.js, Tailwind.css, and Just-In-Time (JIT).",
    link: "https://yulu.vercel.app/",
    image: yulu,
  },
  {
    title: "Saltinator",
    desc: "Fullstack app using React, Redux, react-router, react-hook-forms, and Node.js with Express.",
    link: "https://saltinator.netlify.app/",
    image: salt,
  },
  {
    title: "Event Planner",
    desc: "responsive landing page using HTML, CSS, and LESS. First original design and still a favorite!",
    link: "https://pensive-mirzakhani-6d8023.netlify.app/",
    image: event,
  },
];

export const titles = [
  { title: ".developer()" },
  { title: ".designer()" },
  { title: ".digitalSherpa()" },
];

export const links = [
  {
    id: 1,
    url: "welcome",
    text: "home",
  },
  {
    id: 2,
    url: "about",
    text: "about",
  },
  {
    id: 3,
    url: "projects",
    text: "projects",
  },
  {
    id: 4,
    url: "contact",
    text: "contact",
  },
];

export const social = [
  {
    id: 1,
    url: "https://www.twitter.com",
    icon: <FaFacebook />,
  },
  {
    id: 2,
    url: "https://www.twitter.com",
    icon: <FaTwitter />,
  },
  {
    id: 3,
    url: "https://www.twitter.com",
    icon: <FaLinkedin />,
  },
  {
    id: 4,
    url: "https://www.twitter.com",
    icon: <FaBehance />,
  },
  {
    id: 5,
    url: "https://www.twitter.com",
    icon: <FaSketch />,
  },
];
