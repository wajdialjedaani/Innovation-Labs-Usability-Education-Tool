"use client";
// Quiz.js - The root renderer of the Usability Tool quiz engine

import QuizContextProvider, {getQuizSuite} from "./QuizContextProvider"
import NavFooter from "../nav/NavFooter";

import styles from "@/styles/quiz.module.scss";


export default function Quiz({quizObj, meta}){
  return (
    <QuizContextProvider quiz={quizObj}>
      <QuizBody /> 
      <NavFooter options={meta.navFooterOptions} />
    </QuizContextProvider>
  )
}

function QuizBody(){
  const {quizObj} = getQuizSuite();

  return (
    <div className={styles.quizContainer}>
      {quizObj.map((obj, index) => {
        return (
          <Question
            question={obj.question}
            questionIndex={index}
            answers={obj.answers}
            key={`questionkey-${index}`}
          />
        )
      })}

      <button className={styles.submitButton} onClick={() => {console.log("gink!")}}>Submit</button>
    </div>
  )
}

function Question({question, answers, questionIndex}){
  return (
    <div className={styles.question}>
      <h1 className={styles.questionHeader}>Question {questionIndex + 1}</h1>

      <div className={styles.questionBody}>
        <h1 className={styles.questionContent}>
          {question}
        </h1>
        <div className={styles.answersContainer}>
          {answers.map((text, index) => {
            return <Answer content={text} questionIndex={questionIndex} answerIndex={index} key={`ANSWER--index-${question}${index}`}/>
          })}
        </div>
      </div>
    </div>
  )
}

function Answer({content, answerIndex, questionIndex}){
  const {quizObj, setSelectedAnswer} = getQuizSuite();

  let className;

  if (quizObj[questionIndex].selectedAnswer == answerIndex){
    className = `${styles.answer} ${styles.selectedAnswer}`
  } else {
    className = `${styles.answer}`;
  }

  function handleSelect() {
    setSelectedAnswer(questionIndex, answerIndex);
  }

  return (
    <button className={className} onClick={handleSelect}>
      {content}
    </button>
  )
}