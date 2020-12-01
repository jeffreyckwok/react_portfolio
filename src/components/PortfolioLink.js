import React from 'react';
import { Image } from 'react-bootstrap';

export default props => {
  const portfolio = props;

    return (
      <a href={portfolio.link} target="_blank" rel="noreferrer" className="white">
      <div className="py-3 imgContainer">
        <Image src={portfolio.img} fluid/>
        <div className="my-3 mx-3 overlay text-center">
          <div className="text">
            <h3>{portfolio.name}</h3>
            <h4>{portfolio.technology}</h4>
          </div>
        </div>
      </div>
      </a>
    )
}
