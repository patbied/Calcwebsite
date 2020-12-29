import React from 'react';
import '../styles/about.scss';
export default function About() {
  const todo = [
    ' Finish all the sections',
    'disable buttons after answered',
    'Fix darkmode',
    'hide hints when there are none',
    '',
  ];
  return (
    <div className="aboutContainer">
      <h1 style={{ textAlign: 'center' }}>What is this website?</h1>
      <p className="text">
        This website is made in the goal of helping people learn Calculus. This
        project was started for fun to help
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/patbied?tab=repositories"
        >
          {' '}
          <span className="linked">me</span>{' '}
        </a>
        develop my programming skills in react. All the questions and answer are
        provided by
        <a target="_blank" rel="noreferrer" className="linked" href="/">
          <span className="linked"> Mateusz</span>
        </a>
      </p>
      <div className="section">
        <div class="form">
          <h1 style={{ textAlign: 'center' }}>Suggest/Report bugs form</h1>
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdF-lVwZ7jIA16KvPT9dd-CZtqB7zJQi8XIHOAo5ydKLsIqZw/viewform?embedded=true"
            width="640"
            height="506"
            frameborder="0"
            marginheight="0"
            marginwidth="0"
          >
            Loading…
          </iframe>
        </div>
        <div class="todo">
          <h1 style={{ textAlign: 'center' }}>Planned updates</h1>
          <ol>
            {todo.map((Todo) => {
              return <li>{Todo}</li>;
            })}
          </ol>
        </div>
      </div>
    </div>
  );
}
