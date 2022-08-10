// require express
const express = require("express");
const { registerAdmin, loginAdmin } = require("../controllers/admin");
const isAuthAdmin = require("../middleware/isAuthAdmin");

const {
  registerValidation,
  validation,
  loginValidation,
} = require("../middleware/validator");

const router = express.Router();

// route user (login)

// register
router.post("/registerAdmin", registerValidation(), validation, registerAdmin);

// login
router.post("/loginAdmin", loginValidation(), validation, loginAdmin);

// current user
router.get("/currentAdmin", isAuthAdmin, (req, res) => {
  res.send(req.admin);
});

// export
module.exports = router;
