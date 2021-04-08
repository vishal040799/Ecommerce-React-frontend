import React from "react";
import Typed from "react-typed";
import products from "./Data";
import Cards from "./Cards";
import { Row, Col, Container } from "react-bootstrap";

const Home = () => {
  const lrr = ["Mobiles", "Electronics", "Videogames", "Cameras", "Headphones"];

  return (
    <div>
      <h1 className="text-center my-2">
        Latest <Typed strings={lrr} typespeed={500} />
      </h1>
      <Container>
        <Row>
          {products.map((d) => (
            <Col className="" lg={4} md={6} sm={12}>
              <Cards d={d} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default Home;
