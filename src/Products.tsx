import React from "react";
import styled from "styled-components";

const Grid = styled.div``;
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
