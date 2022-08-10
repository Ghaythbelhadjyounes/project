const jwt = require("jsonwebtoken");
const Visitor = require("../models/Visitor");

const isAuthVisitor = async (req, res, next) => {
  try {
    // token => headers
    const token = req.headers["authorization"];
    if (!token) {
      return res.status(401).send({ errors: [{ msg: "Not authorized !!" }] });
    }
    const decoded = jwt.verify(token, process.env.SECRET_KEY); // {id}
    const foundVisitor = await Visitor.findOne({ _id: decoded.id });
    if (!foundVisitor) {
      return res.status(401).send({ errors: [{ msg: "Not authorized !!" }] });
    }
    req.visitor = foundVisitor;
    next();
  } catch (error) {
    res.status(401).send({ errors: [{ msg: "Not authorized !!" }] });
  }
};

module.exports = isAuthVisitor;
