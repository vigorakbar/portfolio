import Styled from "styled-components";

const COLOR_NAV_HOVER = "#eac67a";
const COLOR_COVER = "#212020";
const COLOR_MAIN_BG = "#F3F3F3";

const HEADER_HEIGHT = "120px";

export const Root = Styled.div`
  background: ${COLOR_MAIN_BG};
`;

export const Nav = Styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  height: ${HEADER_HEIGHT};
  width: 100%;
  z-index: 10;
  position: fixed;
  top:0;
  background: ${COLOR_MAIN_BG};

  padding: 0  60px;
  @media only screen and (max-width: 768px) {
    padding: 0 32px;
  }

  .circle {
    display: inline-block;
    min-width: 20px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    margin-right: 8px;
    background-color: #479c9d;
  }

  .header-slash {
    margin: 0 6px;
  }

  .header-container {
    display: flex;
    align-items: center;
    font-weight: 500;
  }


  .header-name {
    font-size: 18px;
  }

  .menu-bar {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    max-width: 2000px;
    flex-basis: 500px;
    font-weight: 500;

    a {
      color: black;
      text-decoration: none;
      padding-right: 12px;
    }

    a:hover {
      color: ${COLOR_NAV_HOVER}
    }

    .main {
      font-weight: 800;
      margin-right: 25px;
    }
  }
`;

export const Cover = Styled.div`
  margin-top: ${HEADER_HEIGHT};
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
    color: ${COLOR_COVER};
    font-size: 35px;

    @media only screen and (max-width: 400px) {
      margin-top: 10px;
    }
  };

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
    color: ${COLOR_COVER};
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

export const OuterSection = Styled.div``;

export const InnerSection = Styled.div`
  margin: 20px;
  * * {
    color: #3d3b3b;
  }
  * a {
    color: #007bff;
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
      border-bottom: 2px solid;
      padding-bottom: 4px;
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

export const Separator = Styled.div`
  height: 50px;
  width: 100%;
  background: #6eb5aa;
`;
