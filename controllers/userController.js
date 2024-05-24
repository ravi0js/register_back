import User from '../models/User.js'
import fs from 'fs-extra';
import path from 'path';

export const registerUser = async (req, res) => {
    const { name, email, password } = req.body;
    const profileImage = req.file.path;

    try {
        const userExists = await User.findOne({ email });

        if (userExists) {
            return res.status(400).json({ message: 'User already exists' });
        }

        const user = new User({
            name,
            email,
            profileImage,
            password
        });

        await user.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
        console.log(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


