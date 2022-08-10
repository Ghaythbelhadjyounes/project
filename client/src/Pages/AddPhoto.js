import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addPhoto } from "../JS/Actions/photo";

function AddPhoto() {
  const [newPhoto, setNewPhoto] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewPhoto({ ...newPhoto, [e.target.name]: e.target.value });
  };
  const handlePhoto = (e) => {
    setFile(e.target.files[0]);
  };
  const add = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("name", newPhoto.name);
    data.append("imageURL", file);
    dispatch(addPhoto(data));
    navigate(-1)
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
              value={newPhoto.name}
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

          <Link to="/photo">
            <Button variant="primary" type="submit" onClick={add}>
              Add photo
            </Button>
          </Link>
        </Form>
      ) : null}
    </div>
  );
}

export default AddPhoto;
