import axiosClient from './axiosClientConnection';

// ==========================================
// 2. Auth Business Logic (Matches Backend: authSyncController)
// ==========================================
// This controller handles telling the backend to store users right after they log in to Firebase.

export const syncUserWithBackendDatabase = async (firebaseUser, additionalData = {}) => {
    try {
        const payload = {
            uid: firebaseUser.uid,
            email: firebaseUser.email,
            displayName: firebaseUser.displayName || '',
            photoURL: firebaseUser.photoURL || '',
            ...additionalData // Pass inside specific provider scopes if needed (like firstName, lastName)
        };

        // Makes a REST POST request perfectly matching our backend Endpoint
        const response = await axiosClient.post('/auth/sync', payload);

        return response.data.data; // The saved MongoDB user Document
    } catch (error) {
        console.error('Failed to sync strictly with MongoDB Atlas Backend:', error);
        throw error;
    }
};
