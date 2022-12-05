//
const router = require('express').Router();

// 
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thoughts-routes');

// middleware enables communication and data management for distributed applications
router.use('/api/users', userRoutes);
router.use('/api/thoughts', thoughtRoutes);

// export the code
module.exports = router;