const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 32,
        trim:true
    },
    email: {
        type: String,
        trim: true,
        required: true,
        unique: true
    },
    address: {
      type: String,
      trim: true
    },
    dateOfBirth: {
      type: Date,
      trim: true,
    },
    description: {
      type: String,
      trim: true
    },
    encry_password: {
      type: String,
    },
    salt: String,
},{ timestamps: true });


module.exports = mongoose.model("User", userSchema);
