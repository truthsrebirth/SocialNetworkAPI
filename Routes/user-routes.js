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

// GET all users
router.route('/').get(getAllUsers).post(createUser);

// PUT to update a user by its _id
// DELETE to remove user by its _id
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);

router.route('/:id/friends/:friendsId').post(addFriend).delete(deleteFriend);

// export code
module.exports = router;