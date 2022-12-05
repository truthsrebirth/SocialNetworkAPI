//
const router = require('express').Router();

// declare consts as variables to link to js files
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thoughts-routes');

// 
router.use('/api/users', userRoutes);
router.use('/api/thoughts', thoughtRoutes);

// export code
module.exports = router;