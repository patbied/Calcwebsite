import React from 'react';
import Box from '../template/Box';
import '../styles/box.scss';
import Sections from '../jsonFiles/sections.json';
export default function Home(props) {
  // console.log(props.darkmode);
  return (
    <div>
      <div
        className={`ContainerOfBoxes ${props.darkmodeSetting ? '' : 'dark'}`}
      >
        {Sections.map((section) => {
          return (
            <Box
              class={`${props.darkmode ? 'dark' : ''}`}
              key={section.id}
              name={section.name}
              description={section.desc}
              amount={section.amount}
              direction={section.direction}
            />
          );
        })}
      </div>
    </div>
  );
}
