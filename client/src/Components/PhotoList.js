import React, { useEffect } from "react";
import { Spinner } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getPhotos } from "../JS/Actions/photo";
import PhotoCards from "./PhotoCards";
function PhotoList() {
  const dispatch = useDispatch();
  const ListPhotos = useSelector((state) => state.photoReducer.ListPhotos);
  const load = useSelector((state) => state.photoReducer.load);
  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  return (
    <div>
      <h1>Photos List</h1>
      {isAuthAdmin ? (
        <Link to={"/addPhoto"}>
          {" "}
          <div class="ui teal labeled icon button">
            Create New Photo
            <i class="add icon"></i>
          </div>
        </Link>
      ) : null}
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
          ListPhotos.map((el) => <PhotoCards photo={el} key={el._id} />)
        )}
      </div>
    </div>
  );
}

export default PhotoList;
