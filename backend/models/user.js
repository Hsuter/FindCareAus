const mongoose = require("mongoose");

//DB schema

const userSchema = new mongoose.Schema({
  name: { type: String, require: true, minlength: 3, maxlength: 30 },
  email: {
    type: String,
    require: true,
    minlength: 10,
    maxlength: 30,
    unique: true,
  },
  password: {
    type: String,
    require: true,
    minlength: 4,
    maxlength: 1024,
  },
  isAdmin: { type: Boolean, default: false },
  balance: { type: String, minlength: 0, maxlength: 30 },
  resetToken: { type: String },
  resetTokenExpiration: { type: Date },
});

const User = mongoose.model("User", userSchema);

exports.User = User;
//npm i jsonwebtoken bcrypt joi