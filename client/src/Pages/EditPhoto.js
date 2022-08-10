import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { editPhoto, getOnePhoto } from "../JS/Actions/photo";

function EditPhoto() {
  const dispatch = useDispatch();
  const [newPhoto, setNewPhoto] = useState({});
  const [file, setFile] = useState(null);
  const OnePhoto = useSelector((state) => state.photoReducer.photoById);
  const match = useMatch("/editPhoto/:id");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewPhoto({ ...newPhoto, [e.target.name]: e.target.value });
  };
  const handlePhoto = (e) => {
    setFile(e.target.files[0]);
  };
  useEffect(() => {
    dispatch(getOnePhoto(match.params.id));
  });
  const handleEdit = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("name", newPhoto.name);
    data.append("imageURL", file);
    dispatch(editPhoto(match.params.id, data));
    navigate(-1);
  };
  return (
    <div style={{ margin: "20%", marginTop: "5%", width: "60%" }}>
      <h1>Edit Photo</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder={`${OnePhoto.name}`}
            name="name"
            value={newPhoto.name || ""}
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
          <Button variant="primary" type="submit" onClick={handleEdit}>
            Edit Photo
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default EditPhoto;
