import React from 'react';
import '../styles/box.scss';

export default function Box(props) {
  return (
    <div className={`boxContent ${props.class} `}>
      <a href={props.direction}>
        <h1>{props.name}</h1>
        <p className="boxP">Description: {props.description}</p>

        <p className="boxP">Questions: {props.amount}</p>
      </a>
    </div>
  );
}
