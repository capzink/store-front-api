import React, { useEffect } from "react";
import { useParams, useHistory } from "react-router-dom";
import { useProductsContext } from "../utils/products-context";
import { products_url as url } from "../utils/constants";
import {
  Error,
  ProductImages,
  Stars,
} from "../components";
import styled from "styled-components";
import { Link } from "react-router-dom";

const SingleProductPage = () => {
  const {id} = useParams()
  const history =useHistory()
  const {single_product_error:error, single_product : product, fetchSingleProduct } = useProductsContext()
 
  useEffect(()=>{
    fetchSingleProduct(`${url}/${id}`);
   

  },[id])
  useEffect(()=>{
    if(error){
      setTimeout(()=>{
        history.push('/')
      },3000)
    }
  },[error])

  if(error){
    return <Error/>
  }
  const {id:product_id,image,title,price,rating,description}= product

  return (
    <Wrapper>
      <div className="section section-center page">
        <Link to='/products' className="btn">
          Back to products
        </Link>
        <div className="product-center">
          <ProductImages/>
          <section className="content">
            <h2>{title}</h2>
            
          </section>
        </div>
      </div>
    </Wrapper>
  )
};


const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }
  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`;

export default SingleProductPage;
