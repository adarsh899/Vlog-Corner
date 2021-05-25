const express = require('express');
const router = express.Router();
const homecontroller = require('../controllers/home_controllers');
// const usercontroller = require('../controllers/user_controllers');
console.log("routes");
router.get('/', homecontroller.home);
// router.get('/user', usercontroller.user);
router.use('/user', require('./user'));
module.exports = router;
