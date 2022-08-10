const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Admin = require("../models/Admin");

exports.registerAdmin = async (req, res) => {
  try {
    // req.body => newAdmin
    const { email, password} = req.body;
    const foundAdmin = await Admin.findOne({ email });
    if (foundAdmin) {
      return res
        .status(400)
        .send({ errors: [{ msg: "Email should be unique try again !!" }] });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    // const newAdmin
    const newAdmin = new Admin({ ...req.body });
    newAdmin.password = hashedPassword;
    await newAdmin.save();
    // create token
    const token = jwt.sign(
      {
        id: newAdmin._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.status(200).send({ msg: "Register Admin Succ ...", admin: newAdmin, token });
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "Can not regsiter the Admin !!! !!" }] });
  }
};

exports.loginAdmin = async (req, res) => {
  try {
    const { email, password } = req.body;
    // check if email exist
    const foundAdmin = await Admin.findOne({ email });
    if (!foundAdmin) {
      return res.status(400).send({ errors: [{ msg: "Bad credential !!" }] });
    }
    const checkPassword = await bcrypt.compare(password, foundAdmin.password);
    if (!checkPassword) {
      return res.status(400).send({ errors: [{ msg: "Bad credential !!" }] });
    }
    // create token
    const token = jwt.sign(
      {
        id: foundAdmin._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.status(200).send({ msg: "Login Succ ...", admin: foundAdmin, token });
  } catch (error) {
    res
      .status(400)
      .send({ errors: [{ msg: "Can not login the Admin !!! !!" }] });
  }
};
