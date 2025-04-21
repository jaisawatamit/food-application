const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const mongoose = require('mongoose');

const UserRouter = require('./routes/UserRouter');

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/user', UserRouter);

mongoose.connect(process.env.MONGODB_URI, { dbName: "food-app" })
    .then(() => {
        console.log('MongoDB connected');
        app.listen(5000, () => console.log('Server running on port 5000'));
    })
    .catch(err => console.error('❌ MongoDB connection error:', err));
