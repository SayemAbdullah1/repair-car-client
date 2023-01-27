import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';


export const authContext = createContext()
const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const login = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = ()=>{
        return signInWithPopup(auth, provider)
    }

    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser);
            setUser(currentUser)
        })
        return ()=>{
            return unsubscribe()
        }
    } ,[])


    const authInfo = {
        user,
        loading,
        createUser,
        login,
        googleLogin
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;