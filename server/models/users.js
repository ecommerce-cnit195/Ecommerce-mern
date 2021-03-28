const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;

let UserSchema = new Schema({
    userRole: {
        type: String,
        enum: ["admin", "user"],
    },
    firstName: {
        type: String,
    },
    lastName: {
        type: String,
    },
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
      },
      password: {
        type: String,
        required: true,
        minlength: 4,
      },
    image: {
        type: String
    },
    creditCard: {
        type: String,
    }
});

UserSchema.pre("save", function (next) {
    if (!this.isModified("password")) return next();
    bcrypt.hash(this.password, 10, (err, passwordHash) => {
      if (err) return next(err);
      this.password = passwordHash;
      next();
    });
  });
  
  UserSchema.methods.comparePassword = function (password, cb) {
    bcrypt.compare(password, this.password, (err, isMatch) => {
      if (err) return cb(err);
      else {
        if (!isMatch) return cb(null, isMatch);
        return cb(null, this);
      }
    });
  };


const User = mongoose.model("User", UserSchema);

module.exports = User;