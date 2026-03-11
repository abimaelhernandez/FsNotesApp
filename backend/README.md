# Backend for NotesFSProject

This is the backend of the NotesFSProject, a RESTful API built with Node.js and Express. It provides endpoints for managing notes and handles data persistence using a database.

## Features

- **Express.js**: Lightweight and fast web framework for building APIs.
- **Database Integration**: Connects to a database for storing and retrieving notes.
- **Rate Limiting**: Protects the API from abuse by limiting the number of requests.
- **Modular Structure**: Organized codebase with controllers, routes, and middleware.
- **Environment Configuration**: Uses environment variables for configuration.

## Project Structure

The project is organized as follows:

```
backend/
├── src/                   # Source code
│   ├── config/            # Configuration files
│   │   ├── db.js          # Database connection setup
│   │   ├── upstash.js     # Upstash configuration (if applicable)
│   ├── controllers/       # API controllers
│   │   ├── notesController.js # Handles note-related logic
│   ├── middleware/        # Custom middleware
│   │   ├── rateLimiter.js # Rate limiting middleware
│   ├── models/            # Database models
│   │   ├── Note.js        # Note schema/model
│   ├── routes/            # API routes
│   │   ├── notesRoutes.js # Routes for note-related endpoints
│   ├── server.js          # Entry point for the backend server
├── package.json           # Project metadata and dependencies
```

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the `backend` directory:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the `backend` directory and configure the following variables:
```
PORT=5000
DATABASE_URL=<your-database-url>
UPSTASH_REDIS_URL=<your-upstash-redis-url>
```

### Development

To start the development server:
```bash
npm run dev
```

The server will be available at `http://localhost:5000`.

### Production

To start the server in production mode:
```bash
npm start
```

## API Endpoints

### Notes
- `GET /api/notes`: Retrieve all notes.
- `POST /api/notes`: Create a new note.
- `GET /api/notes/:id`: Retrieve a specific note by ID.
- `PUT /api/notes/:id`: Update a note by ID.
- `DELETE /api/notes/:id`: Delete a note by ID.

## Dependencies

### Main Dependencies
- **Express**: Web framework for building APIs.
- **Upstash**: Redis database for caching (if applicable).

### Development Dependencies
- **Nodemon**: Automatically restarts the server during development.