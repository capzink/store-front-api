import React, { useState } from "react";
import styled from "styled-components";

const ProductImages = ({product}) => {
    const {image} = product
  return (
    <Wrapper>
        <img src={image} alt="" className="main"/>
    </Wrapper>
  )
};

const Wrapper = styled.section`
  .main {
    height: 300px;
  }
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    object-fit: contain;
  }

  .active {
    box-shadow: 0px 0px 0px 2px var(--clr-primary-5);
  }
  @media (max-width: 576px) {
    .main {
      height: 300px;
    }
    .gallery {
      img {
        height: 50px;
      }
    }
  }
  @media (min-width: 992px) {
    .main {
      height: 500px;
    }
    .gallery {
      img {
        height: 75px;
      }
    }
  }
`;

export default ProductImages;
