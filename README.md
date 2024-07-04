# AI Reviewer

> This project has transitioned to [MATE: AI Code Review](https://mate.apalevich.com). Development on the current project has been discontinued.

AI Reviewer is a web application designed to review code using AI. This project contains both a Vue.js frontend and an Express.js backend.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/apalevich/AI_reviewer.git
cd AI_reviewer
```

2. Install dependencies:
```bash
npm install
```

## Usage

### Running the Frontend

To start the Vue.js frontend, run:
```bash
npm run start:frontend
```

This will start the development server and you can access the application at `http://localhost:8080`.

### Running the Backend

To start the Express.js backend, run:
```bash
npm run start:backend
```

The backend server will run on `http://localhost:8000`.


## Scripts

The following scripts are available in the `package.json` file:
- `test`: Runs the test suite.
- `start:frontend`: Starts the frontend development server.
- `start:backend`: Starts the backend server.
- `build`: Builds the frontend for production.
- `lint`: Lints the codebase using ESLint.
- `format`: Formats the codebase using Prettier.


## Technical Details

### Frontend

The frontend is built using Vue.js and Vuetify for UI components. It uses Webpack for module bundling and development server.

Key files:
- `src/components/OverviewPage.vue`: Main component for displaying repository content and file details.
- `webpack.config.js`: Webpack configuration for the frontend.

### Backend

The backend is built using Express.js and provides several API endpoints to interact with GitHub repositories.

Key files:
- `server.js`: Main server file that defines API endpoints for fetching repository and file data from GitHub.


## Usability

### Frontend

- **Navigation**: The application features a navigation drawer that lists repository contents. Users can click on files to view their content.
- **Loading Indicators**: Progress indicators are shown while data is being fetched from the backend.
- **Responsive Design**: The application is designed to be responsive and works well on both desktop and mobile devices.

### Backend

- **API Endpoints**:
  - `/getrepo/:owner/:repo`: Fetches repository details.
  - `/getcontent/:owner/:repo`: Fetches the contents of a repository.
  - `/getfile/:owner/:repo/:file`: Fetches the content of a specific file in a repository.
