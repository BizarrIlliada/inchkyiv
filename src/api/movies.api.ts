import type { IMovie } from '@/types';
import axios from 'axios';

interface MoviesResult {
  page: number;
  results: IMovie[];
  total_pages: number;
  total_results: number;
}

export function useMoviesApi() {
  function loadMovies(page: number): Promise<MoviesResult> {
    return axios.get('https://api.themoviedb.org/3/discover/movie', {
      params: {
        api_key: import.meta.env.VITE_RESOURCE_API_KEY,
        language: 'en-us',
        sort_by: 'popularity.desc',
        include_adult: false,
        include_video: false,
        page,
      }
    }).then((res) => res.data);
  }

  return {
    loadMovies,
  }
}
