import React, { useState } from 'react';
import '../styles/calc.scss';
import '../styles/box.scss';
import Question from '../template/QuestionLarge';
import Questions from '../jsonFiles/calc1.json';
import react from 'react';

export default function Calc1() {
  function clearQs() {
    Object.keys(localStorage).forEach((key) => {
      if (key.substring(0, 12) == 'images/Calc1') {
        localStorage.removeItem(key);
      }
    });
    window.location.reload();
  }
  return (
    <div>
      <div className="ContainerOfBoxes">
        {Questions.map((question) => {
          return (
            <Question
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
            input={question.input}
            inputAnswer={question.inputAnswer}
            inputAnswer2={question.inputAnswer2}
            inputAnswer3={question.inputAnswer2}
            explanation={question.explanation}
            ButtonLG={question.largerButton}
              TrueOrFalse={question.TrueOrFalse}
              trueImage={question.trueImage}
              falseImage={question.falseImage}
            />
          );
        })}
        <button className="clearQuestions" onClick={clearQs}>
          <p>Clear answers</p>
        </button>
      </div>
    </div>
  );
}
