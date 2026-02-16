import { useRouter } from "next/router";
import useSWR from "swr";
import styled from "styled-components";
import Link from "next/link";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function Details() {
  const router = useRouter();
  const { id } = router.query;
  if (!id) {
    return <p>loading...</p>;
  }
  const { data: product, error } = useSWR(id ? `/api/products/${id}` : null, fetcher);
  if(!product){
    return <p>loading...</p>
  }
  console.log(product);
  console.log(id);
  return(
    <>
    <ProductCard>
    <StyledHeading>{product.name}</StyledHeading>
    <p>{product.category}</p>
    <p>{product.description}</p>
    <Price>{product.price}{product.currency}</Price>
    <StyledLink href='/' > Back to products</StyledLink>
    </ProductCard>
    </>
  )
}
export const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
  color: inherit;
  border: none;
  background: var(--color-water-10);
  font-size: larger;
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);

  &:hover {
    cursor: pointer;
  }

  &:visited {
    color: inherit;
  }
`
const StyledHeading = styled.h2`
  text-align: center;
  color: var(--color-nemo);
`;
const Price = styled.p`
  color: #10b981;
  background: #ecfdf5;
`;