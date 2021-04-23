const express = require('express');
const userRouter = express.Router();
const User = require("../models/users");
const passport = require("passport");
const JWT = require("jsonwebtoken");
const passportConfig = require("../passport/passport");

const signToken = (userId) =>{
    return JWT.sign(
        {
            iss:"ccsf-mern-app",
            sub:userId,
        },
        "ccsf-mern-app",
        {expiresIn: "2h"}
    );
};

userRouter.post("/register", (req, res) => {
  const { username, password, email } = req.body;
  console.log(req.body)
  console.log(username)
  User.findOne({ username }, (err, user) => {
    if (err)
      res
        .status(500)
        .json({ message: { msgBody: "Error has occured", msgError: true } });
    if (user)
      res
        .status(500)
        .json({ message: { msgBody: "User already exist", msgError: true } });
    else {
      const newUser = new User({ username, password, email });
    console.log("newUser: "+ newUser)
      newUser.save((err) => {
        if (err)
          res.status(500).json({
            message: { msgBody: "Email already exist", msgError: true },
          });
        else
          res
            .status(201)
            .json({ message: { msgBody: "User Created", msgError: false } });
      });
    }
  });
});

userRouter.post("/login", passport.authenticate("local",{session:false}), (req,res)=>{
  if (req.isAuthenticated()) {
    console.log("not logged")
    const { _id, username } = req.user;
    const token = signToken(_id);
    res.cookie("access_token", token, { httpOnly: true, sameSite: true });
    res.cookie("userID", _id, { httpOnly: true, sameSite: true });
    res.status(200).json({ isAuthenticated: true, user: { username, _id } });
  }else {
    console.log("not logged")
  }
}
)


userRouter.get("logout", passport.authenticate("jwt", {session:false}), (req,res) =>{
    res.clearCookie("access_token")
    res.clearCookie("userId")
    res.json({usesr:{username:""},success:true})
})

userRouter.get(
    "/authenticated",
    passport.authenticate("jwt", { session: false }),
    (req, res) => {
      const { username } = req.user;
      res.status(200).json({ isAuthenticated: true, user: { username } });
    }
);

module.exports = userRouter;