# InterviewIQ.AI

A modern MERN stack AI Interview application that helps users practice interviews using AI.

## Features
- **AI Smart Mock Interviews:** Utilize AI to conduct interactive interview sessions.
- **Credit System:** Built-in credit management for different interview plans.
- **Payment Integration:** Secure checkout and credit purchase using Razorpay.
- **User Authentication:** Sign up and login easily with Google using Firebase Authentication.

## Tech Stack
- **Frontend:** React JS, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **AI Integration:** OpenRouter API
- **Authentication:** Firebase Auth
- **Payment Gateway:** Razorpay integration

## Getting Started
To get the project running locally on your machine, follow these steps:

### 1. Requirements
Make sure you have Node.js and npm installed.

### 2. Client Setup
1. Open terminal and go to the `client` folder.
2. Install dependencies using `npm install`.
3. Put your Firebase and Razorpay keys inside the `client/.env` file.
   ```
   VITE_FIREBASE_APIKEY=your_firebase_key
   VITE_RAZORPAY_KEY_ID=your_razorpay_key
   ```
4. Run the frontend server using `npm run dev`.

### 3. Server Setup
1. Open a new terminal and go to the `server` folder.
2. Install dependencies using `npm install`.
3. Set your environment variables in the `server/.env` file.
   ```
   PORT=8000
   MONGODB_URL=your_mongodb_url
   JWT_SECRET=your_jwt_secret
   OPENROUTER_API_KEY=your_openrouter_api_key
   RAZORPAY_KEY_ID=your_razorpay_key_id
   RAZORPAY_KEY_SECRET=your_razorpay_key_secret
   ```
4. Run the backend server using `npm run dev`.
