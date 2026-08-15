# CareerFinder

CareerFinder is a full-stack career assessment web application that helps users discover suitable career paths based on their interests, skills, preferences, and strengths.

The application provides a simple career assessment consisting of multiple questions. Based on the user's answers, the system calculates scores for different career categories and displays the user's strongest career areas.

## Features

- User registration and login
- Secure user authentication
- Career assessment with 15 questions
- Multiple-choice questions based on different career categories
- Automatic scoring of assessment answers
- Career result analysis
- Progress bar during the assessment
- Previous and next question navigation
- Responsive and user-friendly interface
- MySQL database integration
- REST API based backend
- Separate frontend and backend architecture

- <img width="1597" height="872" alt="Screenshot 2026-08-14 222404" src="https://github.com/user-attachments/assets/a4dce597-5c41-4e2a-9c1e-821f021c0e79" />
<img width="1600" height="873" alt="Screenshot 2026-08-14 222353" src="https://github.com/user-attachments/assets/6a20d51f-73c5-4234-be9a-1cd45d298a07" />
<img width="1607" height="867" alt="Screenshot 2026-08-14 222332" src="https://github.com/user-attachments/assets/1c957509-d7d0-4295-86d4-c2c3c2e48d45" />
<img width="1597" height="875" alt="Screenshot 2026-08-14 222321" src="https://github.com/user-attachments/assets/e3645c5f-5114-4a74-b10d-5d7ca57d62f6" />


## Career Categories

CareerFinder currently evaluates users across four major career categories:

- Technology
- Data and Analytics
- Design and Creativity
- Business and Management

## Technology Stack

### Frontend

- React.js
- JavaScript
- HTML
- CSS
- Vite

### Backend

- Node.js
- Express.js
- REST API

### Database

- MySQL
- mysql2

### Authentication

- User registration and login
- Password-based authentication
- Authentication middleware

## Project Structure

```text
CareerFinder/
│
├── backend/
│   ├── middleware/
│   │   └── authMiddleware.js
│   │
│   ├── models/
│   │   └── User.js
│   │
│   ├── routes/
│   │   └── auth.js
│   │
│   ├── db.js
│   ├── server.js
│   ├── package.json
│   └── .env
│
├── client/
│   ├── src/
│   │   ├── assets/
│   │   ├── App.jsx
│   │   ├── Assessment.jsx
│   │   ├── Auth.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
├── README.md
└── package.json

