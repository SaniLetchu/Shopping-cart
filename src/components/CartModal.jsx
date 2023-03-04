import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { openOrCloseCart } from "../redux/cartSlice";

function CartModal() {
  const open = useSelector((state) => state.open);
  const dispatch = useDispatch();

  return (
    <Modal show={open} onHide={() => dispatch(openOrCloseCart(false))}>
      <Modal.Header closeButton>
        <Modal.Title>Modal heading</Modal.Title>
      </Modal.Header>
      <Modal.Body>re reading this text in a modal!</Modal.Body>
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
