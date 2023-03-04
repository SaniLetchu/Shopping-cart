import React from "react";
import { Container, Image, Button } from "react-bootstrap";

function HomePage() {
  return (
    <Container
      fluid
      className="min-vh-100 mt-4 pt-5"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="container d-flex justify-contenent-center align-items-center min-vh-100 pb-5">
        <Container className="row gap-5">
          <Container className="col-sm d-flex flex-column gap-2">
            <h1 className="display-1">
              <strong>Fashion</strong> for <strong>fashionable</strong> people
            </h1>
            <Button variant="dark" size="lg" href="/products">
              Shop Now
            </Button>
          </Container>
          <Image
            className="col-sm"
            style={{ width: 500 }}
            rounded
            src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
          />
        </Container>
      </Container>
    </Container>
  );
}

export default HomePage;
