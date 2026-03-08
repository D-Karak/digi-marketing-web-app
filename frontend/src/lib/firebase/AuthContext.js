"use client";

import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged, signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut, GoogleAuthProvider, OAuthProvider, signInWithPopup, updateProfile } from 'firebase/auth';
import { auth } from './config';
import { syncUserWithBackendDatabase } from '../../services/authApiService';

const AuthContext = createContext({});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                });
            } else {
                setUser(null);
            }
            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const login = async (email, password) => {
        const userCredential = await signInWithEmailAndPassword(auth, email, password);
        await syncUserWithBackendDatabase(userCredential.user, { authProvider: 'email' });
        return userCredential;
    };

    const signup = async (email, password, firstName, lastName) => {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, {
            displayName: `${firstName} ${lastName}`.trim()
        });
        // We pass the fresh credentials to mongodb
        await syncUserWithBackendDatabase(userCredential.user, {
            authProvider: 'email',
            firstName,
            lastName
        });
        return userCredential;
    };

    const logout = async () => {
        setUser(null);
        await signOut(auth);
    };

    const googleProvider = async () => {
        try {
            const provider = new GoogleAuthProvider();
            const result = await signInWithPopup(auth, provider);
            await syncUserWithBackendDatabase(result.user, { authProvider: 'google.com' });
            return result;
        } catch (error) {
            console.error("Error signing in with Google:", error);
            throw error;
        }
    }

    const appleProvider = async () => {
        try {
            const provider = new OAuthProvider('apple.com');
            const result = await signInWithPopup(auth, provider);
            await syncUserWithBackendDatabase(result.user, { authProvider: 'apple.com' });
            return result;
        } catch (error) {
            console.error("Error signing in with Apple:", error);
            throw error;
        }
    }

    return (
        <AuthContext.Provider value={{ user, login, signup, logout, loading, googleProvider, appleProvider }}>
            {children}
        </AuthContext.Provider>
    );
};
