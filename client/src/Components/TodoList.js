import React, { useEffect, useState } from "react";
import { Button, Form, Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, getTodos } from "../JS/Actions/todo";
import TodoCard from "./TodoCard";
import "./Contact.css";

function TodoList() {
  const dispatch = useDispatch();
  const [newTodo, setNewTodo] = useState({});
  const ListTodos = useSelector((state) => state.todoReducer.ListTodos);
  const handleChange = (e) => {
    setNewTodo({ ...newTodo, [e.target.name]: e.target.value });
  };
  const load = useSelector((state) => state.todoReducer.load);

  const handleAdd = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("title", newTodo.title);
    dispatch(addTodo(data));
  };
  
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);
  return (
    <div>
      <h2 style={{color:"black"}}>List of all Todos</h2>

      <Button variant="primary" onClick={handleAdd}>
        Create New Item
        <i className="add icon"></i>
      </Button>
      <Form.Group className="mb-3" controlId="formBasicEmail" style={{marginTop:"3%"}}>
        
        <Form.Control
          type="text"
          placeholder="Enter your item"
          name="title"
          value={newTodo.title || ""}
          onChange={handleChange}
          style={{ marginLeft: "30%",  width: "40%"}}
        />
      </Form.Group>

      <div
        style={{
          display: "block",
          flexWrap: "wrap",
          justifyContent: "space-around",
          backgroundColor:"#93f1c2",
          marginTop: "2%",
          marginLeft: "30%",  
          width: "40%",
          borderRadius:"10%"
        }}
      >
        {load ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          ListTodos.map((el) => <TodoCard todo={el} key={el._id} />)
        )}
      </div>
    </div>
  );
}

export default TodoList;
