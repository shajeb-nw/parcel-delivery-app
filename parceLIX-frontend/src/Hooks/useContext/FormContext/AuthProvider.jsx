import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../../../Fairbase/Fairbase';


const provider = new GoogleAuthProvider();
const AuthProvider = ({children}) => {
  const [users,setUsers]=useState("")
  const [loading,setLoading]=useState(true)
    const signupUser=(email,password)=>{
       return createUserWithEmailAndPassword(auth,email,password)
    }
    const signinUser=(email,password)=>{
       return signInWithEmailAndPassword(auth,email,password)
    }
    const googleSignin=()=>{
      return signInWithPopup(auth ,provider)
    }
    const signout=()=>{
       return signOut(auth)
    }
    useEffect(()=>{
       let unsubscribe=onAuthStateChanged(auth,(currentUser)=>{
          setUsers(currentUser)
          setLoading(false)
       })
       return ()=>{
         unsubscribe()
       }
    },[])
    const info={
      signupUser,
      signinUser,
      signout,
      users,
      loading,
      googleSignin
    }
    return (
      <AuthContext.Provider value={info}>
         {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;