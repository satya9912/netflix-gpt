import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () => {

  const nowPlayingMovies  = useSelector(store => store.movies.nowPlayingMovies)


    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const response = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const data = await response.json();
        dispatch(addNowPlayingMovies(data.results));
      }
    
      useEffect(() => {
        !nowPlayingMovies && getNowPlayingMovies();
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);
}

export default useNowPlayingMovies;