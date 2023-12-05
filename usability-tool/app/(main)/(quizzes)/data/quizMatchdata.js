// Data for the quiz questions and answers
const quizMatchData = [
  {
    question: 'Statement 1',
    answers: [
      { text: 'Heuristic1', isCorrect: true }, // Answer choice 1, correct
      { text: 'Heuristic2', isCorrect: false }, // Answer choice 2, incorrect
      { text: 'Heuristic3', isCorrect: false }, // Answer choice 3, incorrect
      { text: 'Heuristic4', isCorrect: false } // Answer choice 4, incorrect
    ],
    heuristicID: 1, // Identifier for heuristic related to this question
  },
  {
    question: 'Statement 2',
    answers: [
      { text: 'Heuristic1', isCorrect: false }, // Answer choice 1, incorrect
      { text: 'Heuristic2', isCorrect: true }, // Answer choice 2, correct
      { text: 'Heuristic3', isCorrect: false }, // Answer choice 3, incorrect
      { text: 'Heuristic4', isCorrect: false } // Answer choice 4, incorrect
    ],
    heuristicID: 2, // Identifier for heuristic related to this question
  },
  // Add more objects for additional questions
  {
    question: 'Statement 3',
    answers: [
      { text: 'Heuristic1', isCorrect: false }, // Answer choice 1, incorrect
      { text: 'Heuristic2', isCorrect: false }, // Answer choice 2, incorrect
      { text: 'Heuristic3', isCorrect: true }, // Answer choice 3, correct
      { text: 'Heuristic4', isCorrect: false } // Answer choice 4, incorrect
    ],
    heuristicID: 3, // Identifier for heuristic related to this question
  },
  {
    question: 'Statement 4',
    answers: [
      { text: 'Heuristic1', isCorrect: false }, // Answer choice 1, incorrect
      { text: 'Heuristic2', isCorrect: false }, // Answer choice 2, incorrect
      { text: 'Heuristic3', isCorrect: false }, // Answer choice 3, incorrect
      { text: 'Heuristic4', isCorrect: true } // Answer choice 4, correct
    ],
    heuristicID: 4, // Identifier for heuristic related to this question
  },
];

export default quizMatchData; // Export the quiz data for use in other files
