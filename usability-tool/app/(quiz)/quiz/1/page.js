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

export default function Quiz1() {
  return <Quiz quizObj={quiz} />;
}
