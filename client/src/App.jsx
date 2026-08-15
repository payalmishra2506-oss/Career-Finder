import { useState } from "react";
import "./App.css";
import Auth from "./Auth";

const questions = [
  {
    question: "What do you enjoy doing the most?",
    options: [
      { text: "Solving technical problems", category: "technology" },
      { text: "Analyzing data and information", category: "data" },
      { text: "Designing and creating things", category: "design" },
      { text: "Leading and managing people", category: "business" },
    ],
  },

  {
    question: "Which skill describes you best?",
    options: [
      { text: "Programming", category: "technology" },
      { text: "Mathematics & Analysis", category: "data" },
      { text: "Creativity & Design", category: "design" },
      { text: "Communication & Leadership", category: "business" },
    ],
  },

  {
    question: "What kind of work environment do you prefer?",
    options: [
      { text: "Technology-focused", category: "technology" },
      { text: "Research & Data", category: "data" },
      { text: "Creative & Flexible", category: "design" },
      { text: "Business & Team-oriented", category: "business" },
    ],
  },

  {
    question: "Which activity sounds most interesting?",
    options: [
      { text: "Building a website or application", category: "technology" },
      { text: "Finding patterns in data", category: "data" },
      { text: "Creating a logo or poster", category: "design" },
      { text: "Planning a business strategy", category: "business" },
    ],
  },

  {
    question: "Which subject do you enjoy the most?",
    options: [
      { text: "Computer Science", category: "technology" },
      { text: "Mathematics", category: "data" },
      { text: "Art & Design", category: "design" },
      { text: "Business Studies", category: "business" },
    ],
  },

  {
    question: "What type of problems do you enjoy solving?",
    options: [
      { text: "Technical problems", category: "technology" },
      { text: "Logical and numerical problems", category: "data" },
      { text: "Creative problems", category: "design" },
      { text: "Organizational problems", category: "business" },
    ],
  },

  {
    question: "What would you rather spend your day doing?",
    options: [
      { text: "Coding and developing software", category: "technology" },
      { text: "Working with statistics and reports", category: "data" },
      { text: "Designing visuals and interfaces", category: "design" },
      { text: "Managing projects and teams", category: "business" },
    ],
  },

  {
    question: "Which quality describes you best?",
    options: [
      { text: "Logical thinker", category: "technology" },
      { text: "Analytical thinker", category: "data" },
      { text: "Creative thinker", category: "design" },
      { text: "Strategic thinker", category: "business" },
    ],
  },

  {
    question: "Which type of project would you enjoy?",
    options: [
      { text: "Building a mobile application", category: "technology" },
      { text: "Analyzing company data", category: "data" },
      { text: "Designing a mobile application", category: "design" },
      { text: "Managing a product launch", category: "business" },
    ],
  },

  {
    question: "Which tool would you most like to learn?",
    options: [
      { text: "Python / JavaScript", category: "technology" },
      { text: "Excel / Power BI", category: "data" },
      { text: "Figma / Photoshop", category: "design" },
      { text: "Business analytics tools", category: "business" },
    ],
  },

  {
    question: "How do you usually approach a problem?",
    options: [
      { text: "Break it into technical steps", category: "technology" },
      { text: "Study the available information", category: "data" },
      { text: "Think of creative solutions", category: "design" },
      { text: "Discuss it with the team", category: "business" },
    ],
  },

  {
    question: "Which type of work sounds most rewarding?",
    options: [
      { text: "Creating useful software", category: "technology" },
      { text: "Discovering useful insights", category: "data" },
      { text: "Creating beautiful experiences", category: "design" },
      { text: "Growing a successful business", category: "business" },
    ],
  },

  {
    question: "What motivates you the most?",
    options: [
      { text: "Learning new technologies", category: "technology" },
      { text: "Finding answers using data", category: "data" },
      { text: "Expressing creativity", category: "design" },
      { text: "Achieving goals with a team", category: "business" },
    ],
  },

  {
    question: "Which career area sounds most interesting?",
    options: [
      { text: "Software & Technology", category: "technology" },
      { text: "Data & Analytics", category: "data" },
      { text: "Design & Creativity", category: "design" },
      { text: "Business & Management", category: "business" },
    ],
  },

  {
    question: "What would you like your future career to involve?",
    options: [
      { text: "Technology and innovation", category: "technology" },
      { text: "Research and analysis", category: "data" },
      { text: "Creativity and design", category: "design" },
      { text: "Leadership and decision-making", category: "business" },
    ],
  },
];

function App() {
  const [page, setPage] = useState("home");

  const [user, setUser] = useState(null);

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState(
    Array(questions.length).fill(null)
  );

  const [results, setResults] = useState(null);

  const selectAnswer = (category) => {
    const updatedAnswers = [...answers];

    updatedAnswers[currentQuestion] = category;

    setAnswers(updatedAnswers);
  };

  const nextQuestion = () => {
    if (answers[currentQuestion] === null) {
      alert("Please select an answer first.");
      return;
    }

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const previousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateResults = () => {
    const scores = {
      technology: 0,
      data: 0,
      design: 0,
      business: 0,
    };

    answers.forEach((answer) => {
      if (answer) {
        scores[answer]++;
      }
    });

    const sortedResults = Object.entries(scores)
      .sort((a, b) => b[1] - a[1])
      .map(([category, score]) => ({
        category,
        score,
      }));

    setResults(sortedResults);
    setPage("results");
  };

  // =========================
  // AUTH PAGE
  // =========================

  if (page === "auth") {
    return (
      <Auth
        onLogin={(loggedInUser) => {
          setUser(loggedInUser);

          // IMPORTANT:
          // After login, go to dashboard instead of home.
          setPage("dashboard");
        }}
        onBack={() => setPage("home")}
      />
    );
  }

  // =========================
  // DASHBOARD PAGE
  // =========================

  if (page === "dashboard") {
    return (
      <div className="dashboard-page">

        <nav className="navbar dashboard-navbar">

          <div className="logo">
            Career<span>Finder</span>
          </div>

          <div className="nav-links">

            <span className="user-welcome">
              Hi, {user?.name || "User"} 👋
            </span>

            <button
              className="logout-btn"
              onClick={() => {
                setUser(null);
                setPage("home");
              }}
            >
              Logout
            </button>

          </div>

        </nav>


        <main className="dashboard-container">

          <section className="dashboard-welcome">

            <div className="dashboard-badge">
              ✨ YOUR PERSONAL CAREER SPACE
            </div>

            <h1>
              Hello,{" "}
              <span>
                {user?.name || "there"}!
              </span>{" "}
              👋
            </h1>

            <p>
              Ready to discover a career path
              that's right for you?
            </p>

          </section>


          <section className="dashboard-grid">

            <div className="dashboard-card dashboard-main-card">

              <div className="dashboard-card-icon">
                🎯
              </div>

              <div className="dashboard-card-content">

                <span className="card-label">
                  RECOMMENDED FOR YOU
                </span>

                <h2>
                  Discover Your Perfect Career
                </h2>

                <p>
                  Take our 15-question assessment
                  and discover career fields that
                  match your interests, skills,
                  personality and strengths.
                </p>

                <button
                  className="start-btn"
                  onClick={() => {
                    setCurrentQuestion(0);
                    setAnswers(
                      Array(questions.length).fill(null)
                    );
                    setResults(null);
                    setPage("assessment");
                  }}
                >
                  Start Assessment →
                </button>

              </div>

            </div>


            <div className="dashboard-card">

              <div className="dashboard-card-icon small-icon">
                💻
              </div>

              <h3>
                Explore Careers
              </h3>

              <p>
                Explore career paths across
                technology, data, design and
                business.
              </p>

              <button
                className="outline-btn"
                onClick={() => setPage("home")}
              >
                Explore Careers
              </button>

            </div>


            <div className="dashboard-card">

              <div className="dashboard-card-icon small-icon">
                📊
              </div>

              <h3>
                Your Assessment
              </h3>

              <p>
                Answer 15 questions to discover
                your strongest career areas.
              </p>

              <div className="dashboard-stat">

                <strong>15</strong>

                <span>
                  Questions
                </span>

              </div>

            </div>

          </section>


          <section className="dashboard-info">

            <div className="info-item">
              <span>🎯</span>
              <div>
                <strong>Personalized</strong>
                <p>Results based on your answers</p>
              </div>
            </div>

            <div className="info-item">
              <span>⚡</span>
              <div>
                <strong>Quick & Simple</strong>
                <p>Complete it in just a few minutes</p>
              </div>
            </div>

            <div className="info-item">
              <span>💡</span>
              <div>
                <strong>Useful Insights</strong>
                <p>Understand your career strengths</p>
              </div>
            </div>

          </section>

        </main>

      </div>
    );
  }


  // =========================
  // HOME PAGE
  // =========================

  if (page === "home") {
    return (
      <div className="app">

        <nav className="navbar">

          <div className="logo">
            Career<span>Finder</span>
          </div>

          <div className="nav-links">

            <a href="#home">
              Home
            </a>

            <a href="#how-it-works">
              How It Works
            </a>

            <a href="#careers">
              Careers
            </a>

            <button
              className="login-btn"
              onClick={() => setPage("auth")}
            >
              Login
            </button>

          </div>

        </nav>


        <section className="hero" id="home">

          <div className="hero-content">

            <p className="welcome-text">
              WELCOME TO CAREER FINDER
            </p>

            <h1>
              Find a Career
              <br />
              <span>That Fits You.</span>
            </h1>

            <p className="hero-description">
              Discover career paths that match your
              interests, skills, personality, and goals.
              Take our career assessment and discover
              what suits you best.
            </p>

            <button
              className="start-btn"
              onClick={() => {
                setCurrentQuestion(0);
                setAnswers(
                  Array(questions.length).fill(null)
                );
                setResults(null);
                setPage("assessment");
              }}
            >
              Find My Career →
            </button>

          </div>


          <div className="hero-card">

            <div className="card-icon">
              🎯
            </div>

            <h2>
              Your Future Starts Here
            </h2>

            <p>
              Answer 15 simple questions and discover
              career options that match your strengths.
            </p>

            <div className="career-stats">

              <div>
                <strong>20+</strong>
                <span>Careers</span>
              </div>

              <div>
                <strong>10+</strong>
                <span>Fields</span>
              </div>

              <div>
                <strong>15</strong>
                <span>Questions</span>
              </div>

            </div>

          </div>

        </section>


        <section
          className="how-it-works"
          id="how-it-works"
        >

          <div className="section-heading">

            <p>
              HOW IT WORKS
            </p>

            <h2>
              Discover Your Career in 3 Simple Steps
            </h2>

          </div>


          <div className="steps">

            <div className="step-card">

              <div className="step-number">
                01
              </div>

              <h3>
                Take the Assessment
              </h3>

              <p>
                Answer 15 questions about your
                interests, skills and preferences.
              </p>

            </div>


            <div className="step-card">

              <div className="step-number">
                02
              </div>

              <h3>
                Get Your Results
              </h3>

              <p>
                CareerFinder analyzes your answers
                and identifies your strongest areas.
              </p>

            </div>


            <div className="step-card">

              <div className="step-number">
                03
              </div>

              <h3>
                Explore Careers
              </h3>

              <p>
                Explore careers that match your
                interests and strengths.
              </p>

            </div>

          </div>

        </section>


        <section
          className="careers-section"
          id="careers"
        >

          <div className="section-heading">

            <p>
              EXPLORE POSSIBILITIES
            </p>

            <h2>
              Popular Career Paths
            </h2>

          </div>


          <div className="career-grid">

            <div className="career-card">
              <div className="career-icon">
                💻
              </div>
              <h3>
                Software Developer
              </h3>
              <p>
                Technology & Programming
              </p>
            </div>


            <div className="career-card">
              <div className="career-icon">
                📊
              </div>
              <h3>
                Data Analyst
              </h3>
              <p>
                Data & Analytics
              </p>
            </div>


            <div className="career-card">
              <div className="career-icon">
                🎨
              </div>
              <h3>
                UI/UX Designer
              </h3>
              <p>
                Design & Creativity
              </p>
            </div>


            <div className="career-card">
              <div className="career-icon">
                📈
              </div>
              <h3>
                Business Analyst
              </h3>
              <p>
                Business & Management
              </p>
            </div>

          </div>

        </section>


        <section className="cta">

          <h2>
            Not Sure What Career Is Right For You?
          </h2>

          <p>
            Let CareerFinder help you discover your
            potential.
          </p>

          <button
            className="start-btn"
            onClick={() => {
              setCurrentQuestion(0);
              setAnswers(
                Array(questions.length).fill(null)
              );
              setResults(null);
              setPage("assessment");
            }}
          >
            Start Your Assessment →
          </button>

        </section>


        <footer>

          <div className="logo">
            Career<span>Finder</span>
          </div>

          <p>
            Helping you discover the career that's
            right for you.
          </p>

          <p className="copyright">
            © 2026 Career Finder. All rights reserved.
          </p>

        </footer>

      </div>
    );
  }


  // =========================
  // ASSESSMENT PAGE
  // =========================

  if (page === "assessment") {

    const question = questions[currentQuestion];

    const progress =
      ((currentQuestion + 1) / questions.length) * 100;

    return (
      <div className="assessment-page">

        <div className="assessment-container">

          <button
            className="back-btn"
            onClick={() => setPage("home")}
          >
            ← Back to Home
          </button>


          <div className="assessment-header">

            <p className="welcome-text">
              CAREER ASSESSMENT
            </p>

            <h1>
              Let's Find Your Perfect Career
            </h1>

            <p>
              Answer honestly. There are no right
              or wrong answers.
            </p>

          </div>


          <div className="progress-container">

            <div className="progress-info">

              <span>
                Question {currentQuestion + 1}
                {" "}of{" "}
                {questions.length}
              </span>

              <span>
                {Math.round(progress)}%
              </span>

            </div>


            <div className="progress-bar">

              <div
                className="progress-fill"
                style={{
                  width: `${progress}%`,
                }}
              ></div>

            </div>

          </div>


          <div className="question-card">

            <h2>
              {currentQuestion + 1}.{" "}
              {question.question}
            </h2>


            <div className="options">

              {question.options.map(
                (option, index) => (

                  <label
                    className={`answer-option ${
                      answers[currentQuestion] ===
                      option.category
                        ? "selected"
                        : ""
                    }`}
                    key={index}
                  >

                    <input
                      type="radio"
                      name={`question-${currentQuestion}`}
                      checked={
                        answers[currentQuestion] ===
                        option.category
                      }
                      onChange={() =>
                        selectAnswer(
                          option.category
                        )
                      }
                    />

                    <span>
                      {option.text}
                    </span>

                  </label>

                )
              )}

            </div>

          </div>


          <div className="assessment-buttons">

            <button
              className="back-btn"
              onClick={previousQuestion}
              disabled={currentQuestion === 0}
            >
              ← Previous
            </button>


            <button
              className="start-btn"
              onClick={nextQuestion}
            >
              {currentQuestion ===
              questions.length - 1
                ? "See My Results →"
                : "Next →"}
            </button>

          </div>

        </div>

      </div>
    );
  }


  // =========================
  // RESULTS PAGE
  // =========================

  if (page === "results") {

    const topCategory =
      results?.[0]?.category;

    const categoryNames = {
      technology: "Technology & Programming",
      data: "Data & Analytics",
      design: "Design & Creativity",
      business: "Business & Management",
    };

    return (
      <div className="assessment-page">

        <div className="assessment-container">

          <div className="assessment-header">

            <p className="welcome-text">
              YOUR RESULTS
            </p>

            <h1>
              Your Career Profile 🎯
            </h1>

            <p>
              Based on your answers, here are your
              strongest career areas.
            </p>

          </div>


          <div className="result-top-card">

            <div className="card-icon">
              🏆
            </div>

            <p>
              YOUR TOP CAREER AREA
            </p>

            <h2>
              {categoryNames[topCategory]}
            </h2>

            <p>
              You showed the strongest interest in
              this career field.
            </p>

          </div>


          <div className="results-list">

            {results.map((result, index) => {

              const percentage =
                Math.round(
                  (result.score /
                    questions.length) *
                  100
                );

              return (
                <div
                  className="result-card"
                  key={result.category}
                >

                  <div>

                    <span className="result-rank">
                      #{index + 1}
                    </span>

                    <h3>
                      {categoryNames[
                        result.category
                      ]}
                    </h3>

                  </div>


                  <div className="result-score">

                    <strong>
                      {percentage}%
                    </strong>

                    <div className="result-bar">

                      <div
                        style={{
                          width: `${percentage}%`,
                        }}
                      ></div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>


          <div className="result-actions">

            <button
              className="start-btn"
              onClick={() => {
                setCurrentQuestion(0);
                setAnswers(
                  Array(questions.length).fill(null)
                );
                setResults(null);
                setPage("assessment");
              }}
            >
              Retake Assessment ↻
            </button>


            <button
              className="back-btn"
              onClick={() => {
                if (user) {
                  setPage("dashboard");
                } else {
                  setPage("home");
                }
              }}
            >
              ← Back
            </button>

          </div>

        </div>

      </div>
    );
  }

  return null;
}

export default App;