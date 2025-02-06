# AI-Powered Code Reviewer

## Project Overview

The AI-Powered Code Reviewer is a web application designed to assist developers in reviewing and improving their code using AI-driven analysis. This project aims to streamline code quality assessment by detecting potential bugs, suggesting best practices, and enhancing readability and maintainability. The frontend is built with React, while the backend is powered by Node.js with a PostgreSQL database hosted on Heroku. The application integrates OpenAI's Codex API to provide intelligent feedback on submitted code snippets.

This project is part of my portfolio to demonstrate my ability to develop AI-enhanced applications that improve the software development workflow.

[AI-Powered Code Reviewer](https://ai-powered-code-reviewer.herokuapp.com/)

## Screenshots

### Home Page
![Home Page](https://github.com/SiyandaMaykiso/AI-Powered-Code-Reviewer/blob/main/screenshots/Home_Page_AI_Powered_Code_Reviewer.png)

### Code Review Display
![Code Review Display](https://github.com/SiyandaMaykiso/AI-Powered-Code-Reviewer/blob/main/screenshots/Code_Review_Display_AI_Powered_Code_Reviewer.png)

### Code Review History
![Code Review History](https://github.com/SiyandaMaykiso/AI-Powered-Code-Reviewer/blob/main/screenshots/Code_Review_History_AI_Powered_Code_Reviewer.png)

## Features

### AI-Powered Code Analysis

- The application leverages OpenAI's Codex API to review and provide intelligent feedback on code snippets.

### Bug Detection & Best Practices

- Identifies potential errors, security risks, and suggests improvements to enhance code quality.

### User Authentication

- JWT (JSON Web Token) authentication ensures secure access, allowing users to save and view their past reviews.

### Persistent Code Review History

- Users' reviewed code and AI suggestions are stored in a Heroku PostgreSQL database, enabling them to revisit past feedback.

### Responsive User Interface

- Built with React, the UI is optimized for both desktop and mobile, providing a seamless experience across devices.

### Scalable Cloud Hosting

- Hosted on Heroku, ensuring cloud scalability for reliable performance and accessibility.

## How to Use the AI-Powered Code Reviewer

### 1. Visit the Application URL

- Access the application in your web browser at: [AI-Powered Code Reviewer](https://ai-powered-code-reviewer.herokuapp.com/).

### 2. Register or Log In

- **New Users**: Click "Register" to create an account. Complete the form with your username and password, then click "Register" to begin.
- **Returning Users**: Click "Login" and enter your credentials to access your saved code reviews.

### 3. Submit Your Code for Review

- Paste your code snippet into the input box or upload a file.
- Click "Review Code" to initiate AI analysis.

### 4. View AI Feedback

- The app will display AI-generated feedback, highlighting improvements, potential issues, and suggestions.

### 5. Review Past Code Submissions

- Access previously analyzed code snippets from your account history.

### 6. Log Out

- To end your session, click "Logout", which securely logs you out and clears your authentication token from local storage.