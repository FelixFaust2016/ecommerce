const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    maxlength: 555,
    minlength: 2,
    required: 1,
  },
  lastname: {
    type: String,
    maxlength: 555,
    minlength: 2,
    required: 1,
  },
  email: {
    type: String,
    unique: true,
    required: 1,
  },
  password: {
    type: String,
    required: 1,
  },
  inCart: {
    type: Array,
    default: [],
  },
});

userSchema.pre("save", async function (next) {
  try {
    if (!this.isModified("password")) {
      return next();
    }

    const hashed = await bcrypt.hash(this.password, 10);
    this.password = hashed;
    return next();
  } catch (err) {
    return next(err);
  }
});

userSchema.methods.comparePassword = async function (attempt, next) {
  try {
    return await bcrypt.compare(attempt, this.password);
  } catch (err) {
    next(err);
  }
};

module.exports = mongoose.model("User", userSchema);
