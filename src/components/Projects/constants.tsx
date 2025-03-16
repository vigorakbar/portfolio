import { JSX } from "react";
import pokemonPocket from "../../assets/pokemon-pocket.png";
import brainDumpster from "../../assets/brain-dumpster.png";
import theSiren from "../../assets/the-siren.png";
import wedding from "../../assets/wedding-invitation-web.png";
import myWedding from "../../assets/my-wedding.png";

interface Project {
  id: string;
  title: string;
  description: JSX.Element;
  image: string;
  category: string;
  technologies: string[];
  demoLink: string;
  codeLink: string;
}

export const projects: Project[] = [
  {
    id: "My Wedding Invitation",
    title: "My Wedding Invitation",
    description: (
      <span>
        My special wedding invitation project. Built from scratch by me and my
        wife for our special day. Featuring custom envelope scroll animation,
        form submission, scroll transition, and mobile-first UI.
      </span>
    ),
    image: myWedding,
    category: "React",
    technologies: ["React", "Typescript", "SASS", "Vite", "Vercel"],
    demoLink: "https://www.airavigor-wedding.com/",
    codeLink: "https://github.com/vigorakbar/airavigor",
  },
  {
    id: "Pokemon Pocket",
    title: "Pokemon Pocket",
    description: (
      <span>
        Pokemon deck application listing all of pokemon that you can catch using
        a randomizer. You can keep track of all the pokemon that you've catched.
        Using responsive design so you can play it on your phone! Go catch 'em
        all!
      </span>
    ),
    image: pokemonPocket,
    category: "React",
    technologies: ["React", "Material UI", "Emotion", "GraphQL"],
    demoLink: "https://vigorakbar.github.io/pokemon-pocket",
    codeLink: "https://github.com/vigorakbar/pokemon-pocket",
  },
  {
    id: "Brain Dumpster (Writing App)",
    title: "Brain Dumpster (Writing App)",
    description: (
      <span>
        Inspired by{" "}
        <a href="https://750words.com/" target="_blank" rel="noreferrer">
          750words.com
        </a>{" "}
        this web app is used to write anything on your mind with a target of 750
        words per day. Built using ReactJs, and Material UI. Using{" "}
        <a
          href="https://github.com/localForage/localForage"
          target="_blank"
          rel="noreferrer"
        >
          localForage
        </a>{" "}
        library for storing data. This one I use personally when I have a lot in
        my mind and just want to articulate my thinking into writing.
      </span>
    ),
    image: brainDumpster,
    category: "React",
    technologies: ["React", "Material UI", "localForage"],
    demoLink: "https://vigorakbar.github.io/brain-dumpster",
    codeLink: "https://github.com/vigorakbar/brain-dumpster",
  },
  {
    id: "The Siren",
    title: "The Siren",
    description: (
      <span>
        Implementation of one-page blog/magazine design concept. I downloaded a
        sketch design and Implemented part of the page using React. Started
        learning to use React Hooks in this project to create Image Carousel
        component from scratch!
      </span>
    ),
    image: theSiren,
    demoLink: "https://vigorakbar.github.io/the-siren/",
    codeLink: "https://github.com/vigorakbar/the-siren",
    category: "React",
    technologies: ["React", "Material UI"],
  },
  {
    id: "Brother's Wedding Invitation",
    title: "Brother's Wedding Invitation",
    description: (
      <span>
        My very first personal project! Built for my big brother wedding
        ceremony. I built this using jQuery and{" "}
        <a
          href="https://michalsnik.github.io/aos/"
          target="_blank"
          rel="noreferrer"
        >
          AOS
        </a>{" "}
        library for the scroll animation. I learned to deploy project to AWS
        when working in this project.
      </span>
    ),
    image: wedding,
    demoLink: "https://vigorakbar.github.io/wedding-invitation-web/",
    codeLink: "https://github.com/vigorakbar/wedding-invitation-web",
    category: "jQuery",
    technologies: ["jQuery", "CSS", "AOS"],
  },
];
