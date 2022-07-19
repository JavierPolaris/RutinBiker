const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// El esquema
const userSchema = new Schema(
  {
    email: { type: String },
    message: { type: String },
    urlImg: { type: String },
    heart: { type: Number },
    like: { type: Number },
    userName: { type: String },
    userUrlImg: { type: String },
    comentarios: [{
      comentario: { type: String },
      userName: { type: String },
      userUrlImg: { type: String },
    }]
   
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
// El modelo
const User = model('Post', userSchema);

module.exports = User;