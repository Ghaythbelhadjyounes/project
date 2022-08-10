import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addBoutique } from "../JS/Actions/boutique";

function AddBoutique() {
  const [newBoutique, setNewBoutique] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewBoutique({ ...newBoutique, [e.target.name]: e.target.value });
  };
  const handlePhoto = (e) => {
    setFile(e.target.files[0]);
  };
  const add = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("name", newBoutique.name);
    data.append("prix", newBoutique.prix);
    data.append("imageURL", file);
    dispatch(addBoutique(data));
    navigate(-1);
  };
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  return (
    <div style={{ margin: "20%", marginTop: "5%", width: "60%" }}>
      {isAuthAdmin ? (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="name"
              value={newBoutique.name}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>prix</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your prix"
              name="prix"
              value={newBoutique.prix}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group controlId="formFile" className="mb-3">
            <Form.Label></Form.Label>
            <Form.Control
              type="file"
              onChange={handlePhoto}
              encType="multipart/form-data"
            />
          </Form.Group>

          <Link to="/boutiques">
            <Button variant="primary" type="submit" onClick={add}>
              Add product
            </Button>
          </Link>
        </Form>
      ) : null}
    </div>
  );
}

export default AddBoutique;
