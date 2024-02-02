import { forwardRef } from "react";
import { Nav } from "../../App.style";
import {
  aboutMeHref,
  contactHref,
  projectsHref,
  resumeHref,
} from "../../constants/href";

export const Header = forwardRef((_, ref) => {
  return (
    <Nav ref={ref}>
      <div className="header-container">
        <span className="circle" />
        <span className="header-name">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a href="#" id="header-name">
            Vigor&nbsp;Akbar
          </a>
        </span>
        <span className="header-slash"> / </span>
        <span className="header-title">Frontend Engineer</span>
      </div>
      <div className="menu-bar">
        <a href={`#${aboutMeHref}`}>ABOUT ME</a>
        <a href={`#${resumeHref}`}>RESUME</a>
        <a href={`#${projectsHref}`}>PROJECTS</a>
        <a href={`#${contactHref}`}>CONTACT</a>
      </div>
    </Nav>
  );
});
