import React, { Component } from "react";
import Styled from "styled-components";

// import Navbar from 'components/Navbar'
import test from "./assets/test.png";
import Card from "./components/Card";

const Nav = Styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 40px;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  background-color: #233237;

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
  background: #18121e;
  display: flex;
  position: relative;

  .inner-cover {
    margin: 0 auto;
    width: 100%;
    max-width: 1214px;
  }

  .body-wrapper {
    margin-top: 30px;
    color: #eac67a;
    font-size: 35px;

    @media only screen and (max-width: 400px) {
      margin-top: 10px;
    }
  }

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
    color: white;
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

const Projects = Styled.div`
  margin: 20px;

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

  .container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
  }

  div {
    margin-bottom: 50px;
  }
`;

class App extends Component {
  render() {
    return (
      <div>
        <Nav>
          <div className="menu-bar">
            <a href="#projects">PROJECTS</a>
            <a href="#contact">CONTACT</a>
            <a href="#CV">CV</a>
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
                <p className="profile">Let's make our web run faster!</p>
              </div>
            </div>
          </div>
        </Cover>
        <Projects id="projects">
          <div className="project-wrapper">
            <div className="title">
              <h1>My Projects</h1>
            </div>
            <div className="container">
              <Card src={test} title="Test 1" desc="teststs" />
              <Card src={test} title="Test 1" desc="teststs" />
              <Card src={test} title="Test 1" desc="teststs" />
              <Card src={test} title="Test 1" desc="teststs" />
            </div>
          </div>
        </Projects>
      </div>
    );
  }
}

export default App;
