import React from 'react';
import Box from '../template/Box';
import '../styles/box.scss';
import Sections from '../jsonFiles/sections.json';
export default function Home() {
  return (
    <div>
      <div
        className={`ContainerOfBoxes `}
      >
        {Sections.map((section) => {
          return (
            <Box
              
              key={section.id}
              name={section.name}
     
         
              direction={section.direction}
            />
          );
        })}
      </div>
    </div>
  );
}
