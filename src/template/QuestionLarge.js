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
  const [correctInput, setCorrectInput] = useState('');
  const [TypeInput, setTypeInput] = useState(false);
  const [TypeTrueOrFalse, setTypeTrueOrFalse] = useState(false);
  const [TypeDefault, setTypeDefault] = useState(false);
  const [True, setTrue] = useState(false);
  const [TrueWasFalse, setTrueWasFalse] = useState(false);
  const [False, setFalse] = useState(false);
  const [FalseWasFalse, setFalseWasFalse] = useState(false);
  const [TypeChooseAll, setTypeChooseAll] = useState(false);
  const [chooseA, setChooseA] = useState(false);
  const [chooseB, setChooseB] = useState(false);
  const [chooseC, setChooseC] = useState(false);
  const [chooseD, setChooseD] = useState(false);

  //fetch the users answer from local storage and store it in a variable

  let answerAName = `${props.question}A`
  let answerBName = `${props.question}B`
  let answerCName = `${props.question}C`
  let answerDName = `${props.question}D`


    const answer = localStorage.getItem(props.question);
    let answerA = localStorage.getItem(answerAName);
    let answerB = localStorage.getItem(answerBName);
    let answerC = localStorage.getItem(answerCName);
    let answerD = localStorage.getItem(answerDName);
  function checkChooseAll() {

    if (answerA || answerB || answerC || answerD) {
      return null;
    } else { 

    if (chooseA === true) {
      if (props.correct.includes("A")) { 
        setCorrect1(true)
        setChooseA(false)
        localStorage.setItem(answerAName, true)
      }
      else {
        setIncorrect1(true)
        setChooseA(false)
        localStorage.setItem(answerAName, false)
       }
    }
    if (props.correct.includes("A")) {
      if (chooseA === false) {
        setIncorrect1(true)
        setChooseA(false)
        localStorage.setItem(answerAName, false)
    }
  }
    if (chooseB === true) {
      if (props.correct.includes("B")) { 
        setCorrect2(true)
        setChooseB(false)
        localStorage.setItem(answerBName, true)
      }
      else {
        setIncorrect2(true)
        setChooseB(false)
        localStorage.setItem(answerBName, false)
       }
      }
      if (props.correct.includes("B")) {
        if (chooseB === false) {
          setIncorrect2(true)
          setChooseB(false)
          localStorage.setItem(answerBName, false)
      }
    }
      if (chooseC === true) {
        if (props.correct.includes("C")) { 
          setCorrect3(true)
          setChooseC(false)
          localStorage.setItem(answerCName, true)
        }
        else {
          setIncorrect3(true)
          setChooseC(false)
          localStorage.setItem(answerCName, false)
         }
      }
      if (props.correct.includes("C")) {
        if (chooseC === false) {
          
          setIncorrect3(true)
          setChooseC(false)
          localStorage.setItem(answerCName, false)
      }
    }
      if (chooseD === true) {
        if (props.correct.includes("D")) { 
          setCorrect4(true)
          setChooseD(false)
          localStorage.setItem(answerDName, true)
        }
        else {
          setIncorrect4(true)
          setChooseD(false)
          localStorage.setItem(answerDName, false)
         }
      }
    if (props.correct.includes("D")) {

        if (chooseD === false) {
          setIncorrect4(true)
          setChooseD(false)
          localStorage.setItem(answerDName, false)
      }
    }
    }
  }
    

    
    
 
  useEffect(() => {
    if (props.chooseAll) {


      if (answerA === 'true') {
        console.log("Answer a is correct")
        setCorrect1(true)
        setChooseA(false)

      }
      if (answerA === 'false') {
        console.log("Answer a is NOT correct")
        setIncorrect1(true)
        setChooseA(false)
      }
      if (answerB === 'true') {
        setCorrect2(true)
        setChooseB(false)
      }
      if (answerB === 'false') {
        setIncorrect2(true)
        setChooseB(false)
      }
      if (answerC === 'true') {
        setCorrect3(true)
        setChooseC(false)
      }
      if (answerC === 'false') {
        setIncorrect3(true)
        setChooseC(false)
      }
      if (answerD === 'true') {
        setCorrect4(true)
        setChooseD(false)
      }
      if (answerD === 'false') {
        setIncorrect4(true)
        setChooseD(false)
      }
    }
    if (props.input) {
      setTypeInput(true);
    } else if (props.TrueOrFalse) {
      setTypeTrueOrFalse(true);
    } else if (props.chooseAll) {
      setTypeChooseAll(true);
    }
    else {
      setTypeDefault(true);
    }

    if (answer === 'true') {
      console.log('answer is true');
      if (props.correct === true) {
        setTrue(true);
      } else {
        setTrueWasFalse(true);
      }
    }
    if (answer == 'false') {
      if (props.correct === false) {
        setFalse(true);
      } else {
        setFalseWasFalse(true);
      }
    }

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

    if (
      answer === props.inputAnswer ||
      answer === props.inputAnswer2 ||
      answer === props.inputAnswer3
    ) {
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

  // style={{  }}
  return (
    <div className="boxContent  Large boxContentQuestion">
      <div className="boxTop">
        <h2 style={{ display: 'inline', fontWeight: 'bolder' }}>{props.number}.</h2>
    
        <p
          onClick={() => {
            openHint(!hint);
            console.log(hint);
          }}
          className={` ${props.hint ? 'hint' : 'noHint'}`}
        >
          Hint
        </p>

        <p className={`clue ${hint ? 'opened' : ''}  `}>{`${
          props.hint ? `${props.hint}` : 'no hint'
        }`}</p>
      </div>
      <div className="questionBox">
        <img
          className="questionImg"
          src={props.question}
          alt="For some reason this question did not load properly :/"
        ></img>
      </div>
      {TypeChooseAll ?<>   <div className="buttons">
            <button
              id="A"
              onClick={() => {
                if (answerA || answerB || answerC || answerD) {
                  return null;
                } else {
                setChooseA(!chooseA);
                }
              }}
              className={`boxP buttonQuestion LargeButton ${
                correct1 ? 'correctButton' : ''
              } ${incorrect1 ? 'incorrectButton ' : ''} ${
                answer ? 'disabledInput' : ''
              } ${chooseA ? 'chosen' : ''} `}
            >
              <img
                alt="For some reason this question did not load properly :/"
                src={props.answer1}
              ></img>
            </button>
            <button
              id="B"
              onClick={() => {
                if (answerA || answerB || answerC || answerD) {
                  return null;
                } else {
                  setChooseB(!chooseB);
                }
              }}
              className={`boxP buttonQuestion LargeButton ${
                correct2 ? 'correctButton' : ''
              } ${incorrect2 ? 'incorrectButton ' : ''} ${
                answer ? 'disabledInput' : ''
              } ${chooseB ? 'chosen' : ''}`}
            >
              <img
                alt="For some reason this question did not load properly :/"
                src={props.answer2}
              ></img>
            </button>
            <button
              id="C"
              onClick={() => {
                if (answerA || answerB || answerC || answerD) {
                  return null;
                } else {
                  setChooseC(!chooseC);
                }
              }}
              className={`boxP buttonQuestion LargeButton ${
                correct3 ? 'correctButton' : ''
              } ${incorrect3 ? 'incorrectButton ' : ''} ${
                answer ? 'disabledInput' : ''
              } ${chooseC ? 'chosen' : ''}`}
            >
              <img
                alt="For some reason this question did not load properly :/"
                src={props.answer3}
              ></img>
            </button>
            <button
              id="D"
              onClick={() => {
                if (answerA || answerB || answerC || answerD) {
                  return null;
                } else {
                  setChooseD(!chooseD);
                }
              }}
              className={`boxP buttonQuestion LargeButton ${
                correct4 ? 'correctButton' : ''
              } ${incorrect4 ? 'incorrectButton ' : ''} ${
                answer ? 'disabledInput' : ''
              } ${chooseD ? 'chosen' : ''} `}
            >
              <img
                alt="For some reason this question did not load properly :/"
                src={props.answer4}
              ></img>
            </button>
      </div>
        <div style={{display: 'flex', justifyContent:'center', paddingTop:'20px'}}> 
        <button className="boxP buttonQuestion LargeButton" onClick={checkChooseAll}>
        Submit
        </button></div> </>: ''}
      {/* CHECK IF THE QUESTION IS AN INPUT QUESTION */}
      {TypeInput ? (
        <div className="inputBox">
          {answer ? (
            <div>
              <span
                className={` ${correct ? 'correct' : ''} ${
                  incorrect ? 'incorrect' : ''
                }`}
              >
                Your Answer: {Answer}
                <p className="correct">   {`${correct ? '' : `Correct Answer: ${props.inputAnswer}`}`}  {`${props.inputAnswer2 ? `or ${props.inputAnswer2}` : ''}`} {`${props.inputAnswer3 ? `or ${props.inputAnswer3}` : ''}`}</p>
                
             
                
              </span>
            </div>
          ) : (
            <div>
              <input
                className="InputField"
                type="text"
                id="answerText"
                name="answerText"
                autoComplete="off"
                onChange={(event) => setAnswer(event.target.value)}
              ></input>
              <button
                style={{}}
                onClick={() => {
                  if (
                    Answer === props.inputAnswer ||
                    Answer === props.inputAnswer2 ||
                    Answer === props.inputAnswer3
                  ) {
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
        ''
      )}
      {/* CHECK IF THE QUESTION IS A TRUE OR FALSE QUESTION */}
      {TypeTrueOrFalse ? (
        <div className="buttons">
          <button
            onClick={() => {
              if (answer) {
                return null;
              } else {
                if (props.correct === true) {
                  setTrue(true);
                  console.log('correct');
                  localStorage.setItem(props.question, true);
                } else {
                  setTrueWasFalse(true);
                  console.log('incorrect');
                  localStorage.setItem(props.question, true);
                }
              }
            }}
            className={`boxP buttonQuestion LargeButton ${
              True ? 'correctButton' : ''
            } ${TrueWasFalse ? 'incorrectButton' : ''} ${
              answer ? 'disabledInput' : ''
            }`}
          >
          {props.trueImage ? <img alt="For some reason this question did not load properly :/" src={props.trueImage}></img> : 'True'}
            
          </button>
          <button
            onClick={() => {
              if (answer) {
                return null;
              } else {
                if (props.correct === false) {
                  setFalse(true);
                  console.log('correct');
                  localStorage.setItem(props.question, false);
                } else {
                  setFalseWasFalse(true);
                  console.log('incorrect');
                  localStorage.setItem(props.question, false);
                }
              }
            }}
            className={`boxP buttonQuestion LargeButton ${
              False ? 'correctButton' : ''
            } ${FalseWasFalse ? 'incorrectButton' : ''} ${
              answer ? 'disabledInput' : ''
            }`}
          >
         
           {props.falseImage ? <img alt="For some reason this question did not load properly :/" src={props.falseImage}></img> : 'True'}
          </button>
        </div>
      ) : (
        ''
      )}
      {/* IF THE QUESTION IS NEITHER INPUT NOR T&F THEN MUST BE DEFAULT ABCD QUESTION*/}
      {TypeDefault ? (
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
              } ${incorrect1 ? 'incorrectButton ' : ''} ${
                answer ? 'disabledInput' : ''
              } `}
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
              } ${incorrect2 ? 'incorrectButton ' : ''} ${
                answer ? 'disabledInput' : ''
              } `}
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
              } ${incorrect3 ? 'incorrectButton ' : ''} ${
                answer ? 'disabledInput' : ''
              } `}
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
              } ${incorrect4 ? 'incorrectButton ' : ''} ${
                answer ? 'disabledInput' : ''
              }  `}
            >
              <img
                alt="For some reason this question did not load properly :/"
                src={props.answer4}
              ></img>
            </button>
          </div>
        </form>
      ) : (
        ''
      )}
      {answer ? (
        <div>
          <p
            onClick={() => {
              openExplanation(!explanation);
            }}
            className={`explanationOpen ${props.explanation ? '' : 'noHint'}`}
          >
            Explanation
          </p>
          <div className={`explanation ${explanation ? 'opened' : ''}`}>
            <img
              src={props.explanation}
              alt="For some reason this explanation did not load properly :/"
            ></img>
          </div>
        </div>
      ) : (
        ''
      )}
    </div>
  );
}
