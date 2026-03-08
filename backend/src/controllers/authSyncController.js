const User = require('../models/userModel');

// --------------------------------------------------------------------------
// @desc    Sync Firebase Authenticated User into MongoDB Backend
// @route   POST /api/auth/sync
// @access  Public (Expects user object sent precisely after Firebase Login)
// --------------------------------------------------------------------------
const syncUserWithDatabase = async (req, res) => {
    try {
        const { uid, email, displayName, photoURL, authProvider } = req.body;

        if (!uid || !email) {
            return res.status(400).json({ success: false, message: 'Please provide user UID and Email' });
        }

        // Parse names cleanly
        let firstName = '';
        let lastName = '';
        if (displayName) {
            const nameParts = displayName.split(' ');
            firstName = nameParts[0] || '';
            lastName = nameParts.length > 1 ? nameParts.slice(1).join(' ') : '';
        }

        // See if user exists
        let user = await User.findOne({ uid });

        if (user) {
            // Update last login
            user.lastLoginAt = new Date();
            if (displayName && !user.displayName) user.displayName = displayName;
            if (firstName && !user.firstName) user.firstName = firstName;
            if (lastName && !user.lastName) user.lastName = lastName;
            if (photoURL && !user.photoURL) user.photoURL = photoURL;
            if (authProvider && user.authProvider === 'email') user.authProvider = authProvider;

            await user.save();
        } else {
            // Create user for the very first time
            user = await User.create({
                uid,
                email,
                displayName,
                firstName,
                lastName,
                photoURL,
                authProvider: authProvider || 'email',
                lastLoginAt: new Date()
            });
        }

        return res.status(200).json({
            success: true,
            data: user
        });

    } catch (error) {
        console.error('Error syncing user:', error);
        return res.status(500).json({ success: false, message: 'Server error syncing user data' });
    }
};

module.exports = {
    syncUserWithDatabase
};
