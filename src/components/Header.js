import React, { useEffect } from 'react';
import { auth } from '../utils/firebase';
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utils/userSlice';
import { NETFLIX_LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleShowGptSearch } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';


const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName, photoURL} = user;
        dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL: photoURL}))
        navigate("/browse");

        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
},[]);

  const handleSignout = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
    });
  }

  return (
    <div className="absolute top-0 w-screen px-4 py-2 z-10 bg-black md:bg-opacity-80  flex flex-col md:flex-row justify-around md:justify-between">
        <div className='w-40 mx-auto md:mx-0 bg-gradient-to-b from-black'>
            <img alt='netflix-logo' src={NETFLIX_LOGO} />
        </div>

        {user && <div className='flex items-center mx-auto md:mx-0'>
          <>
            {showGptSearch && 
              <select onClick={handleLanguageChange} className='bg-black text-white font-semibold p-2 mr-2 border-1 px-4'>
              {SUPPORTED_LANGUAGES.map((lang)=> (
                <option className='my-1' value={lang.identifier}>{lang.name}</option>
              ))}
              </select>
            }

            <button className="bg-purple-800 py-2 px-4 text-white align-middle rounded-md font-semibold mr-2" 
              onClick={() => dispatch(toggleShowGptSearch())}
              >{showGptSearch ? "Homepage" : "GPT search"}
              </button>

            <img alt='user-icon' className='w-10 h-10 rounded-[50%] mr-2 invisible md:visible' src={user.photoURL} />

            <button onClick={handleSignout} className='text-white mr-2 rounded-lg px-4 py-2 bg-[#E50914] font-semibold'>sign out</button>
          </>
        </div>}
    </div>
  )
}

export default Header;