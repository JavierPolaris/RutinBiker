const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// El esquema
const userSchema = new Schema(
  {
    username: { type: String },
    profilePicture: { type: String },
   
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// El modelo
const User = model('User', userSchema);

module.exports = User;