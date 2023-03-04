import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { openOrCloseCart } from "../redux/cartSlice";

function NavigationBar() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };

  return (
    <Navbar fixed="top" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">FashionStore</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/products">Products</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav className="navbar-nav d-flex flex-row me-1">
          <Nav.Link onClick={() => dispatch(openOrCloseCart(true))}>
            <FaShoppingCart size={30} />
            {getTotalQuantity() !== 0 && (
              <span className="badge rounded-pill badge-notification bg-danger">
                {getTotalQuantity()}
              </span>
            )}
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
