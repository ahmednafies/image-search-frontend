import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 8rem 8rem;
  grid-gap: 0.5rem 2rem;
  margin: 0 auto;
`;
const GridItem = styled.div``;

const Products = ({ products }) => {
  return (
    <Grid>
      {products.map((product) => (
        <GridItem key={product.id}>
          <a href={product.url}>
            <img
              className="object-cover h-32 w-32 max-w-none rounded-md"
              src={product.image_url}
              alt={product.id}
            />
          </a>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Products;
