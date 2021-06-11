import React from 'react';
import '../styles/box.scss';

export default function Box(props) {
  return (
    <div className={`boxContent ${props.class} `}>
      <a href={props.direction}>
        <h1 style={{textAlign: 'center'}}>{props.name}</h1>
       

       
      </a>
    </div>
  );
}
