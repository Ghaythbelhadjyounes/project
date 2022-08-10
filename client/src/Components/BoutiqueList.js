import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getBoutiques } from "../JS/Actions/boutique";
import BoutiqueCards from "./BoutiqueCards";
function BoutiqueList() {
  const dispatch = useDispatch();
  const ListBoutiques = useSelector(
    (state) => state.boutiqueReducer.ListBoutiques
  );
  const load = useSelector((state) => state.boutiqueReducer.load);
  useEffect(() => {
    dispatch(getBoutiques());
  }, [dispatch]);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);

  return (
    <div>
      <h1>Products List</h1>
      {isAuthAdmin ?(
      <Link to={'/addBoutique'}> <div class="ui teal labeled icon button">
    Create New Product
    <i class="add icon"></i>
  </div></Link> ) : null}
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-around",
          marginTop: "2%",
        }}
      >
        {load ? (
          <Spinner animation="border" variant="primary" /> 
        ) : (
          ListBoutiques.map((el) => (
            <BoutiqueCards boutique={el} key={el._id} />
          ))
        )}
      </div>
    </div>
  );
}

export default BoutiqueList;
