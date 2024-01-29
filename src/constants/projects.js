import merchantPortal from "../assets/merchant-portal.png";
import pockemonPocket from "../assets/pokemon-pocket.png";
import gem from "../assets/gem.png";
import brainDumpster from "../assets/brain-dumpster.png";
import theSiren from "../assets/the-siren.png";
import weddingInvitation from "../assets/wedding-invitation-web.png";

export const projects = [
  {
    title: "DANA - Merchant Portal",
    description: (
      <span>
        Dashboard application for DANA's merchant or merchant that want to join
        DANA by using onboarding process.
      </span>
    ),
    homepage: "https://dashboard.dana.id/",
    src: merchantPortal,
  },
  {
    title: "GOERS Event Manager",
    description: (
      <span>
        Event management application that my team and I developed when I had an
        internship at GOERS. Build using React, Redux, Boostsrap, and
        Styled-Components.
      </span>
    ),
    homepage: "https://gem.goersapp.com/",
    src: gem,
  },
  {
    title: "Pokemon Pocket",
    description: (
      <span>
        <span>
          Pokemon deck application listing all of pokemon that you can catch
          using a randomizer. You can keep track of all the pokemon that you've
          catched. Using responsive design so you can play it on your phone! Go
          catch 'em all!
        </span>
        <br />
        <br />
        <span>
          <a
            href="https://github.com/vigorakbar/pokemon-pocket"
            target="_blank"
            rel="noreferrer"
          >
            Github Repo
          </a>
        </span>
      </span>
    ),
    homepage: "https://vigorakbar.github.io/pokemon-pocket",
    src: pockemonPocket,
  },
  {
    title: "Brain Dumpster",
    description: (
      <span>
        <span>
          Web app for writing. Inspired by{" "}
          <a href="https://750words.com/" target="_blank" rel="noreferrer">
            750words.com
          </a>
          . Built using ReactJs, and Material UI. Using{" "}
          <a
            href="https://github.com/localForage/localForage"
            target="_blank"
            rel="noreferrer"
          >
            localForage
          </a>{" "}
          library for storing data. This one I use personally when I have a lot
          in my mind and just want to dump the "trash" in my brain into writing
          :D
        </span>
        <br />
        <br />
        <span>
          <a
            href="https://github.com/vigorakbar/brain-dumpster"
            target="_blank"
            rel="noreferrer"
          >
            Github Repo
          </a>
        </span>
      </span>
    ),
    homepage: "https://vigorakbar.github.io/brain-dumpster",
    src: brainDumpster,
  },
  {
    title: "The Siren",
    description: (
      <span>
        Implementation of one-page blog/magazine design concept. I downloaded a
        sketch design and Implemented part of the page using React. Started
        learning to use React Hooks in this project to create Image Carousel
        component from scratch!
      </span>
    ),
    homepage: "https://vigorakbar.github.io/the-siren/",
    src: theSiren,
  },
  {
    title: "Wedding Invitation",
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
    homepage: "https://vigorakbar.github.io/wedding-invitation-web/",
    src: weddingInvitation,
  },
];
