"use client";
// Quiz.js - The root renderer of the Usability Tool quiz engine

import QuizContextProvider, {getQuizSuite} from "./QuizContextProvider"

import styles from "@/styles/quiz.module.scss";


export default function Quiz({quizObj}){
  return (
    <QuizContextProvider quiz={quizObj}>
      <QuizBody />
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
            answers={obj.answers}
            answerIndex={obj.answerIndex}
            key={`questionkey-${index}`}
          />
        )
      })}

      <Question 
        question="What color is the sky?"
        answers={[
          "#32a844",
          "#749190",
          "#7d658a",
          "#367bc9",
        ]}
        answerIndex={4}
      />
    </div>
  )
}

function Question({question, answers}){
  return (
    <div className={styles.question}>
      <h1>
        {question}
      </h1>
      <div className={styles.answersContainer}>
        {answers.map((text, index) => {
          return <Answer content={text} index={index} key={`ANSWER--index-${question}${index}`}/>
        })}
      </div>
    </div>
  )
}

function Answer({content, index}){
  return (
    <button class={styles.answer}>
      {content}
    </button>
  )
}