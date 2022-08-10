// require mongoose
const mongoose = require("mongoose");
// schema
const schema = mongoose.Schema;
const contactSchema = new schema({
  name: {
    type: String,
    require: true,
  },
  age: Number,
  functionality: {
    type: String,
  },
  phone: Number,
  imageURL: {
    type: String,
  },
});

module.exports = Contact = mongoose.model("contact", contactSchema);
