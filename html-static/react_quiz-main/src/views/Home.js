import React, { useState } from "react";
import { Card, Container, Button } from "reactstrap";
import questions from "../config/questions.json";

const Home = () => {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [userAnswers, setUserAnswers] = useState([]);
    const [showResult, setShowResult] = useState(false);
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOptionClick = (option) => {
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
        <Container>
            <Card className="my-3 p-md-3 p-2 main-card">
                {showResult ? (
                    <div>
                        <h6 className="text-white">
                            <b>You scored</b> {totalCorrectAnswers}/
                            {questions.length}
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
                            {questions[currentQuestion].options.map(
                                (option, idx) => (
                                    <div
                                        key={idx}
                                        className="main-card__option my-1 px-2 py-2 d-flex align-items-center"
                                        onClick={() =>
                                            handleOptionClick(option)
                                        }
                                    >
                                        <div
                                            className={`main-card__icon mr-2 ${
                                                selectedOption === option
                                                    ? userAnswers[
                                                          userAnswers.length - 1
                                                      ].isCorrect
                                                        ? "bg-success"
                                                        : "bg-danger"
                                                    : "bg-white"
                                            }`}
                                        >
                                            {selectedOption === option &&
                                                userAnswers[
                                                    userAnswers.length - 1
                                                ].isCorrect && (
                                                    <i className="fa fa-check text-white"></i>
                                                )}
                                            {selectedOption === option &&
                                                !userAnswers[
                                                    userAnswers.length - 1
                                                ].isCorrect && (
                                                    <i className="fa fa-times text-white"></i>
                                                )}
                                        </div>{" "}
                                        {option}
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                )}
            </Card>
        </Container>
    );
};

export default Home;
