import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Todo from "./Todo";

function Home() {
  return (
    <>
    {/* <Todo/> */}
      <Container>
        <Row>
          <Col sm={8}> </Col>
          <Col sm={4}> </Col>
        </Row>
        <Row>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
          <Col sm>sm=true</Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
