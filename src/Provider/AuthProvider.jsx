import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, 
    onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, 
    updateProfile} from "firebase/auth";
import { useState } from "react";
import auth from "../Firebase/Firebase.config"
import PropTypes from 'prop-types';
import { useEffect } from "react";


export const AuthContext = createContext(null)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()
githubProvider.addScope("read:user");
githubProvider.addScope("user:email");



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)
    const [reload, setReload] = useState(false)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const updateUserProfile = (name, photoURL) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photoURL
        })
    }

    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    const googleLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    const githubLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        }) 
        return ()=> unSubscribe()
    }, [reload])

    const authInfo = {user, createUser,
     loading, logInUser, logOutUser, googleLogin,
     githubLogin, updateUserProfile, setReload, setUser,}
    return (
        
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes ={
    children: PropTypes.node.isRequired,
}

export default AuthProvider;