import React from 'react';
import { AuthContext } from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.init';

const AuthProvidor = ({children}) => {

    const createUser = ( email , password) => {
        return createUserWithEmailAndPassword(auth , email , password)
    }

    const signUp = ( email , password) => {
        return signInWithEmailAndPassword(auth , email , password)
    }

    const userInfo={
       createUser,
       signUp
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvidor;