# NotesFSProject

NotesFSProject is a full-stack web application for managing notes. It consists of a **frontend** built with React and a **backend** powered by Node.js and Express. The application allows users to create, view, update, and delete notes, providing a seamless and responsive user experience.

## Features

### Frontend
- **React**: Dynamic and interactive user interfaces.
- **React Router**: Client-side routing for smooth navigation.
- **TailwindCSS**: Utility-first CSS framework for styling.
- **DaisyUI**: Pre-designed components for rapid development.
- **Axios**: Handles HTTP requests to the backend API.
- **Hot Toast Notifications**: Displays user-friendly notifications.

### Backend
- **Express.js**: RESTful API for managing notes.
- **MongoDB Integration**: Persistent storage for notes using MongoDB.
- **Rate Limiting**: Protects the API from abuse.
- **Modular Structure**: Organized codebase for scalability.
- **Environment Configuration**: Secure and flexible setup.

## Project Structure

```
NotesFSProject/
├── frontend/              # Frontend application
│   ├── src/               # Source code
│   ├── public/            # Static assets
│   ├── package.json       # Frontend dependencies
│   └── ...                # Other frontend files
├── backend/               # Backend application
│   ├── src/               # Source code
│   ├── package.json       # Backend dependencies
│   └── ...                # Other backend files
├── README.md              # Project overview (this file)
```

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (local or cloud instance)

### Installation

1. Navigate to the project directory:
   ```bash
   cd NotesFSProject
   ```

### Frontend Setup

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```

### Backend Setup

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file and configure environment variables:
   ```
   PORT=5000
   DATABASE_URL=<your-mongodb-connection-string>
   UPSTASH_REDIS_URL=<your-upstash-redis-url>
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

## Usage

1. Open the frontend in your browser at `http://localhost:5173`.
2. The backend API will be running at `http://localhost:5000`.
3. Use the application to create, view, update, and delete notes.
