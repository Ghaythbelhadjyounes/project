import React from "react";
import { useSelector } from "react-redux";

import { Card, Image } from "semantic-ui-react";

function Profile() {
  const user = useSelector((state) => state.userReducer.user);
  const admin = useSelector((state) => state.adminReducer.admin);
  const visitor = useSelector((state) => state.visitorReducer.visitor);

  return (
    <div style={{ textAlign: "center" }}>
      <Card>
        <Image
          src="https://react.semantic-ui.com/images/avatar/large/matthew.png"
          wrapped
          ui={false}
        />

        <Card.Content>
          <Card.Header>
            {user && user.name} {admin && admin.name} {visitor && visitor.name}
          </Card.Header>
          <Card.Meta>
            <span className="date">
              {user && user.email} {admin && admin.email}
              {visitor && visitor.email}
            </span>
          </Card.Meta>
          <Card.Description>
            {user && user.phone} {admin && admin.phone}
            {visitor && visitor.phone}
          </Card.Description>
        </Card.Content>
      </Card>
    </div>
  );
}

export default Profile;
