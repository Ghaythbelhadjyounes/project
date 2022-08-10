// require mongoose
const mongoose = require("mongoose");
// schema
const schema = mongoose.Schema;
const todoSchema = new schema({
  title: {
    type: String,
    require: true,
  },
});

module.exports = Todo = mongoose.model("todo", todoSchema);
