const Visitor = require("../models/Visitor");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.registerVisitor = async (req, res) => {
  try {
    // req.body => newVisitor
    const { email, password } = req.body;
    const foundVisitor = await Visitor.findOne({ email });
    if (foundVisitor) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Email should be unique try again !!" }] });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // const newVisitor
    const newVisitor = new Visitor({ ...req.body });
    newVisitor.password = hashedPassword;
    await newVisitor.save();
    // create token
    const token = jwt.sign(
      {
        id: newVisitor._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    res
      .status(200)
      .send({ msg: "Register Succ ...", visitor: newVisitor, token });
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "Can not regsiter the Visitor !!! !!" }] });
  }
};

exports.loginVisitor = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if email exist
    const foundVisitor = await Visitor.findOne({ email });
    if (!foundVisitor) {
      return res.status(400).send({ errors: [{ msg: "Bad credential !!" }] });
    }
    const checkPassword = await bcrypt.compare(password, foundVisitor.password);
    if (!checkPassword) {
      return res.status(400).send({ errors: [{ msg: "Bad credential !!" }] });
    }
    // create token
    const token = jwt.sign(
      {
        id: foundVisitor._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    res
      .status(200)
      .send({ msg: "Login Succ ...", visitor: foundVisitor, token });
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "Can not login the Visitor !!! !!" }] });
  }
};
