import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { addDevis } from "../JS/Actions/devis";

function AddDevis() {
  const [newDevis, setNewDevis] = useState({});
  const dispatch = useDispatch();
  const handleChange = (e) => {
    setNewDevis({ ...newDevis, [e.target.name]: e.target.value });
  };
  const add = () => {
    dispatch(addDevis(newDevis));
  };
  const isAuthVisitor = useSelector((state) => state.visitorReducer.isAuthVisitor);
  
  return (
    <div style={{ margin: "20%", marginTop: "5%", width: "60%" }}>
      {isAuthVisitor ? (
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              name="fullName"
              value={newDevis.fullName}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Phone</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter your name"
              name="phone"
              value={newDevis.phone}
              onChange={handleChange}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your mail"
              name="mail"
              value={newDevis.mail}
              onChange={handleChange}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Create your Problem</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter your Problem"
              name="problem"
              value={newDevis.problem}
              onChange={handleChange}
            />
          </Form.Group>

          <Link to="/home">
            <Button variant="primary" type="submit" onClick={() => add()}>
              Add Devis
            </Button>
          </Link>
        </Form>
      ) : null}
    </div>
  );
}

export default AddDevis;
