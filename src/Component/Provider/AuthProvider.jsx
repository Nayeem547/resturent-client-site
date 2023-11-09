import React, { createContext, useEffect, useState } from 'react';
import app from '../../Firebase/firebase.config';

import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import axios from 'axios';
export const auth = getAuth(app);

export const AuthContext = createContext(null);



const AuthProvider = ({children}) => {
    
    const [user, setUser] = useState(null);

  const [loading, setLoading] = useState(true);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
};

const signIn = (email, password) =>{
    setLoading(true);
    
    return signInWithEmailAndPassword(auth, email, password);
   }

//    const handleUpdateProfile = (name, photo) => {
//     return updateProfile(auth.currentUser, {
//         displayName: name, photoURL: photo
//     })
//    }


   
const logOut = () => {
    setLoading(true);
    return signOut(auth);
}
useEffect(()=>{
    const unSbscribe = onAuthStateChanged(auth, currentUser =>{
        setUser(currentUser);
        setLoading(false);
    });
    return()=>{
        unSbscribe();
    }

  }, [])       

    const authInfo = {
        user,
        loading,
        createUser,
        logOut,
        signIn
        
        
     }

    return (
    
            <div>
            <AuthContext.Provider value={authInfo}>
                   {children}
            </AuthContext.Provider>
        </div>
        
    );
};

export default AuthProvider;