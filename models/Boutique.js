// require mongoose
const mongoose = require("mongoose");
// schema
const schema = mongoose.Schema;
const boutiqueSchema = new schema({
  name: {
    type: String,
    require: true,
  },
  prix: Number,
  imageURL: {
    type: String,
  },
});

module.exports = Boutique = mongoose.model("boutique", boutiqueSchema);
