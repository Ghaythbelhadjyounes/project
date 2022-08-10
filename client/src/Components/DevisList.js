import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getDeviss } from "../JS/Actions/devis";
import "./Contact.css";
import DevisCards from "./DevisCard";
function DevisList() {
  const dispatch = useDispatch();
  const ListDeviss = useSelector((state) => state.devisReducer.ListDeviss);
  const load = useSelector((state) => state.devisReducer.load);
  useEffect(() => {
    dispatch(getDeviss());
  }, [dispatch]);

  return (
    <div>
      <h2 class="ui center aligned icon header">List of all Devis</h2>

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
          ListDeviss.map((el) => <DevisCards devis={el} key={el._id} />)
        )}
      </div>
    </div>
  );
}

export default DevisList;
