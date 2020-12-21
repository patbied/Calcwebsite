import React from 'react';
import '../styles/calc.scss';
import '../styles/box.scss';
import QuestionLarge from '../template/QuestionLarge';
import Questions from '../jsonFiles/calc2.json';

export default function Calc2() {
  return (
    <div>
      <div className="ContainerOfBoxes">
        {Questions.map((question) => {
          return (
            <QuestionLarge
              key={question.Number}
              hint={question.hint}
              number={question.Number}
              image={question.Image}
              question={question.Question}
              answer1={question.answer1}
              answer2={question.answer2}
              answer3={question.answer3}
              answer4={question.answer4}
              correct={question.correct}
            />
          );
        })}
      </div>
    </div>
  );
}
