import { createContext } from "react";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, 
    onAuthStateChanged, signOut  } from "firebase/auth";
import { useState } from "react";
import auth from "../Firebase/Firebase.config"
import PropTypes from 'prop-types';
import { useEffect } from "react";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=> {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        }) 
        return ()=> unSubscribe()
    }, [])

    const authInfo = {user, createUser,
     loading, logInUser, logOutUser}
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