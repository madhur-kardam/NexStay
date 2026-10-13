const express = require ("express");
const router= express.Router();
const wrapAsync= require("../utils/wrapAsync");
const passport= require("passport");
const { saveRedirectUrl }= require("../middleware.js");
const usersController= require("../controllers/users.js");


router.route("/signup")
.get(usersController.renderSignup) //signup form
.post(wrapAsync(usersController.Signup)); //signup


router.route("/login")
.get(usersController.renderLogin) //login form
.post(saveRedirectUrl,
  passport.authenticate(
   "local",{ failureRedirect:'/login',failureFlash: true }
  ),
usersController.Login); //login


router.get("/logout",usersController.Logout); //logout user


module.exports = router; // github.com/LunarLogic/starability/tree/master/starability-css