const express = require('express');
const mongoose = require('mongoose');
const  router = express.Router();
const ConnectedDB = require('../db/db'); // Adjust this path as per your structure
const { body, validationResult } = require('express-validator');
const User = require('../modules/module'); // Adjust this path as per your structure
// ✅ GET all users
router.get('/users', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// ✅ POST new user with validation
router.post(
    '/usersabhi',
    [
        body('name').notEmpty().withMessage('Enter name'),
        body('age').isInt().withMessage('Enter a valid age'),
        body('email').isEmail().withMessage('Enter a valid email'),
        
    ],
   
    async (req, res) => {
         console.log('Validation middleware applied')
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        try {
            const { name, age, email } = req.body;
            const user = new User({ name, age, email });
            await user.save();
            res.status(201).json({ message: 'User was created', user });
        } catch (err) {
            res.status(500).json({ message: 'User was not created', error: err.message });
        }
    }
);

module.exports = router;
