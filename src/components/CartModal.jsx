import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { Container, Image } from "react-bootstrap";
import {
  openOrCloseCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/cartSlice";

function CartModal() {
  const open = useSelector((state) => state.open);
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const formatTitle = (title) =>
    title.length <= 14 ? title : `${title.substr(0, 14)}...`;

  const sumPrice = (quantity, price) => (price * quantity).toFixed(2);

  return (
    <Modal show={open} onHide={() => dispatch(openOrCloseCart(false))}>
      <Modal.Header closeButton>
        <Modal.Title>Shopping cart</Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column gap-3">
        {cart.length !== 0 &&
          cart.map(
            (product) =>
              product.quantity !== 0 && (
                <Container className="d-flex">
                  <Image style={{ width: "5rem" }} src={product.img} />
                  <Container className="d-flex flex-column align-items-center justify-content-center">
                    <p className="h4">{formatTitle(product.title)}</p>
                    <p className="h5">
                      {sumPrice(product.quantity, product.price)} €
                    </p>
                    <div className="d-flex gap-3">
                      <Button
                        variant="light"
                        onClick={() => dispatch(decrementQuantity(product.id))}
                      >
                        -
                      </Button>
                      <p>{product.quantity}</p>
                      <Button
                        variant="light"
                        onClick={() => dispatch(incrementQuantity(product.id))}
                      >
                        +
                      </Button>
                    </div>
                  </Container>
                </Container>
              )
          )}
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="secondary"
          onClick={() => dispatch(openOrCloseCart(false))}
        >
          Close
        </Button>
        <Button variant="primary">Checkout</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CartModal;
