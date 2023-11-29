import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../firebase/firebase.config";
import useAxiosPublic from "../Hooks/useAxiosPublic";


export const AuthContext = createContext(null)
const auth = getAuth(app)
const AuthProvider = ({children}) => {
    
    // email login and google login states
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const googleProvider = new GoogleAuthProvider()
    const axiosPublic = useAxiosPublic()

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
    // update user profile
    const updateUserProfile = (name,photo) =>{
        return updateProfile(auth.currentUser,{
            displayName:name,photoURL:photo
        })
    }
    // keep login user 
    useEffect(() =>{
       const unsubscribe= onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
            setUser(currentUser)
            if(currentUser){
                // get token and store client side
                const userInfo = {email:currentUser.email}
                axiosPublic.post('/jwt',userInfo)
                .then(res =>{
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                        setLoading(false)
                    }
                })
            }
            else{
                // remove token
                localStorage.removeItem('access-token');
                setLoading(false)
            }
            
        });
        return() =>{
           return unsubscribe();
        }
    },[axiosPublic])

    const authInfo = {
        user,
        loading,
        createUser,
        logIn,
        googleLogin,
        logOut,
        updateUserProfile
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;