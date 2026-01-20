# Quiz Application – React

## Description
This is a simple Quiz Application built using React.  
Users can answer multiple-choice questions and view their final score at the end.

This project was developed as part of my learning journey in React to understand
core concepts such as state management, props, and component-based architecture.

---

## Technologies Used
- React
- JavaScript (ES6)
- HTML
- CSS
- Create React App

---

## Features
- Multiple-choice quiz questions
- Dynamic question rendering
- Score calculation based on correct answers
- Final result display
- Simple and clean user interface

---

## React Concepts Used
- Functional Components
- Props
- State Management using `useState`
- Conditional Rendering
- Component Reusability

---

## Project Structure
quizapplication/
│
├── public/
├── src/
│ ├── components/
│ ├── App.js
│ ├── index.js
│ └── App.css
├── package.json
├── package-lock.json
├── README.md



---

## How to Run the Project

### Step 1: Install Dependencies
```bash
npm install
Step 2: Start the Application
bash
Copy code
npm start
The application will run on:
http://localhost:3000

How the Application Works
Questions are stored as data inside the application.

The current question index and score are managed using React state.

When a user selects an answer, the state updates and the next question is displayed.

At the end of the quiz, the final score is shown to the user.

Future Enhancements
Add a timer for each question

Fetch questions from an external API

Add user authentication

Improve UI and responsiveness

