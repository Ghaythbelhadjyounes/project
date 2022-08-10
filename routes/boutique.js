const express = require("express");
const Boutique = require("../models/Boutique");
const upload = require("../middleware/upload");
const router = express.Router();

router.post("/add", upload.single("imageURL"), async (req, res) => {
  try {
    const { name, prix } = req.body;
    let imageURL = "";
    if (req.file) {
      imageURL = req.file.filename;
    }

    const newBoutique = new Boutique({ name, prix, imageURL });
    await newBoutique.save();
    res.status(200).send({ msg: " Product added succesfuly...", newBoutique });
  } catch (error) {
    res.status(400).send({ msg: "can not add Product !!! ", error });
  }
});

router.get("/all", async (req, res) => {
  try {
    const ListBoutiques = await Boutique.find();
    res
      .status(200)
      .send({ msg: "This is the list of all Products", ListBoutiques });
  } catch (error) {
    res.status(400).send({ msg: "Can not get Products !!!", error });
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const boutiqueById = await Boutique.findById({ _id });

    res.status(200).send({ msg: "Product by id found", boutiqueById });
  } catch (error) {
    res.status(400).send({ msg: "Can not get product by id!!!", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const OneBoutique = await Boutique.findOne({ _id: req.params.id });
    res.status(200).send({ msg: "This is the one Boutique", OneBoutique });
  } catch (error) {
    res.status(400).send({ msg: "Can not get Boutique !!!", error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteBoutique = await Boutique.findOneAndDelete({
      _id: req.params.id,
    });
    res
      .status(200)
      .send({ msg: "Product is deleted successfully", deleteBoutique });
  } catch (error) {
    res.status(400).send({ msg: "Can not delete this Product!!!", error });
  }
});

router.put("/:_id", upload.single("imageURL"), async (req, res) => {
  try {
    const { _id } = req.params;
    let imageURL = "";
    if (req.file) {
      imageURL = req.file.filename;
    }
    const result = await Boutique.findOneAndUpdate(
      { _id },
      { $set: { ...req.body, imageURL } }
    );
    res.status(200).send({ msg: "Product is updated successfully", result });
  } catch (error) {
    res.status(400).send({ msg: "Can not update this Product !!!", error });
  }
});

module.exports = router;
