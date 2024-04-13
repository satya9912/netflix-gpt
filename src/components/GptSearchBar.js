import React, { useRef } from 'react'
import { API_OPTIONS, NETFLIX_BG_IMG} from '../utils/constants';
import { lang } from '../utils/languageConstants';
import { useSelector, useDispatch } from 'react-redux';
import openai from '../utils/openAI';
import { addGptMovieResults } from '../utils/gptSlice';

const GptSearchBar = () => {
  const dispatch = useDispatch();
  const langValue = useSelector(store => store.config.lang);
  const searchText = useRef();

 const getMoviesFromTMDB = async (movie) => {
  const data = await fetch(`https://api.themoviedb.org/3/search/movie?query=${movie}&include_adult=false&language=en-US&page=1`, API_OPTIONS);
  const json = await data.json();
  return json.results;
}

  const handleGptSearch = async () => {
    const gptQuery = "Act as a movie recommendation system and suggest some movies for ht query " + searchText.current.value + "only give me names of five movies, comma separated like the example result: Gadar, sholey, Don, isiq, koimaal";

    const gptResults = await openai.chat.completions.create({
      messages: [{ role: 'user', content: gptQuery }],
      model: 'gpt-3.5-turbo',
    });
    const gptMovies = gptResults?.choices[0]?.message.content.split(", ");
    const promiseArray = gptMovies.map( movie => getMoviesFromTMDB(movie));
    const tmdbMovieResult= await Promise.all(promiseArray);
    dispatch(addGptMovieResults({movieNames: gptMovies, moviesResult: tmdbMovieResult}));
  }

  return (
    <>
        <div className='fixed top-0 -z-20'>
            <img alt='background-img' className='h-screen w-screen object-cover' 
                 src={NETFLIX_BG_IMG}/>
        </div>

        <div className='mt-[30%] md:mt-28 flex justify-center'>
        <form className='bg-black text-xs md:text-base w-full md:w-1/2 p-4 flex justify-around'
              onSubmit={(e) => e.preventDefault()}>
            <input placeholder={lang[langValue].searchPlaceHolder} 
                   ref={searchText}
                   className='w-[80%] px-2 py-2 rounded-md'
            />
            <button className='w-[15%] px-4 py-2 bg-red-800 text-white rounded-lg'
                    onClick={handleGptSearch}
                    >
                {lang[langValue].search}
            </button>
        </form>
        </div>
    </>
  )
}

export default GptSearchBar;
