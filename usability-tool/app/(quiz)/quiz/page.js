// app\(quiz)\quiz\page.js

//import { useClient } from 'next/client';
import React from 'react';
import '@/styles/quiz_component.scss';

const Quiz = () => {
    /*
    const [questions, setQuestions] = useState([
        {// ... rest of your state
        id: 'q1',
        question: 'What is visibility of system status?',
        answers: [
            { id: 'q1a1', text: 'A. Flexibility and efficiency of use' },
            { id: 'q1a2', text: 'B. Visibility of system status' },
        ],
        correctAnswerId: 'q1a2',
        },
    // Add other questions similarly...
    {
        id: 'q2',
        question: '2. What is match between system and the real world?',
        answers: [
            { id: 'q2a1', text: 'A. Consistency and standards' },
            { id: 'q2a2', text: 'B. Match between system and the real world' },
        ],
        correctAnswerId: 'q2a2',
        },
        {
            id: 'q3',
            question: '3. What is user control and freedom?',
            answers: [
                { id: 'q3a1', text: 'A. User control and freedom' },
                { id: 'q3a2', text: 'B. Error prevention' },
            ],
            correctAnswerId: 'q3a1', // Example: specifying the correct answer ID
        },
        {
            id: 'q4',
            question: '4. What is consistency and standards?',
            answers: [
                { id: 'q4a1', text: 'A. Consistency and standards' },
                { id: 'q4a2', text: 'B. Flexibility and efficiency of use' },
            ],
            correctAnswerId: 'q4a1', // Example: specifying the correct answer ID
        },

    ]);

    const [answers, setAnswers] = useState([
        { id: 'visibility-of-system-status', text: '1' },
        { id: 'match-between-system-and-real-world', text: '2' },
        { id: 'user-control-and-freedom', text: '3' },
        { id: 'consistency-and-standards', text: '4' },
        // Add more answers as needed...
    ]);

    const [score, setScore] = useState(0);

    // Rest of your component logic with event handlers, etc.
    const handleDragStart = (e, answerId) => {
        e.dataTransfer.setData('text/plain', answerId);
    };

    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleDrop = (e, boxId) => {
        e.preventDefault();
        const answerId = e.dataTransfer.getData('text/plain');
        const draggedAnswer = document.getElementById(answerId);
        const dropZone = document.getElementById(boxId);

        if (draggedAnswer) {
            dropZone.appendChild(draggedAnswer);

            const questionId = dropZone.dataset.questionId;

            const correctAnswerId = questions.find(question => question.id === questionId).correctAnswerId;

            if (answerId === correctAnswerId) {
                setScore(prevScore => prevScore + 1);
            }
        }
    };*/


    return (
        <div>
            <h1>Ready to test your knowledge?</h1>
            <div className="quiz-container">
                <div className="questions">
                    {questions.map((question) => (
                        <div key={question.id} className="question" id={question.id}>
                            <p>{question.question}</p>
                            {question.answers.map((answer) => (
                                <div
                                    key={answer.id}
                                    className="answer"
                                    id={answer.id}
                                    draggable="true"
                                    onDragStart={(e) => handleDragStart(e, answer.id)}
                                >
                                    {answer.text}
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
                <div className="answers">
                    {answers.map((emptyBox) => (
                        <div
                            key={emptyBox.id}
                            className="empty-box"
                            id={emptyBox.id}
                            data-question-id={emptyBox.text} // You may want to assign the question ID to each drop zone
                            onDragOver={handleDragOver}
                            onDrop={(e) => handleDrop(e, emptyBox.id)}
                        >
                            {emptyBox.text}
                        </div>
                    ))}
                </div>
            </div>
            <div id="score">{`Score: ${score}`}</div>
        </div>
    );

};

export default useClient(Quiz);
