import { createContext, useEffect, useState } from "react";
import auth from "../Firebase/firabase.config";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {

  const ggProvider =new GoogleAuthProvider()
  const [ user,setUser ] = useState(null);
  const[loading,setLoading] =useState(true)
  const registration = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const login = (email, pass) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const googleLogin =()=>{
    setLoading(true)
    return signInWithPopup(auth,ggProvider)
  }
  const logOut= () =>{
    setLoading(true)
    return signOut(auth)
  }

  useEffect(()=>{
   const unSubscribe =  onAuthStateChanged(auth,inUser =>{
        setUser(inUser);
        setLoading(false)
     })
     return ()=>{
          unSubscribe()
     }
  },[])

  const values = {
    user,
    loading,
    registration,
    login,
    logOut,
    googleLogin
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
