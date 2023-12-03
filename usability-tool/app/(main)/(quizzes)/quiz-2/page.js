// Import necessary modules and components
"use client";
// Import necessary modules and components
import { useState, useEffect } from "react";
import styles from "@/styles/matchquiz.scss"; // Import SCSS styles
import quizMatchData from "../data/quizMatchdata"; // Import the quiz data

// QuestionBox component
const QuestionBox = ({ question, onClick, isActive }) => (
  // Renders a question box with conditional 'active' class based on 'isActive'
  <div className={`question ${isActive ? 'active' : ''}`} onClick={onClick}>
    <h2>{question}</h2> {/* Renders the text of the question */}
  </div>
);

// AnswerOption component
const AnswerOption = ({ text, onClick, isHighlighted, feedbackColor }) => (
  // Renders an answer option box with conditional highlighting based on 'isHighlighted'
  <div
    className={`answer-box ${isHighlighted ? 'highlighted' : ''}`}
    // Sets the background color based on 'isHighlighted' and 'feedbackColor'
    style={{ backgroundColor: isHighlighted ? feedbackColor || '' : '' }}
    onClick={onClick} // Attaches the 'onClick' event handler to the answer option
  >
    <p>{text}</p> {/* Renders the text of the answer option */}
  </div>
);

export default function matchQuiz() {
  // State variables initialization using the useState hook
  const [selectedQuestion, setSelectedQuestion] = useState(null); // Tracks the index of the currently selected question
  const [selectedAnswer, setSelectedAnswer] = useState(null);  // Tracks the index of the currently selected answer
  const [displayedAnswers, setDisplayedAnswers] = useState([]); // Holds the displayed set of answers based on the selected question
  const [feedbackColor, setFeedbackColor] = useState(null); // Indicates the color for the feedback (e.g., correct or incorrect answer)
  const [correctAnswers, setCorrectAnswers] = useState(0);  // Keeps track of the number of correct answers
  const [quizCompleteWithAllCorrect, setQuizCompleteWithAllCorrect] = useState(false);  // Tracks whether all questions have been answered correctly
  const [stopCounterUpdate, setStopCounterUpdate] = useState(false);// Stops counter update when the quiz is complete or all answers are correct
  const [finalScore, setFinalScore] = useState(0);  // State variable to store the final score
  // Manages an array to track which questions have been answered
  const [currentQuestionAnswered, setCurrentQuestionAnswered] = useState(
    new Array(quizMatchData.length).fill(false)
  );

  // Handles clicking on a question
  const handleQuestionClick = (questionIndex) => {
    setSelectedQuestion(questionIndex); // Sets the selected question index
    setSelectedAnswer(null); // Resets the selected answer on question change
    // Sets the displayed answers based on the selected question's answers, limited to 4 items
    setDisplayedAnswers(quizMatchData[questionIndex]?.answers.slice(0, 4) || []);
    setFeedbackColor(null); // Resets feedback color on question change
  };

  // Handles clicking on an answer
  const handleAnswerClick = (answerIndex) => {
    // Checks if a question is selected and an answer is not already chosen
    if (selectedQuestion !== null && selectedAnswer === null) {
      setSelectedAnswer(answerIndex); // Sets the selected answer index
      // Checks if the selected answer is correct based on the current question and answer index
      const isCorrect = quizMatchData[selectedQuestion]?.answers[answerIndex]?.isCorrect || false;
      setFeedbackColor(isCorrect ? 'green' : 'red'); // Sets the feedback color based on the correctness

      // Checks if the selected answer is correct and hasn't been answered before
      if (isCorrect && !currentQuestionAnswered[selectedQuestion]) {
        setCorrectAnswers((prevCount) => {
          // Increments the correct answer count and checks if all questions are answered correctly
          const updatedCount = prevCount + 1;
          if (updatedCount === quizMatchData.length) {
            setStopCounterUpdate(true); // Stops the counter update when all questions are answered
            setFinalScore(updatedCount * 2); // Calculates and sets the final score
          }
          return updatedCount;
        });

        setCurrentQuestionAnswered((prev) => {
          // Updates the status of the current question as answered
          const updated = [...prev];
          updated[selectedQuestion] = true;
          return updated;
        });

        if (correctAnswers + 1 === quizMatchData.length) {
          setQuizCompleteWithAllCorrect(true); // Sets the quiz completion status to true
        }
      }
    }
  };

  // useEffect hook to update state when quizCompleteWithAllCorrect changes
  useEffect(() => {
    // Checks if all questions have been answered correctly
    if (quizCompleteWithAllCorrect) {
      setStopCounterUpdate(true); // Stops the counter update when all questions are answered correctly
    }
  }, [quizCompleteWithAllCorrect]); // Triggers the effect when quizCompleteWithAllCorrect changes

  return (
    // Container for the quiz description and content
    <div className="description-container">
      {/* Quiz description */}
      <h2>Cumulative quiz!</h2>
      <h3>This is a match quiz to test your knowledge</h3>
      <p>
        Instructions: To play the quiz click on a statement and select the answer choice you
        think is best, if you get the answer wrong just click the question to try again.
      </p>
      
      {/* Main quiz container */}
      <main className="quiz-container">
        {/* Question column */}
        <div className="question-column">
          {/* Maps through quiz data to render QuestionBox component */}
          {quizMatchData.map((data, index) => (
            <QuestionBox
              key={index}
              question={data.question}
              isActive={selectedQuestion === index}
              onClick={() => handleQuestionClick(index)}
            />
          ))}
        </div>

        {/* Answer column */}
        <div className="answer-column">
          <div className="answer-boxes">
            {/* Maps through displayedAnswers to render AnswerOption component */}
            {displayedAnswers.map((answer, index) => (
              <AnswerOption
                key={index}
                text={answer.text}
                isHighlighted={selectedAnswer === index}
                onClick={() => handleAnswerClick(index)}
                feedbackColor={feedbackColor}
              />
            ))}
          </div>
        </div>

        {/* Score box displayed conditionally */}
        {!stopCounterUpdate && !quizCompleteWithAllCorrect && (
          <div className="score-box">
            <p>Score: {correctAnswers * 2}</p>
          </div>
        )}
        {quizCompleteWithAllCorrect && (
          <div className="score-box">
            <p>You have successfully selected all correct answers</p>
            <p>Final Score: {finalScore}</p>
          </div>
        )}
      </main>
    </div>
  );
}
