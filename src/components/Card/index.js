import React from "react";
import Styled from "styled-components";
import cx from "classnames";

const CardWrapper = Styled.div`
  max-width: 500px;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.05);
  }

  .image-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 328px;
    background-color: #18121e;
  }
`;

const Card = (props) => {
  const { src, description, title, className, homepage } = props;
  return (
    <CardWrapper className={cx(className, "card")}>
      <button
        className="no-style"
        onClick={() => window.open(homepage, "_blank")}
      >
        <div className="image-wrapper">
          <img className="card-img-top" src={src} alt="Project Preview" />
        </div>
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </button>
    </CardWrapper>
  );
};

export default Card;
