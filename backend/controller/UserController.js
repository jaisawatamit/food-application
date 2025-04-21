const UserModel = require('../model/UserModel');

const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '1d' });
};

exports.getUser = async (req, res) => {
    const userId = req.user._id; // Assuming you have middleware that sets req.user
    try {
        const user = await UserModel.findById(userId).select('-password');
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user);
    } catch (err) {
        console.error('Error fetching user:', err);  // Log the error for debugging
        res.status(500).json({ message: err.message || 'Internal server error' });
    }
}

exports.register = async (req, res) => {
    const { email, password, name, phoneNumber } = req.body;
    console.log('📥 Register request body:', req.body);
    try {
        const userExists = await UserModel.findOne({ email });
        if (userExists) return res.status(400).json({ message: 'User already exists' });

        const user = await UserModel.create({ email, password, name, phoneNumber });
        console.log(user.password); 
        res.status(201).json({
            _id: user._id,
            name: user.name, // <-- Add this!
            email: user.email,
            token: generateToken(user._id),
        });
    } catch (err) {
        console.error('Registration error:', err);  // Log the error for debugging
        res.status(500).json({ message: err.message || 'Internal server error' });
    }
};


exports.login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (user && await user.matchPassword(password)) {
            res.json({
                _id: user._id,
                name: user.name, // <-- Add this!
                email: user.email,
                token: generateToken(user._id),
            });
        } else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};


