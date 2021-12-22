import React from "react";
import { useProductsContext } from "../utils/products-context";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {

  const { products } =
    useProductsContext();
    console.log(products)

  return (
  <GridView products ={products}>productlist</GridView>)
};

export default ProductList;
