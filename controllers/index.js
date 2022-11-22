const router = require('express').Router();

const apiRoutes = require('./api/');
const homepageRoutes = require('./homeroutes.js');
const dashboardRoutes = require('./dashboardroutes.js');

router.use('/api', apiRoutes);
router.use('/', homepageRoutes);
router.use('/dashboard', dashboardRoutes);


module.exports = router;
