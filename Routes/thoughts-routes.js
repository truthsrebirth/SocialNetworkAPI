const router = require('express').Router();

const {
    getAllThoughts,
    getThoughtById,
    updateThought,
    createThoughts,
    deleteThought,
    createReaction,
    deleteReaction,
} = require('../controllers/thoughts-controllers');
const { route } = require('./user-routes');

// get all thoughts & post a created thought
router.route('/').get(getAllThoughts).post(createThoughts);

// 
route.route('/:thoughtId').get(getThoughtById).put(updateThought).delete(deleteThought);

// POST to create reaction stored in a single thought's reactions array field
router.route('/:thoughtID/reactions').post(createReaction);

// DELETE to pull and remove a reaction by the reaction's reactionId value 
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);

// export code
module.exports = router;