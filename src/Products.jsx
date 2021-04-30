import React from "react";
import styled from "styled-components";

const Grid = styled.div`
  display: grid;
  grid-template-columns: 100px 100px;
  grid-gap: 20px;
  margin: 0 auto;
`;
const GridItem = styled.div``;

const Products = ({ products }) => {
  return (
    <Grid>
      {products.map((product) => (
        <GridItem key={product.id}>
          <a href={product.url}>
            <img src={product.imageUrl} alt={product.id} />
          </a>
        </GridItem>
      ))}
    </Grid>
  );
};

export default Products;
