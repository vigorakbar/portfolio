import React, { Component } from "react";
import Styled from "styled-components";

import merchantPortal from "./assets/merchant-portal.png"
import gem from "./assets/gem.png";
import brainDumpster from "./assets/brain-dumpster.png";
import theSiren from "./assets/the-siren.png";
import weddingInvitation from "./assets/wedding-invitation-web.png";
import Card from "./components/Card";

const Nav = Styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 40px;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  background-color: #3d7475;

  .menu-bar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 2000px;
    flex-basis: 500px;

    a {
      color: #eac67a;
      text-decoration: none;
    }

    a:hover {
      color: #f8ecd3
    }

    .main {
      font-weight: 800;
      margin-right: 25px;
    }
  }
`;

const Cover = Styled.div`
  background: #479c9d;
  display: flex;
  position: relative;

  .inner-cover {
    margin: 0 auto;
    width: 100%;
    max-width: 1214px;
  }

  .body-wrapper {
    margin-top: 30px;
    color: #3d3b3b;
    font-size: 35px;

    @media only screen and (max-width: 400px) {
      margin-top: 10px;
    }
  }&#128526;

  .content {
    margin: 32px;
    margin-left: 60px;
    font-size: 4rem;

    @media only screen and (max-width: 768px) {
      margin-left: 32px;
    }

    @media only screen and (max-width: 532px) {
      font-size: 3rem;
    }

    @media only screen and (max-width: 416px) {
      font-size: 2.1rem;
      margin: 20px;
    }
  }

  .text-title {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    color: #3d3b3b;
  }

  .profile {
    font-size: 1.8rem;
    @media only screen and (max-width: 532px) {
      font-size: 1.5rem;
    }
    @media only screen and (max-width: 416px) {
      font-size: 1.2rem;
    }
  }
`;

const Section = Styled.div`
  margin: 20px;
  * * {
    color: #3d3b3b;
  }

  .project-wrapper {
    margin: 0 auto;
    width: 100%;
    max-width: 1214px;
  }

  .title {
    font-family: 'Raleway', sans-serif;
    margin-left: 40px;
    margin-top: 50px;

    h1 {
      font-size: 2.5rem;
      font-weight: 600;
    }

    @media only screen and (max-width: 532px) {
      font-size: 40px;
      margin-left: 0;
      text-align: center;

      h1 {
        font-size: 2.3rem;
        font-weight: 600;
      }
    }

    @media only screen and (max-width: 416px) {
      h1 {
        font-size: 2rem;
      }
    }
  }

  .project-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  .experience-container {
    margin-left: 40px;
    @media only screen and (max-width: 532px) {
      margin-left: 0;
    }
  }

  div {
    margin-bottom: 50px;
  }
`;

class App extends Component {
  render() {
    const projects = [
      {
        title: "DANA - Merchant Portal",
        description: (
          <span>
            Dashboard application for DANA's merchant or merchant that want to
            join DANA by using onboarding process.
          </span>
        ),
        homepage: "https://dashboard.dana.id/",
        src: merchantPortal,
      },
      {
        title: "GOERS Event Manager",
        description: (
          <span>
            Event management application that my team and I developed when I had
            an internship at GOERS. Build using React, Redux, Boostsrap, and
            Styled-Components.
          </span>
        ),
        homepage: "https://gem.goersapp.com/",
        src: gem,
      },
      {
        title: "Brain Dumpster",
        description: (
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
            library for storing data. This one I use personally when I have a
            lot in my mind and just want to dump the "trash" in my brain into
            writing :D
          </span>
        ),
        homepage: "https://vigorakbar.github.io/brain-dumpster",
        src: brainDumpster,
      },
      {
        title: "The Siren",
        description: (
          <span>
            Implementation of one-page blog/magazine design concept. It's just a
            part of the page. I downloaded a sketch design and expired the free
            version before I finished the whole design haha. Built using React.
            Started learning to use React Hooks with this one!
          </span>
        ),
        homepage: "https://vigorakbar.github.io/the-siren/",
        src: theSiren,
      },
      {
        title: "Wedding Invitation",
        description: (
          <span>
            My very first personal project! Built for my brother wedding
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

    const experience = [
      {
        company: "DANA Indonesia",
        companyHomepage: "https://www.dana.id/",
        title: "Associate Software Development Engineer",
        time: "(Nov 2019 - Present)",
      },
      {
        company: "Surya Teknologi Nasional",
        companyHomepage: "https://suryateknologi.co.id/",
        title: "Frontend Engineer",
        time: "(May 2019 - Oct 2019)",
      },
      {
        company: "eDaun Inspirasi Dijital",
        companyHomepage: "https://www.edaun.com/",
        title: "Web Developer Part Time",
        time: "(Nov 2018 - Mar 2019)",
      },
      {
        company: "Goers",
        companyHomepage: "https://www.goersapp.com/",
        title: "Web Developer Internship",
        time: "(May 2018 - Sep 2018)",
      },
      {
        company: "Intelix Global Crossing",
        companyHomepage: "https://ecentrix.co.id/",
        title: "Software Engineer Part Time",
        time: "(Nov 2017 - Apr 2018)",
      },
    ];
    return (
      <div>
        <Nav>
          <div className="menu-bar">
            <a href="#projects">PROJECTS</a>
            <a href="#cv">CV</a>
            <a href="#contact">CONTACT</a>
          </div>
        </Nav>
        <Cover>
          <div className="inner-cover">
            <div className="content">
              <div className="text-title">
                Hi! 👋, <br /> I'm Vigor Akbar
              </div>
              <div className="body-wrapper">
                <p className="profile">
                  I'm a software engineer with interest in web development
                </p>
              </div>
            </div>
          </div>
        </Cover>
        <Section id="cv">
          <div className="project-wrapper">
            <div className="title">
              <h1>Experience</h1>
            </div>
            <div className="experience-container">
              {experience.map((data, i) => (
                <div key={i}>
                  <h5>{data.title}</h5>
                  <h6>
                    <a
                      href={data.companyHomepage}
                      target="_blank"
                      rel="noreferrer"
                    >
                      {data.company}
                    </a>{" "}
                    {data.time}
                  </h6>
                </div>
              ))}
              <div>
                <br />
                <h4>
                  Let's connect on{" "}
                  <a
                    href="https://www.linkedin.com/in/vigorakbar/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    LinkedIn
                  </a>
                  !
                </h4>
              </div>
            </div>
          </div>
        </Section>
        <Section id="projects">
          <div className="project-wrapper">
            <div className="title">
              <h1>Projects</h1>
            </div>
            <div className="project-container">
              {projects.map((props, i) => (
                <Card key={i} {...props} />
              ))}
            </div>
          </div>
        </Section>
        <Section id="contact">
          <div className="project-wrapper">
            <div className="title">
              <h1>Contact</h1>
            </div>
            <div className="experience-container">
              <h4>You can contact me anytime!</h4>
              <h5>
                Email:{" "}
                <a href="mailto:vigorakbar@gmail.com">vigorakbar@gmail.com</a>
              </h5>
              <h5>
                Linkedin:{" "}
                <a
                  href="https://www.linkedin.com/in/vigorakbar/"
                  target="_blank"
                  rel="noreferrer"
                >
                  linkedin.com/in/vigorakbar/
                </a>
              </h5>
            </div>
          </div>
        </Section>
        <br />
      </div>
    );
  }
}

export default App;
