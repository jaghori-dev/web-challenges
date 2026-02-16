import { use } from "react";
import useSWR from "swr";
import styled from "styled-components";
import Link from "next/link";
const fetcher = (url) => fetch(url).then((res) => res.json());
export default function HomePage() {
  const { data: products, error, isLoading } = useSWR("/api/products", fetcher);
  if (!products) {
    return <p>loading...</p>;
  }
  return (
    <>
      <h1>Products 🐠</h1>
      <StyledList>
        {products.map((product) => (
          <Card key={product.id}>
            <Link href={`/${product.id}`}>
              <h2>{product.name}</h2>
            </Link>
          </Card>
        ))}
      </StyledList>
    </>
  );
}

export const Card = styled.div`
  padding: 20px;
  border-radius: 14px;
  background: white;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.08);
  transition: 0.2s ease;
  &:hover {
    transform: translateY(-5px);
  }
`;
const StyledList = styled.ul`
  list-style-type: none;
  display: grid;
  gap: 1rem;
  justify-items: center;
  padding: 0;
`;
