import React, { useState } from "react";
import {
  Row,
  Col,
  ListGroup,
  Button,
  Container,
  Image,
  ListGroupItem
} from "react-bootstrap";
import Products from "./Data";
import { Link } from "react-router-dom";
const Cart = ({ match }) => {
  const [count, setcount] = useState(0);

  const d = Products.find((d) => d._id === match.params.id);
  return (
    <div>
      <Container className="text-center my-5">
        <Row>
          <Col md={3} style={{ border: "1px solid #eeee" }} className="py-3">
            <Image src={d.image} fluid />
          </Col>
          <Col style={{ border: "1px solid #eeee" }} className="py-5" md={2}>
            <h4>{d.name}</h4>
          </Col>
          <Col style={{ border: "1px solid #eeee" }} className="py-5" md={2}>
            <ListGroup>
              <ListGroupItem>₹{d.price}</ListGroupItem>
              <ListGroupItem>
                RATING <br />
                {d.rating} FROM {d.numReviews}
              </ListGroupItem>
            </ListGroup>
          </Col>
          <Col style={{ border: "1px solid #eeee" }} className="py-5" md={2}>
            <h5>SELECT QTY</h5>
            <br />
            <Button
              onClick={() => setcount(count - 1)}
              size="sm"
              disabled={count == 0}
            >
              -
            </Button>
            <Button size="sm">{count}</Button>
            <Button
              onClick={() => setcount(count + 1)}
              size="sm"
              disabled={count == d.countInStock}
            >
              +
            </Button>
          </Col>
          <Col style={{ border: "1px solid #eeee" }} className="py-5" md={3}>
            TOTAL: ₹{count * d.price} <br />
            <Link to="/Checkout">
              <Button className=" rounded btn-block mt-4" disabled={count == 0}>
                CHECKOUT
              </Button>
            </Link>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
