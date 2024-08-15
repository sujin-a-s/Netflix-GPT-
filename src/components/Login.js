import React, { useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate' 
import { useRef } from 'react';
import { createUserWithEmailAndPassword , signInWithEmailAndPassword,updateProfile} from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
import { NETFLIX_BACKGROUND, USER_AVATAR } from '../utils/constant';

const Login = () => {

    const [isSigninForm,setIsSigninForm] = useState(true)
    const[errorMessage,setErrorMessage] = useState(null);


    const name = useRef(null);
    const email = useRef(null);
    const password = useRef(null);

    const toggleSigninForm = () => {
        setIsSigninForm(!isSigninForm)
    }
 
    const dispatch = useDispatch();

    const handleButtonClick = () =>{
        //validate the form data
        //checkValidData(email,password)
        // console.log(email.current.value);
        // console.log(password.current.value);

        const message = checkValidData(name.current?.value,email.current.value,password.current.value);
        // console.log(message);
        setErrorMessage(message);

        if(message) return;

        if(!isSigninForm){
            //sign up form logic
            createUserWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;

                    updateProfile(user, {
                        displayName: name.current.value,
                        photoURL: USER_AVATAR
                      })
                        .then(() => {
                            const {uid, email, displayName, photoURL} = auth.currentUser;
                            dispatch(
                                addUser({
                                    uid: uid,
                                    email: email,
                                    displayName: displayName,
                                    photoURL: photoURL,
                            }));
                            
                        })
                        .catch((error) => {
                            setErrorMessage(error.message);
                      });

                    // console.log(user);
                    
           
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+" - "+errorMessage)
                    // ..
                });
        }
        else{
            //sign in form logic
            // console.log("Signing in...");
            signInWithEmailAndPassword(
                auth,
                email.current.value,
                password.current.value
            )
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // console.log(user)
                    
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode+" - "+errorMessage);
                });
        }

    }


  return (

    <div>
        <Header/>
        
        <div className='absolute ' >
            <img
                src={NETFLIX_BACKGROUND}
                alt="backgroundimage"
                className=''
            />
        </div>


        <form onSubmit={(e)=>e.preventDefault()} className='w-1/2 md:w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>

            <h1 className='font-bold text-2xl py-4'>
                {isSigninForm ? "Sign-In":"Sign-Up"}
            </h1>

            {!isSigninForm && <input 
                ref={name}
                type="text" 
                placeholder='Name' 
                className='p-4 my-4 w-full bg-slate-700'>
            </input>}

            <input 
                ref={email}
                type="email" 
                placeholder='Email Address' 
                className='p-4 my-4 w-full bg-slate-700'>
            </input>

            <input 
                ref={password}
                type="password" 
                placeholder='Password' 
                className='p-4 my-4  w-full bg-slate-700'>
            </input>

            <p className='text-red-600 font-bold text-lg'>{errorMessage}</p>

            <button 
                className='p-4 my-6 w-full bg-red-600' onClick={handleButtonClick}>
                {isSigninForm ? "Sign-In":"Sign-Up"}
            </button>

            <p className='my-4 mx-11 cursor-pointer' 
                onClick={toggleSigninForm}>{isSigninForm ? "New to Netflix? Sign Up Now":"Already registered. Sign in now"}
            </p>
            
        </form>
    </div>
  )
}

export default Login