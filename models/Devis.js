// require mongoose
const mongoose = require("mongoose");
// schema
const schema = mongoose.Schema;
const devisSchema = new schema({
  fullName: {
    type: String,
    require: true,
  },
  phone: Number,
  mail: {
    type: String,
    require: true,
  },
  problem: {
    type: String,
  },
});

module.exports = Devis = mongoose.model("devis", devisSchema);
