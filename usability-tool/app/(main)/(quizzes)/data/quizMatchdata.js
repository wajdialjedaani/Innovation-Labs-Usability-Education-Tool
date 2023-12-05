// Data for the quiz questions and answers
const quizMatchData = [
  {
    question: 'Visibility of system status',
    answers: [
      { text: 'The information shown to the user about the current state of the system including feedback for users’ actions.', isCorrect: true }, // Answer choice 1, correct
      { text: 'Create interfaces that follow real world conventions.  The system should align with what the user expects it to look like.', isCorrect: false }, // Answer choice 2, incorrect
      { text: 'The ability to navigate the system freely.  Allows the user to correct mistakes and backtrack with minimal frustration.', isCorrect: false }, // Answer choice 3, incorrect
      { text: 'Follow established conventions throughout the interface.  Allows users to understand a new aspect of the system because they are familiar with old aspects.', isCorrect: false } // Answer choice 4, incorrect
    ],
    heuristicID: 1, // Identifier for heuristic related to this question
  },
  {
    question: 'Match between system and the real world',
    answers: [
      { text: 'The information shown to the user about the current state of the system including feedback for users’ actions.', isCorrect: false }, // Answer choice 1, incorrect
      { text: 'Create interfaces that follow real world conventions.  The system should align with what the user expects it to look like.', isCorrect: true }, // Answer choice 2, correct
      { text: 'The ability to navigate the system freely.  Allows the user to correct mistakes and backtrack with minimal frustration.', isCorrect: false }, // Answer choice 3, incorrect
      { text: 'Follow established conventions throughout the interface.  Allows users to understand a new aspect of the system because they are familiar with old aspects.', isCorrect: false } // Answer choice 4, incorrect
    ],
    heuristicID: 2, // Identifier for heuristic related to this question
  },
  // Add more objects for additional questions
  {
    question: 'User Control and freedom',
    answers: [
      { text: 'The information shown to the user about the current state of the system including feedback for users’ actions.', isCorrect: false }, // Answer choice 1, incorrect
      { text: 'Create interfaces that follow real world conventions.  The system should align with what the user expects it to look like.', isCorrect: false }, // Answer choice 2, incorrect
      { text: 'The ability to navigate the system freely.  Allows the user to correct mistakes and backtrack with minimal frustration.', isCorrect: true }, // Answer choice 3, correct
      { text: 'Follow established conventions throughout the interface.  Allows users to understand a new aspect of the system because they are familiar with old aspects.', isCorrect: false } // Answer choice 4, incorrect
    ],
    heuristicID: 3, // Identifier for heuristic related to this question
  },
  {
    question: 'Consistency and standards',
    answers: [
      { text: 'The information shown to the user about the current state of the system including feedback for users’ actions.', isCorrect: false }, // Answer choice 1, incorrect
      { text: 'Create interfaces that follow real world conventions.  The system should align with what the user expects it to look like.', isCorrect: false }, // Answer choice 2, incorrect
      { text: 'The ability to navigate the system freely.  Allows the user to correct mistakes and backtrack with minimal frustration.', isCorrect: false }, // Answer choice 3, incorrect
      { text: 'Follow established conventions throughout the interface.  Allows users to understand a new aspect of the system because they are familiar with old aspects.', isCorrect: true } // Answer choice 4, correct
    ],
    heuristicID: 4, // Identifier for heuristic related to this question
  },
];

export default quizMatchData; // Export the quiz data for use in other files
