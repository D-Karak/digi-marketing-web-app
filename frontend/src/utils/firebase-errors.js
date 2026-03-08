export const getFirebaseErrorMessage = (error) => {
    switch (error.code) {
        case 'auth/invalid-email':
            return 'Please enter a valid email address.';
        case 'auth/user-disabled':
            return 'This account has been disabled. Please contact support.';
        case 'auth/user-not-found':
            return 'No account found with this email. Please sign up.';
        case 'auth/wrong-password':
            return 'Incorrect password. Please try again.';
        case 'auth/invalid-credential':
            return 'Invalid credentials provided. Please check your email and password.';
        case 'auth/email-already-in-use':
            return 'An account already exists with this email address.';
        case 'auth/weak-password':
            return 'Your password is too weak. Please use at least 6 characters.';
        case 'auth/operation-not-allowed':
            return 'This sign-in method is currently disabled. Please contact support.';
        case 'auth/popup-closed-by-user':
            return 'The sign-in popup was closed before completing.';
        default:
            return error.message || 'An unexpected error occurred. Please try again.';
    }
};
