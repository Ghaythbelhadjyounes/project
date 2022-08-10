import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card } from "semantic-ui-react";
import { deleteDevis } from "../JS/Actions/devis";

function DevisCards({ devis }) {
  const dispatch = useDispatch();

  const isAuthAdmin = useSelector((state) => state.adminReducer.isAuthAdmin);
  return (
    <div>
      <Card>
        <Card.Content>
          <Card.Header>{devis.fullName}</Card.Header>
          <Card.Meta>
            <span className="date">{devis.mail} Years Old</span>
          </Card.Meta>
          <Card.Description>Phone : {devis.phone}</Card.Description>
          <Card.Header>{devis.problem}</Card.Header>
        </Card.Content>
        {isAuthAdmin ? (
          <Button.Group>
            <Button onClick={() => dispatch(deleteDevis(devis._id))}>
              delete
            </Button>
          </Button.Group>
        ) : null}
      </Card>
    </div>
  );
}

export default DevisCards;
