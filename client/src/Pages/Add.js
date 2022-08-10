import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate} from "react-router-dom";
import { addContact, getContacts } from "../JS/Actions/contact";

function Add() {

  const [newContact, setNewContact] = useState({});
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewContact({ ...newContact, [e.target.name]: e.target.value });
  };
  const handlePhoto = (e) => {
    setFile(e.target.files[0]);
  };
  const handleAdd = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("name", newContact.name);
    data.append("age", newContact.age);
    data.append("functionality", newContact.functionality);
    data.append("phone", newContact.phone);
    data.append("imageURL", file);
    dispatch(addContact(data));
    navigate(-1)
  };
  useEffect(() => {
    dispatch(getContacts());
  });

  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  return (
    <div style={{ margin: "20%", marginTop: "5%", width: "60%" }}>
    {isAuthAdmin ? (
      <Form onSubmit={handleAdd}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            value={newContact.name || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your age"
            name="age"
            value={newContact.age || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter your phone "
            name="phone"
            value={newContact.phone || ""}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>functionality</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your functionality "
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
          <Button variant="primary" onClick={handleAdd}>
            Add Contact
          </Button>
        </Link>
      </Form>
    ) : null }
    </div>
  );
}

export default Add;
