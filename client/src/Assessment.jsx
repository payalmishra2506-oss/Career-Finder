import React, { useState } from "react";

function Assessment({ onBack }) {
  const [currentQuestion, setCurrentQuestion] = useState(0);

  const questions = [
    {
      question: "What do you enjoy doing the most?",
      options: [
        "Solving problems and working with technology",
        "Designing and creating things",
        "Helping and communicating with people",
        "Managing and organizing things",
      ],
    },
    {
      question: "Which activity sounds most interesting to you?",
      options: [
        "Building a website or application",
        "Creating a poster or user interface",
        "Teaching or guiding someone",
        "Planning a project or event",
      ],
    },
    {
      question: "Which skill describes you best?",
      options: [
        "Logical thinking",
        "Creativity",
        "Communication",
        "Leadership",
      ],
    },
    {
      question: "What kind of work environment do you prefer?",
      options: [
        "Working with computers and technology",
        "A creative environment",
        "Working closely with people",
        "Managing teams and projects",
      ],
    },
    {
      question: "What is most important to you in a career?",
      options: [
        "Innovation and problem solving",
        "Creativity and self-expression",
        "Making a difference in people's lives",
        "Growth and leadership",
      ],
    },
  ];

  const nextQuestion = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  return (
    <div className="assessment-page">

      <div className="assessment-header">
        <button className="back-button" onClick={onBack}>
          ← Back to Home
        </button>

        <div className="assessment-logo">
          Career<span>Finder</span>
        </div>
      </div>

      <div className="assessment-container">

        <div className="assessment-top">
          <p>CAREER ASSESSMENT</p>

          <h1>Discover Your Perfect Career</h1>

          <span>
            Answer a few questions and we'll help you find career paths
            that match your interests and strengths.
          </span>
        </div>

        <div className="progress-container">

          <div className="progress-text">
            Question {currentQuestion + 1} of {questions.length}
          </div>

          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{
                width: `${((currentQuestion + 1) / questions.length) * 100}%`,
              }}
            ></div>
          </div>

        </div>

        <div className="question-card">

          <h2>
            {questions[currentQuestion].question}
          </h2>

          <div className="options">

            {questions[currentQuestion].options.map((option, index) => (
              <button
                className="option-button"
                key={index}
              >
                <span className="option-number">
                  {String.fromCharCode(65 + index)}
                </span>

                {option}
              </button>
            ))}

          </div>

          <div className="question-navigation">

            <button
              className="previous-button"
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
            >
              ← Previous
            </button>

            <button
              className="next-button"
              onClick={nextQuestion}
              disabled={currentQuestion === questions.length - 1}
            >
              Next →
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Assessment;