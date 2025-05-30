export const TMDB_CONFIG = {
  BASE_URL: 'https://api.themoviedb.org/3',
  apiKey: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`
  }
}

export const fetchMovies = async ({ query }: { query: string }) => {
  const endpoint = query 
  ? `${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`
  : `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;

  const response = await fetch(endpoint, {
    method: 'GET',
    headers: TMDB_CONFIG.headers
  })

  console.log(response)

  if (!response.ok) {
    // throw new Error('Failed to fetch movies.', response.statusText)
    throw new Error('Failed to fetch movies.')
  }

  const data = await response.json();

  console.log(data)

  return data.results;
}

export const fetchMovieDetails = () => {
  
}
