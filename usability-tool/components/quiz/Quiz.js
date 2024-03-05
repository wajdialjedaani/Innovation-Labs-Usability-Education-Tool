"use client";
// Quiz.js - The root renderer of the Usability Tool quiz engine
import { useRef, useState, useContext, createContext } from "react";
import { IconContext } from "react-icons";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import QuizContextProvider, { getQuizSuite } from "./QuizContextProvider";
import NavFooter from "../nav/NavFooter";

import Modal from "../Modal";

import { getAuthContext } from "@/app/(main)/components/AuthContextProvider";

import { addHeuristicData } from "@/lib/firebase/firestore";

import styles from "@/styles/quiz.module.scss";
import borrowed from "@/styles/UIBuilder.module.scss";

const SubmitContext = createContext();

export default function Quiz({ quizObj, meta }) {
  return (
    <QuizContextProvider quiz={quizObj}>
      <QuizBody />
      <NavFooter options={meta.navFooterOptions} />
    </QuizContextProvider>
  );
}

function QuizBody() {
  const { user } = getAuthContext();
  const { quizObj } = getQuizSuite();

  //Has the submit button been pressed
  const [submit, setSubmit] = useState(false);

  //Modal for displaying the score
  const [modal, setModal] = useState(null);

  //Get the start time
  const startTime = useRef(Math.floor(Date.now() / 1000));

  function renderModal(component, heading) {
    setModal(
      <Modal toggleFunction={() => setModal(null)} heading={heading}>
        {component}
      </Modal>
    );
  }

  function calculateScore() {
    //Calculate the time it took
    const timeTaken = Math.floor(Date.now() / 1000) - startTime.current;
    let score = 0;
    //Calculate score
    quizObj.forEach((obj) => {
      if (obj.selectedAnswer === obj.correctAnswerIndex) {
        score++;
      }
    });
    setSubmit(true);
    writeToDB({
      correct: score,
      incorrect: quizObj.length - score,
      time: timeTaken,
    });
    renderModal(
      <div>
        <h3 role="header" className={borrowed.gradingPanelHeader}>
          You have {score >= 7 ? "passed!" : "failed."}
        </h3>

        <div className={borrowed.gradingPanelProgressBarContainer}>
          <div
            className={borrowed.gradingPanelProgressBar}
            style={{ width: `${score}0%` }}
          />
          <p className={borrowed.gradingPanelScoreDisplay}>
            {score}/{quizObj.length}
          </p>
        </div>
      </div>,
      "Score"
    );
  }

  async function writeToDB(data) {
    //Replace "1" with the id of the quiz
    try {
      const result = await addHeuristicData(1, user.uid, data);
    } catch (e) {
      console.error("Error adding data. Please try again");
    }
    //TODO: handle potential errors (sad path)
  }
  return (
    <SubmitContext.Provider value={submit}>
      {modal}
      <div className={styles.quizContainer}>
        {quizObj.map((obj, index) => {
          return (
            <Question
              question={obj.question}
              questionIndex={index}
              answers={obj.answers}
              image={obj.image}
              isCorrect={obj.selectedAnswer === obj.correctAnswerIndex}
              key={`questionkey-${index}`}
            />
          );
        })}
        {!submit ? (
          <button
            className={styles.submitButton}
            onClick={() => calculateScore()}
          >
            Submit
          </button>
        ) : //Don't show the button after it's clicked
        null}
      </div>
    </SubmitContext.Provider>
  );
}

function Question({ question, answers, questionIndex, isCorrect, image }) {
  //Has the submit button been pressed?
  const submit = useContext(SubmitContext);
  return (
    <div className={styles.question}>
      <h1 className={styles.questionHeader}>Question {questionIndex + 1}</h1>

      <div className={styles.questionBody}>
        <h1 className={styles.questionContent}>{question}</h1>
        {image ? <img className={styles.questionImage} src={image} /> : null}
        <div className={styles.answersContainer}>
          {answers.map((text, index) => {
            return (
              <Answer
                content={text}
                questionIndex={questionIndex}
                answerIndex={index}
                key={`ANSWER--index-${question}${index}`}
              />
            );
          })}
        </div>
      </div>
      {submit ? ( //Put a check mark or an X mark if the question is right / wrong
        <IconContext.Provider
          value={{ size: 30, className: `${styles.checkMark}` }}
        >
          {isCorrect ? (
            <FaCircleCheck color="green" />
          ) : (
            <FaCircleXmark color="red" />
          )}
        </IconContext.Provider>
      ) : null}
    </div>
  );
}

function Answer({ content, answerIndex, questionIndex }) {
  const { quizObj, setSelectedAnswer } = getQuizSuite();

  const submit = useContext(SubmitContext);

  const currentQuestionObj = quizObj[questionIndex];

  let className = `${styles.answer}`;

  if (submit) {
    className += ` ${styles.disable}`;
    if (currentQuestionObj.correctAnswerIndex === answerIndex) {
      className += ` ${styles.correctAnswer}`;
    } else if (currentQuestionObj.selectedAnswer === answerIndex) {
      className += ` ${styles.incorrectAnswer}`;
    }
  } else {
    if (currentQuestionObj.selectedAnswer == answerIndex) {
      className += ` ${styles.selectedAnswer}`;
    }
  }

  function handleSelect() {
    !submit ? setSelectedAnswer(questionIndex, answerIndex) : null;
  }

  return (
    <button className={className} onClick={handleSelect}>
      {content}
    </button>
  );
}
