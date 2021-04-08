import React from "react";
import {
  InputGroup,
  FormControl,
  Form,
  Col,
  Container,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
const Checkout = () => {
  return (
    <div>
      <Container className="my-5">
        <h1 className="text-center my-4">Checkout form</h1>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon1">@</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl
            placeholder="Name"
            aria-label="Username"
            aria-describedby="basic-addon1"
          />
        </InputGroup>

        <InputGroup className="mb-3">
          <FormControl
            placeholder="Recipient's Email"
            aria-label="Recipient's username"
            aria-describedby="basic-addon2"
          />
          <InputGroup.Append>
            <InputGroup.Text id="basic-addon2">Email</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>

        <Form>
          <Form.Row className="align-items-center">
            <Col sm={6} className="mb-3">
              <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly>
                Username
              </Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Mobile</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inlineFormInputGroupUsername"
                  placeholder="Mobile"
                />
              </InputGroup>
            </Col>
            <Col sm={6} className="mb-3">
              <Form.Label htmlFor="inlineFormInputGroupUsername" srOnly>
                Username
              </Form.Label>
              <InputGroup>
                <InputGroup.Prepend>
                  <InputGroup.Text>Mobile</InputGroup.Text>
                </InputGroup.Prepend>
                <FormControl
                  id="inlineFormInputGroupUsername"
                  placeholder=" Alternate Mobile"
                />
              </InputGroup>
            </Col>
          </Form.Row>
        </Form>
        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text id="basic-addon3">
              https://example.com/users/
            </InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl id="basic-url" aria-describedby="basic-addon3" />
        </InputGroup>

        <InputGroup className="mb-3">
          <InputGroup.Prepend>
            <InputGroup.Text>$</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl aria-label="Amount (to the nearest dollar)" />
          <InputGroup.Append>
            <InputGroup.Text>.00</InputGroup.Text>
          </InputGroup.Append>
        </InputGroup>

        <InputGroup>
          <InputGroup.Prepend>
            <InputGroup.Text>Address</InputGroup.Text>
          </InputGroup.Prepend>
          <FormControl as="textarea" aria-label="With textarea" />
        </InputGroup>
        <Link to="/End">
          <Button className="btn-block my-4">Submit</Button>
        </Link>
      </Container>
    </div>
  );
};

export default Checkout;
