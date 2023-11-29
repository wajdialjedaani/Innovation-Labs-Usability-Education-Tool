"use client";
import "@/styles/quiz.scss";

import { useState } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";

import Answer from "../components/Answer";
import QuizDrop from "../components/QuizDrop";
import quiz1Data from "../data/quiz1data";

const draggableAnswerElements = quiz1Data.map((data, i) =>
  data.A.map((answer, j) => (
    <Answer
      text={answer.Text}
      correct={answer.Correct}
      quizID={i}
      answerID={j}
      key={j}
    />
  ))
);

export default function Quiz1() {
  //Holds the answers dragged onto each question
  const [isDropped, setIsDropped] = useState(
    Array(quiz1Data.length).fill(null)
  );

  function handleDragEnd(e) {
    const quiz = e.active.data.current.quiz;
    const answer = e.active.data.current.answer;
    const drop = e.over?.id;
    //Only accept answers for the right question
    if (quiz === drop) {
      console.log(quiz, drop, answer);
      const newIsDropped = [...isDropped];
      newIsDropped[drop] = answer;
      setIsDropped(newIsDropped);
    }
  }

  return (
    <main className="quiz-container">
      <DndContext onDragEnd={handleDragEnd}>
        <section className="questions">
          {quiz1Data.map((d, i) => (
            <div className="question" id={`q${i}`} key={i}>
              <h1>
                {i + 1}. {d.Q} {/*1. <name of the question>*/}
              </h1>
              <div className="d-flex">
                {draggableAnswerElements[i].map((element, j) =>
                  isDropped[i] !== j ? element : ""
                )}
              </div>
            </div>
          ))}
        </section>

        <section className="answers">
          {quiz1Data.map((_, i) => (
            <QuizDrop dropId={i} text={i + 1} key={i}>
              {isDropped[i] !== null
                ? draggableAnswerElements[i][isDropped[i]]
                : ""}
            </QuizDrop>
          ))}
        </section>
      </DndContext>
    </main>
  );
}
