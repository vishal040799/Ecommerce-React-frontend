import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const Cards = ({ d }) => {
  return (
    <div>
      <Card className="m-3" style={{ width: "18rem" }}>
        <Link to={`/Pscreen/${d._id}`}>
          <Card.Img variant="top" src={d.image} />
        </Link>
        <Card.Body className="text-center">
          <Link to={`/Pscreen/${d._id}`}>
            <Card.Title>{d.name}</Card.Title>
          </Link>
          <Card.Text></Card.Text>
          <Link to={`/Pscreen/${d._id}`}>
            <Button variant="PRIMARY" className="btn-primary">
              Add To Cart
            </Button>
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Cards;
