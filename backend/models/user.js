const mongoose = require("mongoose");

const schema = mongoose.Schema;

const userSchema = new schema({
  firstName: {
    type: "String",
    required: true,
  },
  lastName: {
    type: "Sting",
    required: true,
  },
  password: {
    type: "Sting",
    required: true,
  },
  email: {
    type: "String",
    required: true,
  },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
