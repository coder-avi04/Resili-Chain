# ResiliChain - Project Run Guide

This guide will help you run both the Node.js backend and the React (Vite) frontend for the ResiliChain project.

## Prerequisites
1. **Node.js**: Ensure you have Node.js installed on your computer.
2. **MongoDB**: Ensure you have MongoDB installed and running locally, or update the `MONGODB_URI` in the `backend/.env` file to point to your MongoDB Atlas cluster.

---

## Step 1: Start the Backend Server

You need to run the backend API so your frontend can retrieve and send data.

1. Open a new terminal (or Command Prompt / PowerShell).
2. Navigate to the `backend` folder:
   ```bash
   cd "c:\Users\Inspiron\Downloads\Front-end codes\backend"
   ```
3. *(Optional but recommended)* Verify dependencies are installed:
   ```bash
   npm install
   ```
4. Start the backend server:
   ```bash
   node server.js
   ```
5. You should see two messages in your terminal indicating success:
   - `Server running on port 5000`
   - `MongoDB connected successfully`

---

## Step 2: Start the Frontend Application

You will need a **second terminal** to run the frontend simultaneously with the backend.

1. Open a **new, separate terminal**.
2. Navigate to the main project folder (the frontend root):
   ```bash
   cd "c:\Users\Inspiron\Downloads\Front-end codes"
   ```
3. Install the frontend dependencies (if you haven't already):
   ```bash
   npm install
   ```
4. Start the Vite development server:
   ```bash
   npm run dev
   ```
5. The terminal will provide a local link (usually `http://localhost:5173`). Ctrl+Click that link or paste it into your browser to view the application!

---

## Troubleshooting
- **Port already in use**: If port 5000 is taken, the backend might fail to start. You can change the `PORT` in `backend/.env` to something like `5001`.
- **Database Connection Error**: If MongoDB is not installed or running, the backend will still start but will log a connection error. The mock API routes will still work, but saving new data (like new Shipments) won't work until MongoDB is running.
