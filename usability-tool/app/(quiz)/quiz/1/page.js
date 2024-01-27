import Quiz from "@/components/quiz/Quiz";

// will be imported from json later
const quiz = [
  {
    question:
      "What is a suitable format for having a user provide answers to a quiz on a website?",
    answers: [
      "Have the user mail in the answers on a paper to the company headquarters.",
      "Create a google doc in which the users can add their answers.",
      "Create a quiz mailing list that users can use to receive questions in their email and them respond to them.",
      "Have the user host an RSS feed that they can use to broadcast their answers to the test proctor.",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "What is a suitable format for having a user provide answers to a quiz on a website?",
    answers: [
      "Have the user mail in the answers on a paper to the company headquarters.",
      "Create a google doc in which the users can add their answers.",
      "Create a quiz mailing list that users can use to receive questions in their email and them respond to them.",
      "Have the user host an RSS feed that they can use to broadcast their answers to the test proctor.",
    ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "What is a suitable format for having a user provide answers to a quiz on a website?",
    answers: [
      "Have the user mail in the answers on a paper to the company headquarters.",
      "Create a google doc in which the users can add their answers.",
      "Create a quiz mailing list that users can use to receive questions in their email and them respond to them.",
      "Have the user host an RSS feed that they can use to broadcast their answers to the test proctor.",
    ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "What is a suitable format for having a user provide answers to a quiz on a website?",
    answers: [
      "Have the user mail in the answers on a paper to the company headquarters.",
      "Create a google doc in which the users can add their answers.",
      "Create a quiz mailing list that users can use to receive questions in their email and them respond to them.",
      "Have the user host an RSS feed that they can use to broadcast their answers to the test proctor.",
    ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "What is a suitable format for having a user provide answers to a quiz on a website?",
    answers: [
      "Have the user mail in the answers on a paper to the company headquarters.",
      "Create a google doc in which the users can add their answers.",
      "Create a quiz mailing list that users can use to receive questions in their email and them respond to them.",
      "Have the user host an RSS feed that they can use to broadcast their answers to the test proctor.",
    ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
];

// meta and quizObj should probably be combined into one js object later so that quizzes can be modularly imported from one file
// also, this would help for lockstate controlled by the QuizContextProvider
const meta = {
  navFooterOptions: {
    prev: {title: "Hueristic 1 Lesson", href: "/lessons/1"},
    next: {title: "UI Builder Activity", href: "/ui-builder/example"},
    nextLock: false
  }
}

export default function Quiz1(){
  return (
    <Quiz quizObj={quiz} meta={meta}/>
  )
}