#  Movie Database Application  

A responsive web application built with React and Tailwind CSS that allows users to search for movies, view details, and explore key information using the OMDB API. This project demonstrates integration with external APIs,  responsive design, and deployment using **Netlify/Vercel**.

---

## Features  

### Core Features:
- **Search Functionality:**  
  Search for movies using the search bar and get relevant results.  
- **Movie List View:**  
  Displays key information about each movie, including:
  - Poster  
  - Title  
  - Release Year  
- **Detailed Movie View:**  
  On clicking a movie, view more details including:
  - Plot summary  
  - Cast and roles  
  - Ratings from different sources (e.g., IMDB, Rotten Tomatoes)  
  - Genres  

### Additional Features:
- **Responsive Design:**  
  Optimized layout for mobile, tablet, and desktop using Tailwind CSS.  
- Error Handling: 
  User-friendly messages for invalid search queries or network errors.  

---

## Tech Stack

- **Frontend:** React, JavaScript, Tailwind CSS  
- **API:** [OMDB API](https://www.omdbapi.com/)  
- **Deployment:** Vercel  
- **State Management:** React Hooks (useState, useEffect)  
- **HTTP Client:** Axios or Fetch API  

---

## Project Setup  

### Prerequisites  
- Node.js and npm installed ([Get Node.js](https://nodejs.org/))  
- API Key from [OMDB](https://www.omdbapi.com/apikey.aspx)

---

### Installation and Setup  

1. **Clone the repository:**  
   ```bash
   git clone https://github.com/your-username/movie-database-app.git
   cd movie-database-app
2. **Install Dependencies**
    npm install
3. **Configure the API**
   create a .env file in the root libary as follows 
   ``bash
   REACT_APP_OMDB_API_KEY=your_api_key_here
   Replace your_api_key_here with your actual OMDB API key.
4. **Run the development server**
``bash 
npm run dev

### Project Structure 
movie-database-app/
│
├── src/
│   ├── components/            # Reusable UI components (SearchBar, MovieCard, etc.)
│   ├── pages/                 # MovieList and MovieDetails views
│   ├── App.jsx                # Main application component
│   ├── index.css              # Tailwind CSS setup
│   └── main.jsx               # Application entry point
│
├── public/                    # Static assets
│   └── index.html             # HTML template
│
├── .env                       # API Key configuration
├── package.json               # Project dependencies and scripts
├── tailwind.config.js         # Tailwind CSS configuration
└── README.md                  # Project documentation

### API Integration 
 **OMDB API Documentation**: https://www.omdbapi.com
 ``bash 
   http://www.omdbapi.com/?i=tt3896198&apikey=4fdd443f
 **API endpoints Used**:
  ?s=: Search for movies by title
  ?i=: Get details of a movie by its ID
### Deployment:
1.Build the application: 
  bash`` 
  npm run build
2.Deploy to Netlify 
  Connect to Github repository and deploy 
3.Access the deployed App
### Usage :
1.Search for Movies:
-Enter a movie name in the search bar.
-The app fetches matching results from the OMDB API.
-If no results are found, a user-friendly message is displayed.

2.View Movie Details:
-Click on any movie to view detailed information about it.
-The app fetches extended information like cast, genres, and plot.

### Error Handling
**Invalid Search Query**: Displays "No movies found" if no matches are available.
**Network Errors**: Alerts the user with an error message if the API request fails.

### Stretch Goals 
**Favorites List**:
Allow users to add movies to their personal favorites stored in localStorage.
**Pagination**:
Implement pagination to handle large search results efficiently.
**Sorting and filtering**:
Add sorting (by release date or rating) and filtering by genre
**Movie Trailers**:
Embed YouTube trailers in the movie details view.
**Theme Customization**:
Add dark mode functionality to enhance the user experience
**Internationaltion**:
Support multiple languages for movie details.

### Tools and Libraries
**React**: