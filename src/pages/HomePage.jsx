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
      <Container className="d-flex flex-wrap p-5 justify-content-center align-items-center">
        <Container className="d-flex flex-column p-3 w-50 w-md-50 justify-content-center align-items-center">
          <h1 className="display-1 text-center">
            <strong>Fashion</strong> for <strong>fashionable</strong> people
          </h1>
          <Button variant="dark" size="lg" href="/products">
            Shop Now
          </Button>
        </Container>
        <Image
          style={{ width: 500 }}
          rounded
          fluid
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        />
      </Container>
    </Container>
  );
}

export default HomePage;
