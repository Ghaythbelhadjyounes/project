import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getContacts } from "../JS/Actions/contact";
import ContactCards from "./ContactCards";

import { Link } from "react-router-dom";
import "./Contact.css";
function ContactList() {
  const dispatch = useDispatch();
  const ListContacts = useSelector(
    (state) => state.contactReducer.ListContacts
  );
  const load = useSelector((state) => state.contactReducer.load);
  useEffect(() => {
    dispatch(getContacts());
  }, [dispatch]);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);

  return (
    <div>
      <h2 className="ui center aligned icon header">
        <i className="circular users icon"></i>
        List of all Techniciens
      </h2>
      {isAuthAdmin ? (
        <Link to={"/add"}>
          {" "}
          <div class="ui teal labeled icon button">
            Create New Technicien
            <i class="add icon"></i>
          </div>
        </Link>
      ) : null}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          // marginLeft: "20%",
          marginTop: "2%",
        }}
      >
        {load ? (
          <Spinner animation="border" variant="primary" />
        ) : (
          ListContacts.map((el) => <ContactCards contact={el} key={el._id} />)
        )}
      </div>
    </div>
  );
}

export default ContactList;
