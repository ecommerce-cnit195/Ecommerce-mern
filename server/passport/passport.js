const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const JwtStrategy = require("passport-jwt").Strategy;
const User = require("../models/users");
// const flash = require("connect-flash")
// const express = require("express");
// const app = express();

// app.use(flash())

const cookieExtractor = (req) => {
  let token = null;
  if (req && req.cookies) {
    token = req.cookies["access_token"];
  }
  return token;
};

// authorization
passport.use(
  new JwtStrategy(
    {
      jwtFromRequest: cookieExtractor,
      secretOrKey: "ccsf-mern-app",
    },
    (payload, done) => {
      User.findById({ _id: payload.sub }, (err, user) => {
        if (err) return done(err, false);
        if (user) return done(null, user);
        else return done(null, false);
      });
    }
  )
);

passport.use(
  new LocalStrategy({passReqToCallback: true,},(req, username, password, done) => {
    User.findOne({ username }, (err, user) => {
      // something went wrong with database
      if (err) return done(err);
      // if no user exist
      if (!user) return done(null, false);
      // check if password is correct
      user.comparePassword(password, done);
    });
  })
);

passport.authenticate('local', { failureFlash: 'Invalid username or password.' })

// passport.use(new LocalStrategy(
//   function(username, password, done) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) { return done(err); }
//       if (!user) {
//         return done(null, false, { message: 'Incorrect username.' });
//       }
//       if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     });
//   }
// ));