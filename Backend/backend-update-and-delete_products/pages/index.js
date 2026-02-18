import styled from "styled-components";
import ProductList from "@/components/ProductList";
import ProductForm from "@/components/ProductForm";
import useSWR from "swr";
import { useState } from "react";
import Button from "@/components/Button";

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false);
  const { mutate } = useSWR("/api/products");

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const productData = Object.fromEntries(formData);

    const response = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(productData),
    });

    if (!response.ok) {
      console.error(response.status);
      return;
    }

    mutate();
    event.target.reset();
  }
  return (
    <>
      <Heading>
        <span role="img" aria-label="A fish">
          🐠
        </span>
        Fish Shop
      </Heading>
      <Button onClick={() => setIsVisible(!isVisible)}>
        {" "}
        {isVisible ? "Cancel" : "Add new product"}
      </Button>
      {isVisible && (
        <ProductForm
          onSubmit={handleSubmit}
          formTitle="Add new fish"
          buttonText="ADD"
        />
      )}
      <hr />
      <ProductList />
    </>
  );
}

const Heading = styled.h1`
  text-align: center;
  color: var(--color-nemo);
`;
