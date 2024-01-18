import { createContext, useState, useEffect, useContext } from "react"

const QuizSuiteContext = createContext();

export function getQuizSuite(){
  return useContext(QuizSuiteContext);
}

export default function QuizContextProvider({quiz, children}){
  const [quizObj, setQuizObj] = useState(quiz);

  const quizSuite = {
    quizObj
  }

  return (
    <QuizSuiteContext.Provider value={quizSuite}>
      {children}
    </QuizSuiteContext.Provider>
   )
}