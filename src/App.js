import React, { Component } from 'react';
import Styled from 'styled-components';
import photo from 'assets/vigor.png';

const Background = Styled.div`
  background: #18121e;
  height: 100%;
  overflow: hidden;
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

    @media only screen and (max-width: 700px) {
      margin-right: 10px;
    }

    @media only screen and (max-width: 500px) {
      margin-left: 115px;
    }
  }

  .content {
    margin: 10px;
  }

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
    font-size: 25px;
    width: calc(50% - 110px);
    margin-top: 30px;
    color: #eac67a;
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
`;

class App extends Component {
  render() {
    return (
      <Background>
        <Cover>
          <img src={photo} alt="portrait of Vigor" />
          <div className="content">
            <div className="text-title">
              Vigor Akbar
            </div>
            <div className="profile">
              Interested in web development, especially in front-end side of the web.
            </div>
          </div>
        </Cover>
      </Background>
    );
  }
}

export default App;
