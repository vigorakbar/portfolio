import React, { Component } from 'react';
import Styled from 'styled-components';

// import Navbar from 'components/Navbar'
import photo from 'assets/vigor.png';
import test from 'assets/test.png';
import Card from './components/Card';

const Background = Styled.div`
  background: #18121e;
  height: 100%;
}
`;

const Nav = Styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 20px 40px;
  font-family: 'Raleway', sans-serif;
  font-weight: 600;
  background-color: #233237;
  color: #eac67a;

  .menu-bar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 2000px;
    flex-basis: 500px;

    .main {
      font-weight: 800;
      margin-right: 25px;
    }
  }
`;

const Cover = Styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  overflow: hidden;
  position: relative;
  img {
    position: absolute;
    bottom: 0;
    right: 10vw;
    max-width: 100%;
    max-height: 80%;

    @media only screen and (max-width: 750px) {
      right: -20vw;
    }

    @media only screen and (max-width: 550px) {
      right: -30vw;
    }

    @media only screen and (max-width: 375px) {
      right: -160px;
    }
  }

  .body-wrapper {
    display: flex;
    flex-wrap: wrap;
    
    margin-top: 30px;
    color: #eac67a;
    font-size: 35px;
  }

  .content {
    margin: 60px 20px 20px 20px;

  .text-title {
    font-family: 'Raleway', sans-serif;
    font-size: 120px;
    font-weight: 600;
    color: white;

    @media only screen and (max-width: 1100px) {
      font-size: 100px;
    }

    @media only screen and (max-width: 900px) {
      font-size: 80px;
    }

    @media only screen and (max-width: 400px) {
      font-size: 70px;
    }
  }

  .profile {
    width: calc(70% - 110px);
    z-index: 1;
    position: relative;

    @media only screen and (max-width: 700px) {
      width: calc(60% - 35px);
      font-size: 30px;
    }

    @media only screen and (max-width: 500px) {
      width: calc(50% - 20px);
      font-size: 22px;
    }
  }
`;

const Projects = Styled.div`
  margin: 20px;

  .title {
    font-family: 'Raleway', sans-serif;
    font-weight: 600;
    font-size: 45px;
    margin-left: 40px;
    margin-top: 50px;

    @media only screen and (max-width: 500px) {
      font-size: 40px;
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
        {/* <Navbar /> */}
        <Nav>
          <div className="menu-bar">
            <div>PROJECTS</div>
            <div>CONTACT</div>
            <div>CV</div>
          </div>
        </Nav>
        <Background>
          <Cover>
            <img src={photo} alt="portrait of Vigor" />
            <div className="content">
              <div className="text-title">
                Hi, I'm <br /> Vigor Akbar
              </div>
              <div className="body-wrapper">
                <div className="profile">
                  I'm a web developer, focused on front-end side of the web.
                </div>
              </div>
            </div>
          </Cover>
          <Projects>
            <div className="title">
              <div>
                Projects and Works
              </div>
            </div>
            <div className="container">
              <Card
                src={test}
                title="Test 1"
                desc="teststs"
              />
              <Card
                src={test}
                title="Test 1"
                desc="teststs"
              />
              <Card
                src={test}
                title="Test 1"
                desc="teststs"
              />
              <Card
                src={test}
                title="Test 1"
                desc="teststs"
              />
            </div>
          </Projects>
        </Background>
      </div>
    );
  }
}

export default App;
