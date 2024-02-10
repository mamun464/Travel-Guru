
import { PropTypes } from 'prop-types';
import { createContext, useEffect, useState } from 'react';
import auth from './firebase.config';
import { FacebookAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';

export const AuthContext = createContext(null)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const loginWithEmailPassword = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        setLoading(true)
        return signOut(auth);
    };

    const GoogleProvider = new GoogleAuthProvider();
    const FBprovider = new FacebookAuthProvider();

    const googleLogin = () => {
        return signInWithPopup(auth, GoogleProvider);
    };
    const fbLogin = () => {
        return signInWithPopup(auth, FBprovider);
    };



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            console.log("---------->", currentUser);
            setUser(currentUser)
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loginWithEmailPassword,
        loading,
        createUser,
        logOutUser,
        googleLogin,
        fbLogin
    }
    return (

        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
};

export default AuthProvider;