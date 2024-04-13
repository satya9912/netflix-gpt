import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTopRatedMovies} from "../utils/movieSlice";

const useTopRatedMovies = () => {

  const topRatedMovies = useSelector(store => store.movies.topRatedMovies)

    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?page=1', API_OPTIONS);
        const data = await response.json();
        dispatch(addTopRatedMovies(data.results));
      }
    
      useEffect(() => {
        !topRatedMovies && getTopRatedMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
}

export default useTopRatedMovies;