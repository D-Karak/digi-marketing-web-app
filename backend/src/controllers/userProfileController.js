const User = require('../models/userModel');

// --------------------------------------------------------------------------
// @desc    Get Current User Profile
// @route   GET /api/users/:uid
// @access  Public (In production, you'd add verifyToken middleware here)
// --------------------------------------------------------------------------
const getUserProfile = async (req, res) => {
    try {
        const user = await User.findOne({ uid: req.params.uid });
        if (!user) {
            return res.status(404).json({ success: false, message: 'User not found in system' });
        }
        res.status(200).json({ success: true, data: user });
    } catch (error) {
        console.error('Error fetching user:', error);
        res.status(500).json({ success: false, message: 'Server Error Fetching Profile' });
    }
};

module.exports = {
    getUserProfile
};
