import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from "../firebase/firebase.config";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const auth = getAuth(app)
const AuthProvider = ({children}) => {

    // email login and google login states
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    // create user for google login
    const googleLogin = () =>{
       return signInWithPopup(auth, googleProvider)
    }
    // create user for email login
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // user login with email and password
    const logIn = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    // for logout
    const logOut = () =>{
        setLoading(true)
        return signOut(auth);
    }
    // keep login user 
    useEffect(() =>{
       const unsubscribe= onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser)
            setLoading(false)
        });
        return() =>{
           return unsubscribe();
        }
    },[])

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        googleLogin,
        logOut,
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;