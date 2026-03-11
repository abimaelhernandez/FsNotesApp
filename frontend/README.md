# Frontend for NotesFSProject

This is the frontend of the NotesFSProject, a modern web application for managing notes. The frontend is built using React, Vite, and TailwindCSS, providing a fast and responsive user experience.

## Features

- **React**: Utilizes React for building dynamic and interactive user interfaces.
- **React Router**: Implements client-side routing for seamless navigation.
- **TailwindCSS**: Provides utility-first CSS for rapid UI development.
- **DaisyUI**: Enhances TailwindCSS with pre-designed components.
- **Axios**: Handles HTTP requests to the backend API.
- **Hot Toast Notifications**: Displays user-friendly notifications.

## Project Structure

The project is organized as follows:

```
frontend/
├── public/                # Static assets
├── src/                   # Source code
│   ├── assets/            # Images and other assets
│   ├── components/        # Reusable UI components
│   │   ├── NavBar.jsx     # Navigation bar
│   │   ├── NoteCard.jsx   # Card for displaying a note
│   │   ├── NotesNotFound.jsx # Placeholder for no notes
│   ├── lib/               # Utility libraries
│   │   ├── axios.js       # Axios instance for API calls
│   │   ├── utils.js       # Helper functions
│   ├── pages/             # Application pages
│   │   ├── Create.jsx     # Page for creating a new note
│   │   ├── Home.jsx       # Homepage displaying notes
│   │   ├── NoteDetail.jsx # Page for viewing note details
│   ├── App.jsx            # Main application component
│   ├── main.jsx           # Entry point for the app
├── index.html             # HTML template
├── tailwind.config.js     # TailwindCSS configuration
├── vite.config.js         # Vite configuration
├── package.json           # Project metadata and dependencies
```

## Getting Started

### Prerequisites

Ensure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the `frontend` directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

To start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:5173`.

### Build

To build the application for production:
```bash
npm run build
```

The build files will be generated in the `dist` directory.

### Preview

To preview the production build:
```bash
npm run preview
```

## Linting

To lint the codebase:
```bash
npm run lint
```

## Dependencies

### Main Dependencies
- **React**: Library for building user interfaces.
- **React Router**: For routing.
- **Axios**: For making HTTP requests.
- **TailwindCSS**: For styling.
- **DaisyUI**: For pre-designed components.

### Development Dependencies
- **Vite**: Build tool for modern web projects.
- **ESLint**: For linting JavaScript and JSX.
- **PostCSS**: For processing CSS.
