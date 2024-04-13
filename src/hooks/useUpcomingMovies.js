import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addUpcomingMovies} from "../utils/movieSlice";

const useUpcomingMovies = () => {

  const upcomingMovies = useSelector(store => store.movies.upcomingMovies)

    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/upcoming?page=1', API_OPTIONS);
        const data = await response.json();
        dispatch(addUpcomingMovies(data.results));
      }
    
      useEffect(() => {
        !upcomingMovies && getUpcomingMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
}

export default useUpcomingMovies;