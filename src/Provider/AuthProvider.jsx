import { createContext } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import auth from "../Firebase/Firebase.config"


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const authInfo = {createUser, loading}
    return (
        
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;