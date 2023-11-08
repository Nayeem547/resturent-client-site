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
        const userEmail = currentUser?.email || user?.email;
        const loggeduser = { email: userEmail};
        setUser(currentUser);
        setLoading(false);

        if(currentUser){
            
            axios.post('https://resturent-manage-server.vercel.app/jwt', loggeduser, {
            withCredentials: true     })
            .then(res => {
                console.log('token response', res.data);
            })
        }
        else{
            axios.post('https://resturent-manage-server.vercel.app/logout', loggeduser, {
                withCredentials: true
            })
            .then(res => {
                console.log(res.data);
            })
        }
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