import React from "react";
import {
  Cover,
  InnerSection,
  OuterSection,
  Root,
  Separator,
} from "./App.style";

import Card from "./components/Card";
import { experience } from "./constants/experience";
import { projects } from "./constants/projects";
import {
  aboutMeHref,
  contactHref,
  projectsHref,
  resumeHref,
} from "./constants/href";
import { Header } from "./components/Header/Header";
import { useHeaderTransition } from "./hooks/useHeaderTransition";

const Section = ({ children, ...props }) => (
  <OuterSection {...props}>
    <InnerSection>{children}</InnerSection>
  </OuterSection>
);

const App = () => {
  const { headerRef, targetRef } = useHeaderTransition();
  return (
    <Root>
      <Header ref={headerRef} />
      <Cover id={aboutMeHref} ref={targetRef}>
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
      <Separator />
      <Section id={resumeHref}>
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
      <Separator />
      <Section id={projectsHref}>
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
      <Separator />
      <Section id={contactHref}>
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
      <Separator />
      <br />
    </Root>
  );
};

export default App;
