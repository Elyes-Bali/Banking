const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  questId: {
    type: String,
  },
  question: {
    type: String,
    default: true,
  },
  reponse: {
    type: String,
  },

  validator: {
    type: Boolean,
    default: true,
  },
});
module.exports = Question = new mongoose.model("questions", questionSchema);
