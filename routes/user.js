const express = require('express');
const router = express.Router();
const passport = require('passport')
const usercontroller = require('../controllers/user_controllers');
console.log("routes user");
router.get('/profile',passport.checkAuthentication,usercontroller.profile);
router.get('/sign-up', usercontroller.signUp);
router.get('/sign-in', usercontroller.signIn);
router.post('/create', usercontroller.create);
//use passport as a middleware to authenticate
router.post('/create-session', passport.authenticate(
    'local',  
    { failureRedirect: '/user/sign-in' }
), usercontroller.createSession);
// router.get('/about', aboutcontroller.about);
 router.get('/sign-out', usercontroller.destroySession);
module.exports = router;
