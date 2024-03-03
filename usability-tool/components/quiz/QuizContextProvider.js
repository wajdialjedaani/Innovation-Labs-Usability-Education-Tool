import { createContext, useState, useEffect, useContext } from "react";

const QuizSuiteContext = createContext();

export function getQuizSuite() {
  return useContext(QuizSuiteContext);
}

export default function QuizContextProvider({ quiz, children }) {
  const [quizObj, setQuizObj] = useState(quiz);

  // useEffect(() => {
  //   console.log(quizObj);
  // }, [quizObj]);

  const quizSuite = {
    quizObj,

    setSelectedAnswer: (questionIndex, answerIndex) => {
      let updatedObj = [...quizObj];

      if (updatedObj[questionIndex].selectedAnswer == answerIndex) {
        updatedObj[questionIndex].selectedAnswer = null;
      } else {
        updatedObj[questionIndex].selectedAnswer = answerIndex;
      }

      setQuizObj(updatedObj);
    },
  };

  return (
    <QuizSuiteContext.Provider value={quizSuite}>
      {children}
    </QuizSuiteContext.Provider>
  );
}
