import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useMatch, useNavigate } from "react-router-dom";
import { editContact, getOneContact } from "../JS/Actions/contact";

function Edit() {
  const dispatch = useDispatch();
  const [newContact, setNewContact] = useState({});
  const [file, setFile] = useState(null);
  const OneContact = useSelector((state) => state.contactReducer.contactById);
  const match = useMatch("/edit/:id");
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };
  const handlePhoto = (e) => {
    setFile(e.target.files[0]);
  };
  useEffect(() => {
    dispatch(getOneContact(match.params.id));
  });
  const handleEdit = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("name", newContact.name);
    data.append("age", newContact.age);
    data.append("functionality", newContact.functionality);
    data.append("phone", newContact.phone);
    data.append("imageURL", file);
     dispatch(editContact(match.params.id, data));
    navigate(-1);
  };
  return (
    <div style={{ margin: "20%", marginTop: "5%", width: "60%" }}>
      <h1>Edit Contact</h1>

      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder={`${OneContact.name}`}
            name="name"
            value={newContact.name || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder={`${OneContact.age}`}
            name="age"
            value={newContact.age || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            placeholder={`${OneContact.phone}`}
            name="phone"
            value={newContact.phone || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>functionality</Form.Label>
          <Form.Control
            type="text"
            placeholder={`${OneContact.functionality}`}
            name="functionality"
            value={newContact.functionality || ""}
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
        <Link to="/users">
          <Button variant="primary" type="submit" onClick={handleEdit}>
            Edit Contact
          </Button>
        </Link>
      </Form>
    </div>
  );
}

export default Edit;
