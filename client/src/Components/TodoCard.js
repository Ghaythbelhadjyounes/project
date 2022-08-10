import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button } from "semantic-ui-react";
import { deleteTodo } from "../JS/Actions/todo";

function TodoCard({ todo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  return (
    <div>
      <h1>{todo.title}</h1>
    {isAuthAdmin?(
      <Button.Group>
        <Button onClick={() => dispatch(deleteTodo(todo._id))}>delete</Button>
        <Button.Or />
        <Button positive onClick={() => navigate(`/editTodo/${todo._id}`)}>
          Edit
        </Button>
      </Button.Group>
      ) : null}
    </div>
  );
}

export default TodoCard;
