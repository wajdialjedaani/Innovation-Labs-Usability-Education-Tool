"use client";
// Quiz.js - The root renderer of the Usability Tool quiz engine
import { useRef, useState, useContext, createContext } from "react";
import { IconContext } from "react-icons";
import { FaCircleCheck, FaCircleXmark } from "react-icons/fa6";
import { IoMdCloseCircle } from "react-icons/io";
import QuizContextProvider, { getQuizSuite } from "./QuizContextProvider";
import NavFooter from "../nav/NavFooter";

import { getAuthContext } from "@/app/(main)/components/AuthContextProvider";
import { addHeuristicData } from "@/lib/firebase/firestore";

import styles from "@/styles/quiz.module.scss";

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

  //Holds the score
  const correctCount = useRef(0);

  async function writeToDB(data) {
    //Replace 1 with the id of the quiz
    const { result, error } = await addHeuristicData(1, user.uid, data);
  }
  return (
    <SubmitContext.Provider value={submit}>
      <div className={styles.quizContainer}>
        {quizObj.map((obj, index) => {
          return (
            <Question
              question={obj.question}
              questionIndex={index}
              answers={obj.answers}
              isCorrect={obj.selectedAnswer === obj.correctAnswerIndex}
              key={`questionkey-${index}`}
            />
          );
        })}
        {!submit ? (
          <button
            className={styles.submitButton}
            onClick={() => {
              //Calculate score
              quizObj.forEach((obj) => {
                if (obj.selectedAnswer === obj.correctAnswerIndex) {
                  correctCount.current++;
                }
              });
              setSubmit(true);
              writeToDB({
                correct: correctCount.current,
                incorrect: quizObj.length - correctCount.current,
              });
            }}
          >
            Submit
          </button>
        ) : //Don't show the button after it's clicked
        null}
      </div>

      {/* WIP - Shows a popup of the score when the submit button is clicked
      {submit ? (
        <div className={styles.blur}>
          <div className={styles.scorePopup}>
            <IoMdCloseCircle size={30} className={styles.closePopup} />

            <h1>
              Score: {correctCount.current} / {quizObj.length}
            </h1>
          </div>
        </div>
      ) : null}
      */}
    </SubmitContext.Provider>
  );
}

function Question({ question, answers, questionIndex, isCorrect }) {
  //Has the submit button been pressed?
  const submit = useContext(SubmitContext);
  return (
    <div className={styles.question}>
      <h1 className={styles.questionHeader}>Question {questionIndex + 1}</h1>

      <div className={styles.questionBody}>
        <h1 className={styles.questionContent}>{question}</h1>
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
