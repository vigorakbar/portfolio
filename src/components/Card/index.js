import React from 'react';
import Styled from 'styled-components';
import cx from 'classnames';

const CardWrapper = Styled.div`
  max-width: 500px;
`;

const Card = (props) => {
  const { src, desc, title, className } = props;
  return (
    <CardWrapper className={cx(className, "card")}>
      <img className="card-img-top" src={src} alt="Project Preview"/>
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{desc}</p>
      </div>
    </CardWrapper>
  );
};

export default Card;
