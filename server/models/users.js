const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let UserSchema = new Schema({
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
        validate: value => {
            if (!validator.isEmail(value)) {
                throw new Error({ error: 'Invalid Email address' })
            }
        }
    },
    password: {
        type: String,
        required: true,
        minLength: 4,
    },
    image: {
        type: String
    },
    creditCard: {
        type: String,
    }
});


const User = mongoose.model("User", UserSchema);

module.exports = User;