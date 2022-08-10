const express = require("express");
const app = express();
require("dotenv").config();
const connectDB = require("./config/connectDB");
connectDB();
app.use(express.json());
app.use("/api/user", require("./routes/user"));
app.use("/api/contact", require("./routes/contact"));
app.use("/api/boutique", require("./routes/boutique"));
app.use("/api/photo", require("./routes/photo"));
app.use("/api/admin", require("./routes/admin"));
app.use("/api/visitor", require("./routes/visitor"));
app.use("/api/devis", require("./routes/devis"));
app.use("/api/todo", require("./routes/todo"));

const PORT = process.env.PORT;

app.listen(PORT, (error) => {
  error
    ? console.error(`Failed to connect to server !!! ${error}`)
    : console.log(`Server is running on port ${PORT} ... `);
});
