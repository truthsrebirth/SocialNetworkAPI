const router = require('express').Router();

const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../controllers/user-controllers');

// Set up GET all & POST for api/user
router.route('/').get(getAllUsers).post(createUser);