# Frontend Setup Guide

## Prerequisites
Make sure you have the following installed before proceeding:
- [Node.js](https://nodejs.org/) (Recommended: Latest LTS version)
- [npm](https://www.npmjs.com/) (Comes with Node.js) or [yarn](https://yarnpkg.com/)

## Getting Started
### 1. Clone the Repository
```sh
git clone <repository-url>
cd frontend
```

### 2. Install Dependencies
Using npm:
```sh
npm install
```
Or using yarn:
```sh
yarn install
```

### 3. Configure Environment Variables
Create a `.env` file in the root of your frontend project and add the following variables:
```
REACT_APP_API_URL=http://localhost:5000/api
```

### 4. Start the Development Server
```sh
npm start
```
Or using yarn:
```sh
yarn start
```
This will start the development server at `http://localhost:3000/`.

## Project Structure
```
frontend/
│-- public/
│-- src/
│   │-- components/
│   │-- pages/
│   │-- styles/
│   │-- App.js
│   │-- index.js
│-- .env
│-- package.json
│-- README.md
```

## API Configuration
The frontend makes API requests to the backend server. Ensure the backend is running on `http://localhost:5000/` or update the `.env` file with the correct API URL.

## Building for Production
To create an optimized build for production:
```sh
npm run build
```
This will generate a `build/` folder containing the production-ready files.
