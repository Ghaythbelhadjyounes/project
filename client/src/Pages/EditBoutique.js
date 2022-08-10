import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { editBoutique, getOneBoutique } from "../JS/Actions/boutique";

function EditBoutique() {
  const dispatch = useDispatch();
  const [newBoutique, setNewBoutique] = useState({});
  const [file, setFile] = useState(null);
  const OneBoutique = useSelector(
    (state) => state.boutiqueReducer.boutiqueById
  );
  const match = useMatch("/editBoutique/:id");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewBoutique({ ...newBoutique, [e.target.name]: e.target.value });
  };
  const handlePhoto = (e) => {
    setFile(e.target.files[0]);
  };
  useEffect(() => {
    dispatch(getOneBoutique(match.params.id));
  });
  const handleEdit = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("name", newBoutique.name);
    data.append("prix", newBoutique.prix);
    data.append("imageURL", file);
    dispatch(editBoutique(match.params.id, data));
    navigate(-1);
  };
  return (
    <div style={{ margin: "20%", marginTop: "5%", width: "60%" }}>
      <h1>Edit Boutique</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder={`${OneBoutique.name}`}
            name="name"
            value={newBoutique.name || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Price</Form.Label>
          <Form.Control
            type="number"
            placeholder={`${OneBoutique.prix}`}
            name="prix"
            value={newBoutique.prix || ""}
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

        <Link to="/boutique">
          <Button variant="primary" type="submit" onClick={handleEdit}>
            Edit Boutique
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default EditBoutique;
