//Requirements



const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dashboard-routes.js');
const router = require('express').Router();
const apiRoutes = require('./api/');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);


//Exports

module.exports = router;