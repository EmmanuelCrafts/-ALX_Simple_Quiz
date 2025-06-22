# ALX_Simple_Quiz

This is a simple interactive quiz project created as part of the ALX Frontend Development learning experience.

##  Project 1: Simple Quiz

The quiz is designed to test the user's basic knowledge through a multiple-choice question. The quiz uses **HTML** and **CSS** for structure and styling, and **JavaScript** to handle user interaction and feedback.

### Features

- A single quiz question: "What is 2 + 2?"
- Three answer choices using radio buttons
- A submit button that checks if the selected answer is correct
- Feedback displayed based on the user's selection

### Files Included

- `index.html` – Contains the structure of the quiz
- `styles.css` – Styles the layout of the quiz
- `quiz.js` – Adds interactivity to the quiz (answer checking and feedback)

### How It Works

1. The user selects one of the given answers.
2. Clicking the **Submit Answer** button runs the `checkAnswer()` function.
3. The function checks if the selected answer is correct (correct answer: "4").
4. It displays a message:
   - "Correct! Well done." if the answer is right
   - "That's incorrect. Try again!" if the answer is wrong

---

## ➕ Project 2: Simple JavaScript Calculator

This is a web-based calculator built using **HTML**, **CSS**, and **JavaScript**.  
It allows users to perform basic arithmetic operations: **Addition**, **Subtraction**, **Multiplication**, and **Division**.

### Features

- Input two numbers
- Click buttons to perform calculations
- Displays result immediately on the page
- Handles empty inputs as `0`
- Prevents division by zero

### Files Included

- `calculator.html` – Calculator structure
- `calculator.css` – Basic styling
- `calculator.js` – Logic and event handling

### How It Works

1. User types numbers into two input fields.
2. When an operation button is clicked:
   - The input values are retrieved and converted using `parseFloat(...)`.
   - The corresponding arithmetic function (`add()`, `subtract()`, etc.) is called.
   - The result is displayed in the `#calculation-result` span.

---

##  Learning Goals

- Practice DOM manipulation
- Use event listeners and functions in JavaScript
- Handle form inputs and perform calculations
- Improve structuring projects with multiple HTML/CSS/JS files

---

*This repository combines multiple beginner-friendly JavaScript projects for practice and learning.*
