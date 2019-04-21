import React, { Component } from 'react';
import Styled from 'styled-components';
import photo from 'assets/vigor.png';

const Background = Styled.div`
  background: #18121e;
  height: 100%;

  .menu-bar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    color: #eac67a;
    background-color: #233237;
    padding: 10px;
    font-family: 'Raleway', sans-serif;
    font-size: 18px;
    font-weight: 500;
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
    left: 0;
    right: 0;
    margin: auto;
    max-width: 100%;
    max-height: 100%;

    @media only screen and (max-width: 700px) {
      margin-right: 10px;
    }

    @media only screen and (max-width: 500px) {
      margin-left: 115px;
    }
  }

  .body-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;
    color: #eac67a;
    font-size: 25px;
  }

  .content {
    margin: 10px;

  .text-title {
    font-family: 'Raleway', sans-serif;
    font-size: 190px;
    font-weight: 600;
    color: white;

    @media only screen and (max-width: 1100px) {
      font-size: 16vw;
    }
  }

  .profile {
    width: calc(50% - 110px);
    z-index: 1;
    position: relative;

    @media only screen and (max-width: 700px) {
      width: calc(50% - 35px);
      font-size: 22px;
    }

    @media only screen and (max-width: 500px) {
      width: calc(50% - 20px);
      font-size: 20px;
    }
  }

  .menu-cover {
    font-family: 'Raleway', sans-serif;
    font-size: 25px;
    font-weight: 500;
    border-radius: 15px;
    padding: 25px 10px;
    width: calc(50% - 110px);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: #233237;
    align-items: center;

    @media only screen and (max-width: 700px) {
      display: none;
    }

    > div {
      margin: 10px 0;
    }
  }

  nav {
    z-index: 2;
    display: none;

    @media only screen and (max-width: 700px) {
      display: block;
    }
  }
`;

class App extends Component {
  render() {
    return (
      <Background>
        <div className="collapse" id="navbarToggleExternalContent">
          <div className="menu-bar">
            <div>PROJECTS</div>
            <div>CONTACT</div>
            <div>CV</div>
          </div>
        </div>
        <Cover>
          <img src={photo} alt="portrait of Vigor" />
          <div className="content">
            <nav className="navbar navbar-dark">
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
            </nav>
            <div className="text-title">
              Vigor Akbar
            </div>
            <div className="body-wrapper">
              <div className="profile">
                <div>I'm interested in web development especially on Front-end web development.</div>
                <div></div>
              </div>
              {/* <div className="menu-cover">
                <div>PROJECTS</div>
                <div>CONTACT</div>
                <div>CV</div>
              </div> */}
            </div>
          </div>
        </Cover>
        <div>TESST</div><br />
        <div>TESST</div><br />
        <div>TESST</div><br />
        <div>TESST</div><br />
        <div>TESST</div><br />

      </Background>
    );
  }
}

export default App;
