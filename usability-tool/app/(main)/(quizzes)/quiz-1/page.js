//TODO: Fix not being able to drag back
//Add a file to hold the statistics
//Update that file everytime the button is clicked

"use client";
import "@/styles/quiz.scss";

import { useState, useContext } from "react";
import { DndContext, DragOverlay } from "@dnd-kit/core";

import { getDataSuite } from "../../components/ContextProvider";

import Answer from "../components/Answer";
import QuizDrop from "../components/QuizDrop";
import quiz1Data from "../data/quiz1data";

export default function Quiz1() {
  const { dataState: userData, updateDataState: updateUserData } =
    getDataSuite();

  //Holds the answers dragged onto each question
  const [isDropped, setIsDropped] = useState(
    Array(quiz1Data.length).fill(null)
  );

  //Holds if the answer is correct
  const [isCorrect, setIsCorrect] = useState(
    Array(quiz1Data.length).fill(false)
  );

  //Array of draggable answer elements
  const draggableAnswerElements = quiz1Data.map((data, i) =>
    data.A.map((answer, j) => (
      <Answer
        text={answer.Text}
        correct={answer.Correct}
        isCorrect={isCorrect[i]}
        quizID={i}
        answerID={j}
        key={j}
      />
    ))
  );

  function handleSubmit() {
    let correctCount = 0;
    const newIsCorrect = [...isCorrect];
    const newData = { ...userData };
    const newHeuristicData = userData.heuristicData;
    const newProgressData = userData.progressData;

    isDropped.forEach((a, i) => {
      //Get the heuristic of the current question
      const heuristicIndex = quiz1Data[i].heuristicID - 1;
      const questionTitle = quiz1Data[i].Q;
      const draggableElement = draggableAnswerElements[i][a];

      const currentDataIndex = newHeuristicData[heuristicIndex];

      //If the answer is correct
      if (draggableElement?.props.correct) {
        newHeuristicData[heuristicIndex].data[0].value += 1;
        //Get the index of the question in the wrong question list
        const correctQuestionIndex =
          currentDataIndex.questionsWrong.indexOf(questionTitle);
        //Remove the question from the incorrect question list, if it's on there
        if (correctQuestionIndex !== -1)
          currentDataIndex.questionsWrong =
            currentDataIndex.questionsWrong.splice(correctQuestionIndex, 1);
        newIsCorrect[i] = true;
        ++correctCount;
      } else {
        newHeuristicData[heuristicIndex].data[1].value += 1;
        newHeuristicData[heuristicIndex].questionsWrong.push(questionTitle);
      }
    });
    updateUserData(newData);
    setIsCorrect(newIsCorrect);
    alert(
      `You got ${correctCount} Question${
        correctCount > 1 ? "s" : ""
      } correct out of ${quiz1Data.length} Questions`
    );
  }

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
            <QuizDrop
              dropId={i}
              text={i + 1}
              key={i}
              holdsCorrect={isCorrect[i]}
            >
              {isDropped[i] !== null
                ? draggableAnswerElements[i][isDropped[i]]
                : ""}
            </QuizDrop>
          ))}
        </section>
      </DndContext>
      <button onClick={handleSubmit}>Click me</button>
    </main>
  );
}
