const express = require("express");
const Todo = require("../models/Todo");
const router = express.Router();
// const isAuthAdmin = require("../middleware/isAuthAdmin");
router.post("/add", async (req, res) => {
  try {
    const { name, age, functionality, phone } = req.body;
    const newTodo = new Todo({
      name,
      age,
      functionality,
      phone,
    });
    await newTodo.save();
    res.status(200).send({ msg: " todo added succesfuly...", newTodo });
  } catch (error) {
    res.status(400).send({ msg: "can not add Todo !!! ", error });
  }
});

router.get("/all", async (req, res) => {
  try {
    const ListTodos = await Todo.find();
    res.status(200).send({ msg: "This is the list of all Todos", ListTodos });
  } catch (error) {
    res.status(400).send({ msg: "Can not get Todos !!!", error });
  }
});

router.get("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const todoById = await todo.findById({ _id });

    res.status(200).send({ msg: "todo by id found", todoById });
  } catch (error) {
    res.status(400).send({ msg: "Can not get todo by id!!!", error });
  }
});

router.get("/:id", async (req, res) => {
  try {
    const OneTodo = await Todo.findOne({ _id: req.params.id });
    res.status(200).send({ msg: "This is the one Todo", OneTodo });
  } catch (error) {
    res.status(400).send({ msg: "Can not get Todo !!!", error });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    const deleteTodo = await Todo.findOneAndDelete({
      _id: req.params.id,
    });
    res.status(200).send({ msg: "Todo is deleted successfully", deleteTodo });
  } catch (error) {
    res.status(400).send({ msg: "Can not delete this Todo !!!", error });
  }
});

router.put("/:_id", async (req, res) => {
  try {
    const { _id } = req.params;
    const result = await Todo.findOneAndUpdate(
      { _id },
      { $set: { ...req.body } }
    );
    res.status(200).send({ msg: "Todo is updated successfully", result });
  } catch (error) {
    res.status(400).send({ msg: "Can not update this Todo !!!", error });
  }
});

module.exports = router;
