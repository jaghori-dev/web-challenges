import useSWR, { mutate } from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import ProductForm from "@/components/ProductForm";
import { useState } from "react";
import Button from "@/components/Button";

export default function Product() {
  const [isVisible, setIsVisible] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const { data: product, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!product) {
    return;
  }
  async function handleUpdate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updateProduct = Object.fromEntries(formData);

    console.log("handle update", updateProduct);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    });
    if (response.ok) {
      mutate(`/api/products/${id}`);
      setIsVisible(false)
    }
    
  }

  return (
    <ProductCard>
      <h2>{product.name}</h2>
      <p>Description: {product.description}</p>
      <p>
        Price: {product.price} {product.currency}
      </p>
      <StyledLink href="/">Back to all</StyledLink>
      <Button onClick={() => setIsVisible(!isVisible)}>
        {isVisible ? "cancel" : "Edit"}
      </Button>
      {isVisible && (
        <ProductForm
          onSubmit={handleUpdate}
          formTitle="Edit product"
          defaultDescription={product.description}
          defaultName={product.name}
          defaultPrice={product.price}
          buttonText="Update"
        />
      )}
    </ProductCard>
  );
}

const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
