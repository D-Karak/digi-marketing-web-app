const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
require('dotenv').config();

// ==========================================
// 1. External Database Connection
// ==========================================
const connectDB = require('./src/config/databaseConnection');

// ==========================================
// 2. Clear API Route Maps
// ==========================================
const authSyncRoutes = require('./src/routes/authSyncRoutes');
const userProfileRoutes = require('./src/routes/userProfileRoutes');

// ==========================================
// 3. Error Handling Maps
// ==========================================
const { notFound, errorHandler } = require('./src/middlewares/globalErrorHandlers');

// Initialize App
const app = express();

// Connect MongoDB First
connectDB();

// Global Middlewares setup
app.use(express.json()); // Parses incoming HTTP bodies
app.use(helmet());       // Locks down standard security vulnerabilities
app.use(morgan('dev'));  // Cleans the terminal logs for visibility

// Allow frontend to communicate smoothly
app.use(cors({
    origin: ['http://localhost:3000', process.env.CLIENT_ORIGIN_URL].filter(url => !!url),
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));

// Route Definitions
app.get('/api/health', (req, res) => {
    res.status(200).json({ status: 'API Structure is actively running!' });
});

// Explicit modular paths
app.use('/api/auth', authSyncRoutes);    // Handles /api/auth/sync
app.use('/api/users', userProfileRoutes); // Handles /api/users/profile/:uid

// Intercept bad requests correctly
app.use(notFound);
app.use(errorHandler);

// Boot up Node Server
const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`🚀 Server safely listening locally on http://localhost:${PORT}`));
