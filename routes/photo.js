const express = require("express");
const upload = require("../middleware/upload");
const Photo = require("../models/Photo");

const router = express.Router();

router.post("/add", upload.single("imageURL"), async (req, res) => {
  try {
    const { name } = req.body;
    let imageURL = "";
    if (req.file) {
      imageURL = req.file.filename;
    }
    const newPhoto = new Photo({ name, imageURL });
    await newPhoto.save();
    res.status(200).send({ msg: " Photo added succesfuly...", newPhoto });
  } catch (error) {
    res.status(400).send({ msg: "can not add Photo !!! ", error });
  }
});

router.get("/all", async (req, res) => {
  try {
    const ListPhotos = await Photo.find();
    res.status(200).send({ msg: "This is the list of all Photos", ListPhotos });
  } catch (error) {
    res.status(400).send({ msg: "Can not get Photos !!!", error });
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const photoById = await Photo.findById({ _id });

    res.status(200).send({ msg: "Photo by id found", photoById });
  } catch (error) {
    res.status(400).send({ msg: "Can not get Photo by id!!!", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const OnePhoto = await Boutique.findOne({ _id: req.params.id });
    res.status(200).send({ msg: "This is the one Photo", OnePhoto });
  } catch (error) {
    res.status(400).send({ msg: "Can not get Photo !!!", error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deletePhoto = await Photo.findOneAndDelete({
      _id: req.params.id,
    });
    res.status(200).send({ msg: "Photo is deleted successfully", deletePhoto });
  } catch (error) {
    res.status(400).send({ msg: "Can not delete this Photo!!!", error });
  }
});

router.put("/:_id", upload.single("imageURL"), async (req, res) => {
  try {
    const { _id } = req.params;
    let imageURL = "";
    if (req.file) {
      imageURL = req.file.filename;
    }
    const result = await Photo.findOneAndUpdate(
      { _id },
      { $set: { ...req.body, imageURL } }
    );
    res.status(200).send({ msg: "Photo is updated successfully", result });
  } catch (error) {
    res.status(400).send({ msg: "Can not update this Photo !!!", error });
  }
});

module.exports = router;
