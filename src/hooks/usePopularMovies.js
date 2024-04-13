import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addPopularMovies} from "../utils/movieSlice";

const usePopularMovies = () => {

  const popularMovies  = useSelector(store => store.movies.popularMovies )

    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/popular?page=1', API_OPTIONS);
        const data = await response.json();
        dispatch(addPopularMovies(data.results));
      }
    
      useEffect(() => {
        !popularMovies && getPopularMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
}

export default usePopularMovies;