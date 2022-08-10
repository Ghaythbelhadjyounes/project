// require mongoose
const mongoose = require("mongoose");

// schema
const { Schema, model } = mongoose;

// creation schema
const VisitorSchema = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  phone: Number,
});

// export
module.exports = Visitor = model("visitor", VisitorSchema);
