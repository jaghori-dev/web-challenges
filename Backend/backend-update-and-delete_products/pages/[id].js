import useSWR, { mutate } from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import ProductForm from "@/components/ProductForm";
import { useState } from "react";
import Button from "@/components/Button";

export default function Product() {
  const [isVisible, setIsVisible] = useState(false);
  const [isConfirm, setIsConfirm] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  // Fetch data from /api/products by id
  const { data: product, isLoading } = useSWR(`/api/products/${id}`);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!product) {
    return;
  }
  // Handle Update Function
  async function handleUpdate(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const updateProduct = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    });
    if (response.ok) {
      mutate(`/api/products/${id}`);
      setIsVisible(false);
    }
  }

  // Handle Delete Functions
  async function handleDelete() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });
    if (response.ok) {
      router.push("/");
    }
  }

  return (
    <ProductCard>
      {isConfirm && (
        <div>
          <p>are you sure delete this product</p>
          <Button onClick={handleDelete}>Delete</Button>
        </div>
      )}
      <Button onClick={() => setIsConfirm(!isConfirm)}>
        {isConfirm ? "Cancel" : "Delete"}
      </Button>
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
