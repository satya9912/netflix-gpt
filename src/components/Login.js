import React, { useRef, useState } from 'react';
import Header from './Header';
import { checkValidate } from '../utils/checkValidate';
import { auth } from '../utils/firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { PROFILE_ICON } from '../utils/constants';
import { NETFLIX_BG_IMG } from '../utils/constants';

const Login = () => {

  const dispatch = useDispatch();
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, setErrMessage] = useState("");

  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

  const handleSignForm = () =>{
    setIsSignIn(!isSignIn);
  }

  const validateForm = (email, password, name) =>{
    const message = checkValidate(email, password, name);
    setErrMessage(message);
    if(message) return;

    if(!isSignIn){
      // logic for signup
      createUserWithEmailAndPassword(auth, email, password, name)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;

          updateProfile(user, {
            displayName: name, photoURL: PROFILE_ICON 
          }).then(() => {
            // Profile updated!
            // ...
            const {uid, email, displayName, photoURL} = auth.currentUser;
            dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL: photoURL}))
          }).catch((error) => {
            // An error occurred
            // ...
          });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " " + errorMessage);
          // ..
        });
    } else{
      //logic for signin
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in 
          const {uid, email, displayName, photoURL} = auth.currentUser;
          dispatch(addUser({uid:uid, email:email, displayName: displayName, photoURL: photoURL}))
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrMessage(errorCode + " " + errorMessage)
        });
    }
  }

  return (
    <>
    <Header />
    <div className='absolute top-0'>
        <img alt='background-img' className='h-screen w-screen object-cover' src={NETFLIX_BG_IMG}/>
    </div>

    <form className='relative bg-black bg-opacity-70 m-auto right-0 left-0 my-32 w:full md:w-3/12 h-full py-10 px-12 md:px-0'>

        <h1 className='text-white px-12 text-3xl font-semibold py-4'>
          {isSignIn ? "Sign in" : "Sign up"}
        </h1>

        {!isSignIn && <div className='px-12 my-2'>  
        <input className='w-full bg-black bg-opacity-30 px-3 py-4 border-2 mb-2 text-gray-100' type='text' ref={name} placeholder='Enter your Name' required/>
        </div>}

        <div className='px-12 my-2'> 
        <input type='email' ref={email} className='w-full bg-black bg-opacity-30 px-2 py-4 border-2 mb-2 text-gray-100' placeholder='Enter your email' required />
        </div>

        <div className='px-12 my-2'>  
        <input ref={password} className='w-full bg-black bg-opacity-30 px-2 py-4 border-2 mb-2 text-gray-100' type='password' placeholder='Password' required/>
        </div>

        <p className='text-red-700 ml-12 font-semibold text-base'>{errMessage}</p>

        <div className='px-12 my-2'>
        <button type='button' 
                onSubmit={(e) => e.preventDefault()} 
                onClick={() => validateForm(email.current.value, password.current.value, name.current ? name.current.value : null)} 
                className='bg-red-700 w-full px-2 py-2 text-white font-semibold text-lg mb-2 rounded-md'>{isSignIn?  "Sign in" : "Sign up"}
        </button>
        </div>

        <p className='text-white px-12 my-2 cursor-pointer pb-2' onClick={() => handleSignForm()}>
          {isSignIn ? "New to Netflix..! Sign up now" : "Already a Netflix user..? Sign in"}
        </p>

    </form>
    </>
  )
}

export default Login;