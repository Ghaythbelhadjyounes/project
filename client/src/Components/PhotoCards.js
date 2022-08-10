import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import { deletePhoto } from "../JS/Actions/photo";

function PhotoCards({ photo }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  return (
    <div>
      <Card>
        <Image src={`uploads/${photo.imageURL}`} wrapped ui={false} />

        <Card.Content>
          <Card.Header>{photo.name}</Card.Header>
        </Card.Content>
        {isAuthAdmin ? (
          <Button.Group>
            <Button onClick={() => dispatch(deletePhoto(photo._id))}>
              delete
            </Button>
            <Button.Or />
            <Button
              positive
              onClick={() => navigate(`/editPhoto/${photo._id}`)}
            >
              Edit
            </Button>
          </Button.Group>
        ) : null}
      </Card>
    </div>
  );
}

export default PhotoCards;
