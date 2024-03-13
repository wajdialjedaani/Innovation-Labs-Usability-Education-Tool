// HEURISTIC 1

export const heuristic1Questions = [
  {
    question:
      "Which of the following is an example of a situational system status?",
    answers: [
      "An icon that shows the battery percentage of a phone.",
      "A popup icon that is displayed when the user successfully submits a form.",
      "A widget on the home page of an application that shows the current date and time.",
      "An email application that displays the number of unread emails to the user.",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "A button to send an email does not provide appropriate feedback to the user when it is clicked. What event is least likely to occur?",
    answers: [
      "The user will continue to press the button, sending the email multiple times.",
      "The user will assume that the button is not functional.",
      "The user will assume that their email was sent successfully.",
      "The user will become frustrated with the system and will not use it again.",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. The system should display all of its status constantly to the user.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "A button of a website downloads a PDF document, but it does not display any status of the download to the user. What would be the best change in this situation?",
    answers: [
      "Display the status of the download constantly to the user in the form of a progress bar.",
      "Only tell the user the status of the download when the PDF finishes being downloaded.",
      "Only tell the user that the download has started.",
      "Do not change anything.",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "Which of the following should maintain control of a system while using it?",
    answers: ["Administrators", "Designers", "Developers", "Users"],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "Of the following system statuses, which is the most likely to be displayed to the user of a social media application?",
    answers: [
      "The user’s IP address.",
      "The number of unread messages a user has.",
      "The user’s geographic location.",
      "The current firmware version of the user’s device.",
    ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question: "What does the term “Visibility of System Status” refer to?",
    answers: [
      "Information presented to a user about a system’s current state.",
      "The physical appearance of a system.",
      "The level of responsiveness a system has with user inputs.",
      "Any information that is presented to the user.",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "Why is it important to provide appropriate feedback of user actions to the user?",
    answers: [
      "It increases the performance of the system.",
      "It improves the overall appearance of the system.",
      "It tells the user that their input was recognized by the system.",
      "It helps the users maintain engagement with the system.",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "What should be the primary focus when determining what system statuses to display to the user?",
    answers: [
      "What looks the best to the user.",
      "Nothing. All system statuses should be displayed to the user.",
      "What system statuses are currently of the best interest to the user.",
      "Nothing. Only the basic system statuses should be displayed to the user.",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. The user gains trust with a system when the system shares its status with the user.",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. When a system is processing something, it should wait until it is finished to provide feedback to the user.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "A system allows a user to upload a file and convert it to a number of various file formats. The process of converting the file can take some time. At what time should the system provide feedback of the file conversion to the user?",
    answers: [
      "When the file finishes being converted.",
      "Sometime in the middle of the file conversion.",
      "When the system starts the file conversion.",
      "Sometime after the file is done being converted.",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "A system allows a user to upload a file and convert it to a number of various file formats. The process of converting the file can take some time. At what time should the system provide feedback of the file conversion to the user?",
    answers: [
      "When the file finishes being converted.",
      "Sometime in the middle of the file conversion.",
      "When the system starts the file conversion.",
      "Sometime after the file is done being converted.",
    ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "Which of the following in the below image is not an example of visibility of system status?",
    image: "/quiz/quiz1-graphics/quiz1_refrigerator.png",
    answers: [
      "The color button is highlighted to the selected color.",
      "The delivery button is highlighted when selected by the user.",
      "The system is alerting the user that pickup for this item is unavailable.",
      "The color of the Add to Cart button",
    ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "The website for a stadium allows users to see the availability of seats per section. In what way is this an example of the visibility of system status?",
    image: "/quiz/quiz1-graphics/quiz1_stadium.png",
    answers: [
      "The system is providing the user with a status that is relevant to the scenario and will help them in their decision-making.",
      "The system is providing all of its status information to the user.",
      "The system is providing some status information to the user, but it isn’t relevant for this scenario.",
      "The system is waiting for user input first to show its status.",
    ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "An e-commerce website always displays the following icon. The number next to the cart shows how many items are in the cart and gets updated every time the cart changes. Is this an example of situational or persistent system status?",
    image: "/quiz/quiz1-graphics/quiz1_cart.png",
    answers: ["Situational", "Persistent"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
];

// HEURISTIC 2

export const heuristic2Questions = [
  {
    question:
      "Which of the following is NOT a way to improve the match between a system and the real world?",
    answers: [
      "Using unfamiliar symbols and terminology.",
      "Organizing information in a logical and natural order.",
      "Using language and phrases common to the users.",
      "Providing appropriate feedback to users based on their expectations.",
      ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "What is the benefit of using familiar language and symbols in a system?",
    answers: [
      "It reduces the development time for the system.",
      "It makes the system more visually appealing.",
      "It allows users to understand the system more easily.",
      "It eliminates the need for user training.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Using industry-standard icons for common actions is an example of matching the system to the real world.",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Organizing information in a way that is unfamiliar to users can improve the user experience.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. User testing is not necessary for ensuring a good match between the system and the real world.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "How can user testing help ensure a good match between the system and the real world?",
    answers: [
      "It helps identify technical bugs in the system.",
      "It helps understand user expectations and how well the system meets them.",
      "It helps ensure the system is visually appealing to users.",
      "It helps identify the most efficient way to complete tasks in the system.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question: "What is the importance of consistency in terminology within a system?",
    answers: [
      "It allows developers to use different terms interchangeably.",
      "It eliminates the need for user training.",
      "It makes the system more visually appealing.",
      "It helps users understand the system more easily.",
      ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "Which of the following is an example of matching the system to the real world through navigation?",
    answers: [
      "Organizing information alphabetically, regardless of user expectations.",
      "Displaying information in a random order to encourage exploration.",
      "Using industry-standard icons for common actions.",
      "Requiring users to complete tasks in a non-intuitive sequence.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "When designing a system for international users, it's important to:",
    answers: [
      "Use the same language and symbols for all users.",
      "Consider cultural differences and adapt the system accordingly.",
      "Prioritize industry-standard terminology over local languages.",
      "Only focus on making the system visually appealing for all cultures.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "A system allows users to undo their actions easily. This is beneficial because it:",
    answers: [
      "Matches the user's expectation of being able to correct mistakes.",
      "Reduces the development complexity of the system.",
      "Discourages users to experiment with different features.",
      "Makes the system more visually appealing.",
      ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. This is a proper icon for a checkout button.",
    image: "/quiz/quiz2-graphics/quiz2_magnifying_glass.png",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Which aspect most constributes to this music player app's match with real-world music players?",
    image: "/quiz/quiz2-graphics/quiz2_music_player.png",
    answers: [
      "Universally recognized symbols for playback control",
      "Recognizable color schemes",
      "Simple and easy to read font.",
      "Highly detailed images for the album cover.",
      ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. This example correctly matches examples from the system and the real world.",
    image: "/quiz/quiz2-graphics/quiz2_file_folder.png",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. This is a proper icon for a home button.",
    image: "/quiz/quiz2-graphics/quiz2_home_icon.png",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. The calculator app on the right sufficiently captures most functionalities of the real world calculator on the left",
    image: "/quiz/quiz2-graphics/quiz2_calculators.png",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  ];

// HEURISTIC 3

export const heuristic3Questions = [
  {
    question:
      "Which of the following features is NOT consistent with the \"user control and freedom\" principle?",
    answers: [
      "Automatic form submission without confirmation prompts.",
      "The presence of clear and easily accessible \"undo\" or \"back\" buttons.",
      "Navigation menus that allow users to easily access different parts of the system.",
      "The ability to customize the interface layout to user preferences.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Why is it important to provide users with the ability to undo actions?",
    answers: [
      "To allow users to correct mistakes and prevent frustration.",
      "To make the system more visually appealing.",
      "To reduce the need for user training.",
      "To increase the speed at which users complete tasks.",
      ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. A system that forces users to follow a specific workflow adheres to the principle of user control and freedom.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Providing clear and easily accessible \"undo\" o \"back\" buttons is an example of user control and freedom.",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Offering multiple navigation options, such as menus and search bars, can hinder user experience.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "What is the benefit of offering multiple navigation options in a system?",
    answers: [
      "It reduces the development complexity of the system.",
      "It creates a more visually consistent interface.",
      "It allows users to navigate according to their preferred style.",
      "It forces users to learn a specific navigation method.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question: "A website requires users to watch a full advertisement before accessing content. This is an example of:",
    answers: [
      "Providing user control and freedom.",
      "Simplifying the user interface.",
      "Encouraging user exploration of the website.",
      "Limiting user control and freedom.",
      ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "What is the importance of clear and accessible exit options in a system?",
    answers: [
      "They improve the system's loading speed.",
      "They allow users to easily disengage from unwanted interactions.",
      "They make the user interface appear more organized.",
      "They force users to complete specific actions before exiting.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "When designing a form, it's important to:",
    answers: [
      "Automatically pre-populate all fields with default values.",
      "Disable the \"back\" button to prevent users from changing their answers.",
      "Require users to complete all fields, even if some are optional.",
      "Allow users to easily review and edit their input before submission.",
      ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "A mobile app requires users to swipe through several tutorial screens before accessing the main features. This is an example of:",
    answers: [
      "Limiting user control and freedom.",
      "Providing clear and helpful instructions.",
      "Encouraging user exploration of the app's features.",
      "Simplifying the user interface layout.",
      ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "Which of the following statements is TRUE about user control and freedom?",
    answers: [
      "It encourages users to make more mistakes.",
      "It prioritizes system efficiency over user preferences.",
      "It empowers users to navigate and interact with confidence.",
      "It forces users to follow a specific workflow.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. These two functions are extremely important when considering Heuristic 3",
    image: "/quiz/quiz3-graphics/quiz3_redo_undo.png",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "Which aspect of this progress bar most contributes to the user's control and freedom?",
    image: "/quiz/quiz3-graphics/quiz3_progress_bar.png",
    answers: [
      "The application's progress is clearly shown to the user.",
      "A color scheme that is easy to read.",
      "The ability to cancel progress whenever the user desires.",
      "Simplistic layout and design of the progress bar window.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "Which aspect of this form most violates Heuristic 3?",
    image: "/quiz/quiz3-graphics/quiz3_form_submission.png",
    answers: [
      "There are too many advertisements on the page.",
      "There is no reset button to clear the page.",
      "The layout of the page is confusing.",
      "The user is required to enter a second address.",
      ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. This instant messaging interface provides the user with many options to interact with a message they have sent.",
    image: "/quiz/quiz3-graphics/quiz3_texting.jpg",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. This mobile game advertisement is not intrusive and provides users with plenty of space to complete what they're working on",
    image: "/quiz/quiz3-graphics/quiz3_ad.png",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  ];

// HEURISTIC 4

export const heuristic4Questions = [
  {
    question:
      "Which of the following is NOT a benefit of consistent design elements in an interface?",
    answers: [
      "Increased user learning time.",
      "Improved user navigation and familiarity.",
      "Increased need for user training.",
      "Decreased visual appeal of the interface.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "What does \"standardized interactions\" refer to in Heuristic 4?",
    answers: [
      "Maintaining a specific font size for all text.",
      "To make the system more visually appealing.",
      "Ensuring consistent behavior for user actions like clicking and dragging.",
      "Applying the same icon style for all functionalities.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Using industry-standard icons for common actions adheres to the principle of consistency and standards.",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. A website can maintain a consistent user experience even if the layout changes drastically between different pages.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Complying with accessibility standards is an optional consideration in interface design.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Why is it important to ensure consistency across different devices?",
    answers: [
      "To reduce the development time for the interface.",
      "To limit the number of icons used in the interface.",
      "To force users to learn new interaction methods on different devices.",
      "To provide users with a seamless experience regardless of device.",
      ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question: "What is the purpose of complying with accessibility standards in interface design?",
    answers: [
      "To create a visually appealing interface for all users.",
      "To simplify the testing process for the interface.",
      "To ensure equal access to information for users with disabilities.",
      "To reduce the need for user support resources.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "A website uses a red button for \"submit\" on the homepage but changes to a blue button with a different shape on the checkout page. This violates which principle of Heuristic 4?",
    answers: [
      "Standardized Interactions.",
      "Compliance with Accessibility Standards.",
      "Consistent Design Elements.",
      "Consistency Across Devices.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "A mobile app uses a swipe gesture for \"back\" on some screens but requires a dedicated \"back\" button on others. This is an example of:",
    answers: [
      "Inconsistency that can confuse users.",
      "Effective use of standardized interactions.",
      "A creative approach to user interface design.",
      "A way to encourage user exploration of the app.",
      ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "When designing a new software platform, it's important to:",
    answers: [
      "Use unique and innovative interaction methods to impress users.",
      "Follow established user interface conventions whenever possible.",
      "Prioritize visual aesthetics over consistency in design elements.",
      "Design the interface based on personal preferences of the development team.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Maintaining consistency in an interface is only important for websites and not for mobile apps.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. In this image, the mobile website would be difficult to navigate for a user that is used to the desktop website.",
    image: "/quiz/quiz4-graphics/quiz4_desktop_mobile.jpg",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Where would this search bar be better located according to Heuristic 4?",
    image: "/quiz/quiz4-graphics/quiz4_search.png",
    answers: [
      "Further down on the side menu.",
      "At the top of the main page.",
      "At the bottom of the main page.",
      "Further up on the side menu.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "How do the consistent navigation bars on word and excel benefit users according to Heuristic 4??",
    image: "/quiz/quiz4-graphics/quiz4_navigation_bars.png",
    answers: [
      "They create a sense of mystery and encourage exploration.",
      "They force users to learn the location of specific features on each program.",
      "They eliminate the need for any user training or documentation.",
      "They allow users to find familiar tools and functions quickly and easily.",
      ],
    correctAnswerIndex: 3,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. This music player follows Heuristic 4 by swapping play and pause icons",
    image: "/quiz/quiz4-graphics/quiz4_music_player.jpg",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  ];

// HEURISTIC 5

export const heuristic5Questions = [
  {
    question:
      "Which of the following is NOT a way to prevent errors according to Heuristic 5?",
    answers: [
      "Implementing real-time feedback on the validity of user input.",
      "Using cryptic and unclear labels for buttons and fields.",
      "Providing confirmation dialogs before irreversible actions.",
      "Offering suggestions for correcting invalid data entry.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "Why is it important to use clear and descriptive labels for interface elements?",
    answers: [
      "To make the interface visually appealing.",
      "To save development time during interface creation.",
      "To reduce user confusion and errors.",
      "To limit the number of words used in the interface.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Using confirmation dialogs before deleting important data is an example of error prevention.",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Ambiguous labels for buttons and fields can contribute to a positive user experience.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Providing clear error messages without suggestions for correction is sufficient for error prevention.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "A website asks users to confirm their password change with a simple \"Yes\" or \"No\" prompt. This is an example of:",
    answers: [
      "Effective error prevention with clear confirmation.",
      "A creative approach to user interaction.",
      "A poorly designed confirmation dialog that can lead to accidental actions.",
      "A way to reduce the time it takes users to complete actions.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question: "What is the benefit of real-time feedback on user input?",
    answers: [
      "It helps users identify and correct errors as they type.",
      "It allows users to bypass confirmation dialogs.",
      "It reduces the need for user training on data entry formats.",
      "It simplifies the development process for input validation.",
      ],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "A mobile app requires users to enter their phone number in a text field but doesn't specify the required format (e.g., with or without hyphens). This can lead to:",
    answers: [
      "A faster user onboarding process.",
      "A more visually minimal interface design.",
      "Increased user errors and frustration due to unclear expectations.",
      "Improved user engagement with the app.",
      ],
    correctAnswerIndex: 2,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Error prevention in interface design is only important for complex systems.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "When designing a form, it's best to:",
    answers: [
      "Allow users to submit the form even if required fields are left blank.",
      "Clearly indicate required fields with an asterisk or other visual cue.",
      "Use generic error messages like \"There was an error\" without specific details.",
      "Disable the submit button until all fields are filled, regardless of whether they are required.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. Error prevention features always slow down users and hinder their workflow.",
    answers: ["True", "False"],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. This attemped login properly notifies users of an error and provides them with options to resolve it.",
    image: "/quiz/quiz5-graphics/quiz5_facebook.jpg",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "This error message \"Nope. Try again.\" likely indicates that an incorrect password has been entered. What would be a proper error message?",
    image: "/quiz/quiz5-graphics/quiz5_password.png",
    answers: [
      "Nuh uh.",
      "Incorrect Password. Please Try Again.",
      "Maybe Next Time.",
      "Try again.",
      ],
    correctAnswerIndex: 1,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. This image properly conveys to the user what actions the \"Yes\" and \"No\" buttons will perform.",
    image: "/quiz/quiz5-graphics/quiz5_delete.png",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  {
    question:
      "True or False. This pop-up properly conveys the irreversability and permanence of the action they are about to perform.",
    image: "/quiz/quiz5-graphics/quiz5_messages.jpg",
    answers: ["True", "False"],
    correctAnswerIndex: 0,
    selectedAnswer: null,
  },
  ];