import Quiz from "@/components/quiz/Quiz";

// will be imported from json later
const quiz = [
  {
    question: "Which description best fits heuristic 9: Help users recognize, diagnose, and recover from errors?",
    answers: [
      "Acknowledges that even after implementing error mitigation techniques, errors will still occur",
      "Anticipates and avoids potential errors before they occur.",
      "Encourages designs that appeal to both new and experienced users",
      "Allows the users to navigate and use the system easily",
    ],
    answerIndex: 4
  }
]

export default function Quiz1(){
  return (
    <Quiz quizObj={quiz}/>
  )
}