# Simple Social Media Frontend

A React + Vite frontend for a small social media app where users can create posts with an image and caption, then view them in a feed.

## Features

- View all posts in a simple feed
- Upload a new image with a caption
- Navigate between the feed and create-post page
- Connect to a backend API with Axios

## Tech Stack

- React
- Vite
- React Router
- Axios
- ESLint

## Project Structure

```text
Frontend/
|-- public/
|-- src/
|   |-- assets/
|   |-- pages/
|   |   |-- CreatePost.jsx
|   |   `-- Feed.jsx
|   |-- App.jsx
|   `-- main.jsx
|-- index.html
|-- package.json
`-- README.md
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Configure environment variables

Create a `.env` file in the `Frontend` folder and add:

```env
VITE_BACKEND_API_URL=http://localhost:5000
```

If you are using the deployed backend instead of a local one, replace the value with your production API URL.

### 3. Start the development server

```bash
npm run dev
```

The app will usually be available at `http://localhost:5173`.

## Available Scripts

- `npm run dev` starts the Vite development server
- `npm run build` creates a production build
- `npm run preview` previews the production build locally
- `npm run lint` runs ESLint

## App Pages

- `/` shows the post feed
- `/create-post` opens the form to create a new post

## API Usage

The frontend expects the backend to provide:

- `GET /posts` to fetch all posts
- `POST /create-post` to upload a new post

## Deployment

To create a production build:

```bash
npm run build
```

The output is generated in the `dist/` folder.

## Notes

- The backend API base URL is read from `VITE_BACKEND_API_URL`
- Image upload is handled with `FormData`
- If the backend is unavailable, the feed and create-post page show error messages
