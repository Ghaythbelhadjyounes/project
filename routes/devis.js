const express = require("express");
const Devis = require("../models/Devis");

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const { fullName, phone, mail, problem } = req.body;

    const newDevis = new Devis({ fullName, phone, mail, problem });
    await newDevis.save();
    res.status(200).send({ msg: " Product added succesfuly...", newDevis });
  } catch (error) {
    res.status(400).send({ msg: "can not add Product !!! ", error });
  }
});

router.get("/all", async (req, res) => {
  try {
    const ListDeviss = await Devis.find();
    res
      .status(200)
      .send({ msg: "This is the list of all Products", ListDeviss });
  } catch (error) {
    res.status(400).send({ msg: "Can not get Products !!!", error });
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const devisById = await Devis.findById({ _id });

    res.status(200).send({ msg: "Product by id found", devisById });
  } catch (error) {
    res.status(400).send({ msg: "Can not get product by id!!!", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const OneDevis = await Devis.findOne({ _id: req.params.id });
    res.status(200).send({ msg: "This is the one Devis", OneDevis });
  } catch (error) {
    res.status(400).send({ msg: "Can not get Devis !!!", error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteDevis = await Devis.findOneAndDelete({
      _id: req.params.id,
    });
    res
      .status(200)
      .send({ msg: "Product is deleted successfully", deleteDevis });
  } catch (error) {
    res.status(400).send({ msg: "Can not delete this Product!!!", error });
  }
});

router.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Devis.findOneAndUpdate(
      { _id },
      { $set: { ...req.body } }
    );
    res.status(200).send({ msg: "Product is updated successfully", result });
  } catch (error) {
    res.status(400).send({ msg: "Can not update this Product !!!", error });
  }
});

module.exports = router;
