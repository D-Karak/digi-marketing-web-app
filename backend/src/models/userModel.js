const mongoose = require('mongoose');

// This file defines the layout (Schema) for storing user records in MongoDB.
const userSchema = new mongoose.Schema(
    {
        uid: {
            type: String,
            required: true,
            unique: true,
            index: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
            trim: true,
        },
        firstName: { type: String, trim: true },
        lastName: { type: String, trim: true },
        displayName: { type: String, trim: true },
        photoURL: { type: String, default: '' },
        authProvider: {
            type: String,
            enum: ['email', 'google.com', 'apple.com', 'unknown'],
            default: 'email',
        },
        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
        },
        lastLoginAt: {
            type: Date,
            default: Date.now,
        }
    },
    {
        timestamps: true, // Auto-adds `createdAt` and `updatedAt` to documents
    }
);

// Virtual field to grab Full Name if it's missing from Display Name
userSchema.virtual('fullName').get(function () {
    if (this.firstName && this.lastName) return `${this.firstName} ${this.lastName}`;
    return this.displayName || this.firstName || '';
});

const User = mongoose.model('User', userSchema);

module.exports = User;
