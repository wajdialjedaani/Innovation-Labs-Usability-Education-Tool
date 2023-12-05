"use client";
import "@/styles/reactquiz.scss";
import { useState } from "react";

// import { Card, Container } from "reactstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import Head from "next/head";

export default function reactQuiz() {
  const questions = [
    {
      question: "What is React?",
      options: [
        "A programming language",
        "A JavaScript library",
        "An operating system",
        "A markup language",
      ],
      answer: "A JavaScript library",
    },
    {
      question: "In React, what is the virtual DOM?",
      options: [
        "A server-side rendering technique",
        "A browser's internal data structure",
        "A lightweight version of the actual DOM",
        "A tool for managing API calls",
      ],
      answer: "A lightweight version of the actual DOM",
    },
    {
      question: "What is a prop in React?",
      options: [
        "A local variable within a component",
        "An HTML tag attribute",
        "A mechanism for passing data from parent to child components",
        "A method for handling component events",
      ],
      answer: "A mechanism for passing data from parent to child components",
    },
    {
      question: "How can you conditionally render content in React?",
      options: [
        "Using the if-else statement",
        "By using the switch statement",
        "With the conditional (ternary) operator",
        "By using the for loop",
      ],
      answer: "With the conditional (ternary) operator",
    },
    {
      question: "What is JSX in React?",
      options: [
        "A syntax extension for JavaScript",
        "A separate templating language",
        "A CSS-in-JS library",
        "A tool for managing global state",
      ],
      answer: "A syntax extension for JavaScript",
    },
    {
      question: "What is the role of the useCallback hook in React?",
      options: [
        "To memoize a component",
        "To handle form submissions",
        "To optimize performance in functional components",
        "To create a reusable custom hook",
      ],
      answer: "To optimize performance in functional components",
    },
    {
      question: "What is the React context API used for?",
      options: [
        "To manage component state",
        "To handle HTTP requests",
        "To pass data through the component tree without passing props manually",
        "To create functional components",
      ],
      answer:
        "To pass data through the component tree without passing props manually",
    },
    {
      question: "What is the purpose of the useRef hook in React?",
      options: [
        "To access the DOM directly in functional components",
        "To create refs in class components",
        "To manage state in functional components",
        "To handle asynchronous actions in functional components",
      ],
      answer: "To access the DOM directly in functional components",
    },
    {
      question: "How can you optimize the performance of a React application?",
      options: [
        "By using class components instead of functional components",
        "By avoiding the use of hooks",
        "By minimizing the use of state and props",
        "By increasing the size of the application bundle",
      ],
      answer: "By minimizing the use of state and props",
    },
    {
      question: "What is the significance of the key prop in React lists?",
      options: [
        "It is used for encryption in React applications",
        "It is a reserved keyword for defining variables",
        "It helps React identify which items have changed, are added, or are removed",
        "It is a special prop used for styling components",
      ],
      answer:
        "It helps React identify which items have changed, are added, or are removed",
    },
    {
      question: "What is the React Fragment used for?",
      options: [
        "To create reusable component logic",
        "To group multiple elements without adding extra nodes to the DOM",
        "To handle asynchronous operations in React components",
        "To define global styles for a React application",
      ],
      answer:
        "To group multiple elements without adding extra nodes to the DOM",
    },
    {
      question: "How can you handle forms in React?",
      options: [
        "By using the form tag directly in React components",
        "By using the Formik library",
        "By handling form events and managing form state with React hooks",
        "By avoiding the use of forms altogether",
      ],
      answer:
        "By handling form events and managing form state with React hooks",
    },
    {
      question: "What is the purpose of the useMemo hook in React?",
      options: [
        "To memoize a function's return value",
        "To create a memoized selector",
        "To manage state in functional components",
        "To handle HTTP requests",
      ],
      answer: "To memoize a function's return value",
    },
    {
      question: "What is the React Router library used for?",
      options: [
        "To handle form submissions in React",
        "To manage routing and navigation in React applications",
        "To create reusable UI components",
        "To optimize rendering performance in React components",
      ],
      answer: "To manage routing and navigation in React applications",
    },
    {
      question: "What is the role of the useContext hook in React?",
      options: [
        "To manage state in functional components",
        "To create context providers",
        "To handle HTTP requests in functional components",
        "To access the value of a React context from within a functional component",
      ],
      answer:
        "To access the value of a React context from within a functional component",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    console.log("Option...clicked", option);
    if (selectedOption == null) {
      const isCorrect = option === questions[currentQuestion].answer;

      setUserAnswers([
        ...userAnswers,
        { question: currentQuestion, answer: option, isCorrect },
      ]);

      setSelectedOption(option);

      setTimeout(() => {
        setSelectedOption(null);

        if (currentQuestion + 1 === questions.length) {
          setShowResult(true);
        } else {
          setCurrentQuestion(currentQuestion + 1);
        }
      }, 1000);
    }
  };

  const totalCorrectAnswers = userAnswers.filter(
    (answer) => answer.isCorrect
  ).length;

  return (
    <>
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css"
        />
      </Head>
      <div className="container">
        <header className="p-3 d-flex justify-content-center main-header">
          <h1 className="text-white">Quiz</h1>
        </header>

        <div className="my-3 p-md-3 p-2 main-card card">
          {showResult ? (
            <div>
              <h6 className="text-white">
                <b>You scored</b> {totalCorrectAnswers}/{questions.length}
              </h6>
            </div>
          ) : (
            <div>
              <p className="main-card__count mb-0">
                Question {currentQuestion + 1} of {questions.length}
              </p>
              <div className="mt-2">
                <p className="main-card__question mb-2">
                  {questions[currentQuestion].question}
                </p>
                {questions[currentQuestion].options.map((option, idx) => (
                  <div
                    key={idx}
                    className="main-card__option my-1 px-2 py-2 d-flex align-items-center"
                    onClick={() => handleOptionClick(option)}
                  >
                    <div
                      className={`main-card__icon mr-2 ${
                        selectedOption === option
                          ? userAnswers[userAnswers.length - 1].isCorrect
                            ? "bg-success"
                            : "bg-danger"
                          : "bg-white"
                      }`}
                    >
                      {selectedOption === option &&
                        userAnswers[userAnswers.length - 1].isCorrect && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="16"
                            width="16"
                            viewBox="0 0 512 512"
                            fill="white"
                          >
                            <path d="M173.9 439.4l-166.4-166.4c-10-10-10-26.2 0-36.2l36.2-36.2c10-10 26.2-10 36.2 0L192 312.7 432.1 72.6c10-10 26.2-10 36.2 0l36.2 36.2c10 10 10 26.2 0 36.2l-294.4 294.4c-10 10-26.2 10-36.2 0z" />
                          </svg>
                        )}
                      {selectedOption === option &&
                        !userAnswers[userAnswers.length - 1].isCorrect && (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            height="16"
                            width="11"
                            viewBox="0 0 352 512"
                            fill="white"
                          >
                            <path d="M242.7 256l100.1-100.1c12.3-12.3 12.3-32.2 0-44.5l-22.2-22.2c-12.3-12.3-32.2-12.3-44.5 0L176 189.3 75.9 89.2c-12.3-12.3-32.2-12.3-44.5 0L9.2 111.5c-12.3 12.3-12.3 32.2 0 44.5L109.3 256 9.2 356.1c-12.3 12.3-12.3 32.2 0 44.5l22.2 22.2c12.3 12.3 32.2 12.3 44.5 0L176 322.7l100.1 100.1c12.3 12.3 32.2 12.3 44.5 0l22.2-22.2c12.3-12.3 12.3-32.2 0-44.5L242.7 256z" />
                          </svg>
                        )}
                    </div>{" "}
                    {option}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
