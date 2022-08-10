import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Button, Card, Image } from "semantic-ui-react";
import { deleteBoutique } from "../JS/Actions/boutique";

function BoutiqueCards({ boutique }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  return (
    <div>
      <Card>
        <Image src={`uploads/${boutique.imageURL}`} wrapped ui={false} />

        <Card.Content>
          <Card.Header>Name : {boutique.name}</Card.Header>
          <Card.Meta>
            <span className="date">prix : {boutique.prix}</span>
          </Card.Meta>
        </Card.Content>
        {isAuthAdmin ? (
          <Button.Group>
            <Button onClick={() => dispatch(deleteBoutique(boutique._id))}>
              delete
            </Button>
            <Button.Or />
            <Button
              positive
              onClick={() => navigate(`/editBoutique/${boutique._id}`)}
            >
              Edit
            </Button>
          </Button.Group>
        ) : null}
      </Card>
    </div>
  );
}

export default BoutiqueCards;
