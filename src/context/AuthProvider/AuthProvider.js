import React, { createContext, useEffect, useState } from 'react';
import app from '../../firebase/firebase.config';
import {getAuth, createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth';


export const authContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setloading] = useState(true)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
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
        createUser
    }
    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;