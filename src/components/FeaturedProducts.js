import React from "react";
import { useProductsContext } from "../utils/products-context";
import styled from "styled-components";
import Error from "./Error";
import Product from "./Product";

const FeaturedProducts = () => {
    const {products_error:error,featured_products:featured} = useProductsContext()
    if(error){
        return <Error/>
    }
  return (
      <Wrapper>
          <div className="title">
              <h2>Featured products</h2>
              <div className="underline"></div>
          </div>
          <div className="section-center featured">
              {featured.slice(0,3).map(product=>{
                  return <Product key={product.id}{...product}/>
              })}
          
          </div>
      </Wrapper>
  )
};

const Wrapper = styled.section`
  .featured {
    margin-bottom:5rem;
    display: grid;
    gap: 2.5rem;
    img {
      height: 225px;
    }
  }
  .btn {
    display: block;
    width: 148px;
    margin: 0 auto;
    text-align: center;
  }
  @media (min-width: 576px) {
    .featured {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
`;

export default FeaturedProducts;
