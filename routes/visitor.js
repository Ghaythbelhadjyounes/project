// require express
const express = require("express");
const { registerVisitor, loginVisitor } = require("../controllers/visitor");
const isAuthVisitor = require("../middleware/isAuthVisitor");

const {
  registerValidation,
  validation,
  loginValidation,
} = require("../middleware/validator");

const router = express.Router();

// route user (register & login)

// register
router.post(
  "/registerVisitor",
  registerValidation(),
  validation,
  registerVisitor
);

// login
router.post("/loginVisitor", loginValidation(), validation, loginVisitor);

// current user
router.get("/currentVisitor", isAuthVisitor, (req, res) => {
  res.send(req.visitor);
});

// export
module.exports = router;
