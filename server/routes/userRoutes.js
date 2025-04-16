const express = require('express');
const router = express.Router();
const {
    register,
    login,
    updateUser,
    deleteUser
} = require('../controllers/userController');
const protect = require('../middleware/authMiddleware');

router.post('/register', register);
router.post('/login', login);
router.put('/:id', protect, updateUser); // Added protect middleware
router.delete('/:id', protect, deleteUser); // Added protect middleware

module.exports = router;