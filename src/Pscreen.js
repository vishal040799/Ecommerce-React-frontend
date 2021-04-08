import React from "react";
import { Row, Col, ListGroup, Button, Container, Image } from "react-bootstrap";
import Products from "./Data";
import { Link } from "react-router-dom";

const Pscreen = ({ match }) => {
  const d = Products.find((d) => d._id === match.params.id);
  return (
    <div className="ml-5">
      <Container>
        <Link to="/">
          <div className="text-center">
            <Button className="m-4 btn-primary">BACK</Button>
          </div>
        </Link>
        <Row className="mt-5">
          <Col md={6}>
            <Image src={d.image} fluid alt />
          </Col>
          <Col md={3}>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <h1>{d.name}</h1>
              </ListGroup.Item>
              <ListGroup.Item>
                {" "}
                {d.rating} from {d.numReviews} Reviews
              </ListGroup.Item>
              <ListGroup.Item>Price: ₹{d.price}</ListGroup.Item>
              <ListGroup.Item>{d.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            <ListGroup className="text-center">
              <ListGroup.Item>
                <Row>
                  <Col>Price:</Col>
                  <Col>₹{d.price}</Col>
                </Row>{" "}
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>Status:</Col>
                  <Col>{d.countInStock > 0 ? "In stock" : "Out of Stock"}</Col>
                </Row>
              </ListGroup.Item>
              {d.countInStock > 0 && (
                <ListGroup.Item>
                  <Row>
                    <Col>Stock:</Col>
                    <Col>{d.countInStock}</Col>
                  </Row>
                </ListGroup.Item>
              )}
              <ListGroup.Item>
                <Link to={`/Cart/${d._id}`}>
                  <Button
                    variant="PRIMARY"
                    className="btn-primary"
                    type="Button"
                    disabled={d.countInstock === 0}
                  >
                    Add To Cart
                  </Button>
                </Link>
              </ListGroup.Item>
            </ListGroup>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Pscreen;
