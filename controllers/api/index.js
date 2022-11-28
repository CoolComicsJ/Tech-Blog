const router = require('express').Router();

const userRoutes = require('./userroutes.js');
const postRoutes = require('./postroutes');
const commentRoutes = require('./commentroutes');



router.use('/comment', commentRoutes);
router.use('/user', userRoutes);
router.use('/post', postRoutes);


module.exports = router;