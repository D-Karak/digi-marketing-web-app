import axiosClient from './axiosClientConnection';

// ==========================================
// 3. User Profile Logic (Matches Backend: userProfileController)
// ==========================================
// This controller exclusively asks the backend to fetch or update the user's dashboard data.

export const fetchUserProfileDetails = async (uid) => {
    try {
        // Matches GET /api/users/profile/:uid
        const response = await axiosClient.get(`/users/profile/${uid}`);

        return response.data.data; // The returned MongoDB Profile JSON
    } catch (error) {
        console.error('Failed to grab dashboard profile from backend database:', error);
        throw error;
    }
};
