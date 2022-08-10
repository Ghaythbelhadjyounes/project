// require mongoose
const mongoose = require("mongoose");
// schema
const schema = mongoose.Schema;
const photoSchema = new schema({
  name: {
    type: String,
    require: true,
  },
  imageURL: {
    type: String,
  },
});

module.exports = Photo = mongoose.model("photo", photoSchema);
