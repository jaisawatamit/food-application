const jwt = require('jsonwebtoken');
const UserModel = require('../model/UserModel');
const dotenv = require('dotenv');
dotenv.config();

// Middleware to protect routes
const protect = async (req, res, next) => {
    let token;

    // Check if the request contains an Authorization header and starts with 'Bearer'
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
        // Extract token from the header
        token = req.headers.authorization.split(' ')[1];
    }

    // If no token is provided
    if (!token) {
        return res.status(401).json({ message: 'Not authorized, no token' });
    }

    try {
        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // Add user info to request object for use in other routes
        req.user = await UserModel.findById(decoded.id).select('-password'); // Exclude password

        // Proceed to the next middleware or route handler
        next();
    } catch (error) {
        console.error('Token verification error:', error);
        return res.status(401).json({ message: 'Not authorized, token failed' });
    }
};

module.exports = { protect };
