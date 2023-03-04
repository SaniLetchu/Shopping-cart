/* eslint-disable react/prop-types */
import React from "react";
import { Card, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

function Product({ id, title, price, img }) {
  const dispatch = useDispatch();
  return (
    <Card style={{ width: "18rem" }}>
      <Card.Body className="d-flex justify-content-center align-items-center p-4">
        <Card.Img style={{ width: "10rem" }} src={img} />
      </Card.Body>
      <Card.Footer className="d-flex flex-column gap-2">
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{price} €</Card.Subtitle>
        <Button
          variant="dark"
          onClick={() =>
            dispatch(
              addToCart({
                id,
                title,
                img,
                price,
              })
            )
          }
        >
          Add to cart
        </Button>
      </Card.Footer>
    </Card>
  );
}

export default Product;
