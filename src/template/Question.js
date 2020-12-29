import React, { useEffect, useState } from 'react';
import '../styles/box.scss';
export default function Question(props) {
  function noRefresh(e) {
    e.preventDefault();
  }
  const [correct, setCorrect] = useState(false);
  const [incorrect, setIncorrect] = useState(false);
  const [correct1, setCorrect1] = useState(false);
  const [correct2, setCorrect2] = useState(false);
  const [correct3, setCorrect3] = useState(false);
  const [correct4, setCorrect4] = useState(false);
  const [incorrect1, setIncorrect1] = useState(false);
  const [incorrect2, setIncorrect2] = useState(false);
  const [incorrect3, setIncorrect3] = useState(false);
  const [incorrect4, setIncorrect4] = useState(false);
  const [explanation, openExplanation] = useState(false);
  const [hint, openHint] = useState(false);
  const [Answer, setAnswer] = useState('');
  //fetch the users answer from local sotrage and store it in a variable
  const answer = localStorage.getItem(props.question);
  useEffect(() => {
    if (answer === 'A') {
      if ('A' === props.correct) {
        setCorrect1(true);
      } else {
        setIncorrect1(true);
      }
    } else if (answer === 'B') {
      if ('B' === props.correct) {
        setCorrect2(true);
      } else {
        setIncorrect2(true);
      }
    } else if (answer === 'C') {
      if ('C' === props.correct) {
        setCorrect3(true);
      } else {
        setIncorrect3(true);
      }
    } else if (answer === 'D') {
      if ('D' === props.correct) {
        setCorrect4(true);
      } else {
        setIncorrect4(true);
      }
    }

    if (answer === props.inputAnswer) {
      setCorrect(true);
      setAnswer(answer);
    } else if (answer != props.inputAnswer) {
      if (answer) {
        setIncorrect(true);
        setAnswer(answer);
      } else {
        return null;
      }
    }
  }, []);

  return (
    <div className="boxContent  Large boxContentQuestion">
      <div className="boxTop">
        <h2 style={{ display: 'inline' }}>
          {props.number}.
          {() => {
            if (props.input) {
              if (correct) {
                return 'correct';
              } else if (incorrect) {
                return 'incorrect';
              } else {
                return '';
              }
            }
          }}
          {/*  {props.input ? {correct ? 'correct' : ''}
            {incorrect ? 'incorrect' : ''} : ''}  */}
        </h2>

        <p
          onClick={() => {
            openHint(!hint);
            console.log(hint);
          }}
          className="hint"
        >
          Hint
        </p>

        <p className={`clue ${hint ? 'opened' : ''}  `}>{`${
          props.hint ? `${props.hint}` : 'no hint'
        }`}</p>
      </div>
      <img
        src={props.question}
        alt="For some reason this question did not load properly :/"
        style={{
          scale: '1.2',
          display: 'block',
          overflow: 'scroll',
          maxHeight: '200px',
        }}
      ></img>
      {props.input ? (
        <div className="inputBox">
          {answer ? (
            <div>
              <span
                className={` ${correct ? 'correct' : ''} ${
                  incorrect ? 'incorrect' : ''
                }`}
              >
                Answer: {Answer}
              </span>
            </div>
          ) : (
            <div>
              <input
                className="InputField"
                type="text"
                id="answerText"
                name="answerText"
                onChange={(event) => setAnswer(event.target.value)}
              ></input>
              <button
                onClick={() => {
                  if (Answer === props.inputAnswer) {
                    console.log(props.inputAnswer);
                    setCorrect(true);
                    localStorage.setItem(props.question, Answer);
                  } else {
                    console.log(props.inputAnswer);
                    setIncorrect(true);
                    localStorage.setItem(props.question, Answer);
                  }
                }}
                className="submitButton"
              >
                <p>Submit</p>
              </button>
            </div>
          )}
        </div>
      ) : (
        <form onSubmit={noRefresh}>
          <div className="buttons">
            <button
              id="A"
              onClick={() => {
                if (answer) {
                  return null;
                } else {
                  if (props.correct === 'A') {
                    setCorrect1(true);
                    localStorage.setItem(props.question, 'A');
                  }
                  if (props.correct === 'B') {
                    setCorrect2(true);
                    setIncorrect1(true);
                    localStorage.setItem(props.question, 'A');
                  }
                  if (props.correct === 'C') {
                    setCorrect3(true);
                    setIncorrect1(true);
                    localStorage.setItem(props.question, 'A');
                  }
                  if (props.correct === 'D') {
                    setCorrect4(true);
                    setIncorrect1(true);
                    localStorage.setItem(props.question, 'A');
                  }
                }
              }}
              className={`boxP buttonQuestion LargeButton ${
                correct1 ? 'correctButton' : ''
              } ${incorrect1 ? 'incorrectButton' : ''}`}
            >
              <img
                alt="For some reason this question did not load properly :/"
                src={props.answer1}
              ></img>
            </button>
            <button
              id="B"
              onClick={() => {
                if (answer) {
                  return null;
                } else {
                  if (props.correct === 'B') {
                    setCorrect2(true);
                    localStorage.setItem(props.question, 'B');
                  }
                  if (props.correct === 'A') {
                    setCorrect1(true);
                    setIncorrect2(true);
                    localStorage.setItem(props.question, 'B');
                  }
                  if (props.correct === 'C') {
                    setCorrect3(true);
                    setIncorrect2(true);
                    localStorage.setItem(props.question, 'B');
                  }
                  if (props.correct === 'D') {
                    setCorrect4(true);
                    setIncorrect2(true);
                    localStorage.setItem(props.question, 'B');
                  }
                }
              }}
              className={`boxP buttonQuestion LargeButton ${
                correct2 ? 'correctButton' : ''
              } ${incorrect2 ? 'incorrectButton' : ''} `}
            >
              <img
                alt="For some reason this question did not load properly :/"
                src={props.answer2}
              ></img>
            </button>
            <button
              id="C"
              onClick={() => {
                if (answer) {
                  return null;
                } else {
                  if (props.correct === 'C') {
                    setCorrect3(true);
                    localStorage.setItem(props.question, 'C');
                  }
                  if (props.correct === 'A') {
                    setCorrect1(true);
                    setIncorrect3(true);
                    localStorage.setItem(props.question, 'C');
                  }
                  if (props.correct === 'B') {
                    setCorrect2(true);
                    setIncorrect3(true);
                    localStorage.setItem(props.question, 'C');
                  }
                  if (props.correct === 'D') {
                    setCorrect4(true);
                    setIncorrect3(true);
                    localStorage.setItem(props.question, 'C');
                  }
                }
              }}
              className={`boxP buttonQuestion LargeButton ${
                correct3 ? 'correctButton' : ''
              } ${incorrect3 ? 'incorrectButton' : ''}`}
            >
              <img
                alt="For some reason this question did not load properly :/"
                src={props.answer3}
              ></img>
            </button>
            <button
              id="D"
              onClick={() => {
                if (answer) {
                  return null;
                } else {
                  if (props.correct === 'D') {
                    setCorrect4(true);
                    localStorage.setItem(props.question, 'D');
                  }
                  if (props.correct === 'A') {
                    setCorrect1(true);
                    setIncorrect4(true);
                    localStorage.setItem(props.question, 'D');
                  }
                  if (props.correct === 'B') {
                    setCorrect2(true);
                    setIncorrect4(true);
                    localStorage.setItem(props.question, 'D');
                  }
                  if (props.correct === 'C') {
                    setCorrect3(true);
                    setIncorrect4(true);
                    localStorage.setItem(props.question, 'D');
                  }
                }
              }}
              className={`boxP buttonQuestion LargeButton ${
                correct4 ? 'correctButton' : ''
              } ${incorrect4 ? 'incorrectButton' : ''}`}
            >
              <img
                alt="For some reason this question did not load properly :/"
                src={props.answer4}
              ></img>
            </button>
          </div>
        </form>
      )}

      {answer ? (
        <div>
          <p
            onClick={() => {
              openExplanation(!explanation);
            }}
            className="explanationOpen"
          >
            Explanation
          </p>
          <div className={`explanation ${explanation ? 'opened' : ''}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
