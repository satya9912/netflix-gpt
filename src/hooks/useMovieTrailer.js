import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();

    const trailerVideo = useSelector(store => store.movies.trailerVideo)
    
    const getMovieTrailer = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`, API_OPTIONS);
        const json = await data.json();
        const filteredData = json.results.filter( (item) =>item.type === "Trailer");
        const trailer = filteredData.length ? filteredData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    }

    useEffect(() => {
        !trailerVideo && getMovieTrailer();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
}

export default useMovieTrailer;