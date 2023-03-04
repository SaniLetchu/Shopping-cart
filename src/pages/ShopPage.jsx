import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import Product from "../components/Product";

function ShopPage() {
  const [products, setProducts] = useState();

  const fetchProducts = async () => {
    const response = await fetch(
      "https://fakestoreapi.com/products/category/women's%20clothing"
    );
    const data = await response.json();
    setProducts(data);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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
      <div className="d-flex flex-wrap gap-5 justify-content-center">
        {products &&
          products.map((product) => (
            <Product
              title={product.title}
              price={product.price}
              img={product.image}
            />
          ))}
      </div>
    </Container>
  );
}

export default ShopPage;
