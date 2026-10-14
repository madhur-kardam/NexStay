const User= require("../models/user.js");

//signup form
module.exports.renderSignup=(req, res)=>{
 res.render("users/signup.ejs");
}

//signup
module.exports.Signup=async(req, res)=>{
 try{
  let{username, email, password}= req.body;
  const newUser= new User({email, username});
  const registeredUser= await User.register(newUser, password);
  console.log(registeredUser);
  req.login(registeredUser, (err)=>{
   if(err){
    return next(err);
   }
  req.flash("success", "Welcome to NexStay");
  res.redirect("/");
  });
 }catch(e){
  req.flash("error", e.message);
  res.redirect("/signup");
 }
}

//login form
module.exports.renderLogin=(req, res) => {
 res.render("users/login.ejs");
}

//login
module.exports.Login=async(req, res) =>{
 req.flash("success","welcome to NexStay");
 let redirectUrl= res.locals.redirectUrl || "/";
 res.redirect(redirectUrl);
}

//logout
module.exports.Logout= (req,res,next)=>{
 req.logout((err)=>{
  if(err){
   return next(err);
  }
  req.flash("success","you are looged out!");
  res.redirect("/")
 })
}