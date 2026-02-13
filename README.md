# Movie Explorer Web App

A responsive web application that allows users to search for movies and view up-to-date information retrieved from The Movie Database (TMDB) API. Users can browse movies, view ratings and posters, and like their favorite titles.

---

## Features

- **Search Movies** — Query movies dynamically using the TMDB API  
- **Live Movie Data** — Displays:
  - Movie poster/banner
  - Title
  - Star rating (average vote)
- **Like Functionality** — Users can like movies
- **Real-Time Fetching** — Data retrieved from TMDB’s up-to-date movie database
- **Responsive UI** — Works across desktop and mobile devices

---

## Tech Stack

- **Frontend:** HTML, CSS, JavaScript  
- **API:** The Movie Database (TMDB) API  
- **Networking:** Fetch API for asynchronous HTTP requests  
- **Environment Variables:** Secure API key management  

---

## How It Works

1. User enters a movie name into the search bar.
2. The app sends a GET request to the TMDB API endpoint.
3. The API returns movie metadata including:
   - Poster image
   - Title
   - Average rating
4. The app dynamically renders results onto the page.
5. Users can click the like button to mark movies they enjoy.

---

## API Configuration

This project requires a TMDB API key.

### Get an API Key

1. Create an account at https://www.themoviedb.org/
2. Navigate to your account settings.
3. Generate an API key (v4 Bearer Token recommended).

### Add Environment Variable

If using Vite:

```bash
VITE_TMDB_API_KEY=your_api_key_here
```

Then access it in your code:

```javascript
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
```

---

## Project Structure

```
movie-app/
│
├── public/
├── src/
│   ├── components/
│   ├── styles/
│   ├── main.js
│
├── .env
├── package.json
└── README.md
```

---

## Installation & Setup

### Clone the repository

```bash
git clone https://github.com/yourusername/movie-app.git
cd movie-app
```

### Install dependencies

```bash
npm install
```

### Start development server

```bash
npm run dev
```

The app will run locally at:

```
http://localhost:5173
```

---

## 📡 Example API Request

```javascript
const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc`;

const response = await fetch(endpoint, {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${API_KEY}`
  }
});
```

---

## Future Improvements

- Movie detail page with synopsis and release date  
- Persistent liked movies (LocalStorage or database)  
- Filter by genre  
- Sort by rating or popularity  
- User authentication  

## Disclaimer

This product uses the TMDB API but is not endorsed or certified by TMDB.

---

## Author

Caden Wang  
GitHub: https://github.com/cwanggang  
