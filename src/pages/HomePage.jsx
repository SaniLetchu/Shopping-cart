import React from "react";
import { Container, Image } from "react-bootstrap";

function HomePage() {
  return (
    <Container
      fluid
      className="min-vh-100 pt-5"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1588345921523-c2dcdb7f1dcd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Container className="d-flex p-5 justify-content-center align-items-center">
        <Container className="p-3 justify-content-center align-items-center">
          <h1 className="display-1">
            <strong>Fashion</strong> for <strong>fashionable</strong> people
          </h1>
        </Container>
        <Image
          className="w-50"
          rounded
          fluid
          src="https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80"
        />
      </Container>
    </Container>
  );
}

export default HomePage;
