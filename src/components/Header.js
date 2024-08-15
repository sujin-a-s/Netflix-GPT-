import React from 'react'
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase'; 
import { signOut } from 'firebase/auth'; 
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constant';
import { clearCard, toggleGptsearchView } from '../utils/gptslice';
import { SUPPORTED_LANGUAGES } from '../utils/constant';
import { changeLanguage } from '../utils/configslice';


const Header = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const user = useSelector(store => store.user);
  const showGptSearch = useSelector(store => store.gpt.showGptSearch)

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
        if (user) {
            const {uid, email, displayName,photoURL} = user;
            dispatch(
                addUser({
                    uid: uid,
                    email: email,
                    displayName: displayName,
                    photoURL:photoURL
            }));
            navigate("/browse")
            
        } else {
            dispatch(removeUser());
            navigate("/")

            
        }
      });

      return () => unsubscribe();
},[])
  



  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/Error")
      });
  }

  const handleGptSearchClick = () => {
    dispatch(toggleGptsearchView())
    dispatch(clearCard())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className='absolute w-screen py-2 px-8 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between ' >
        <img
            className='w-44 hover:scale-110 mx-auto md:mx-0'
            src={LOGO}
            alt="logo"
        />

        
        {user && (
          <div className='flex justify-between'>

            { showGptSearch && <select onChange={handleLanguageChange} className=' bg-gray-900 px-4 mx-4 my-4 hover:scale-105 hover:bg-gray-700 text-white'>
              {
                SUPPORTED_LANGUAGES.map(
                (lang) => (<option className='' key ={lang.identifier} value={lang.identifier}>{lang.name}</option>)
                )
              }

            </select>}
  
            <button onClick={handleGptSearchClick} className="py-2 cursor-pointer  hover:bg-red-600 px-4 mx-4 my-4 hover:scale-105 rounded-sm bg-red-700 border-spacing-10 text-white"> {showGptSearch? "Home Page" : "GPT Search"}</button>

            <img
                className='hidden md:block h-10 my-4 hover:scale-110'
                src={user?.photoURL}
                alt="usericon"
                />

            <button onClick={handleSignOut} className='py-2 cursor-pointer px-4 mx-4 my-4 hover:bg-red-600  rounded-sm  hover:bg-gray-600 hover:scale-105 bg-red-700 text-white'>Sign Out</button>
          </div>)
        }
    </div>
  )
}

export default Header