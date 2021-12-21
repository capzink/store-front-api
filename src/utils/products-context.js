import axios from "axios";
import React, { useContext, useEffect, useReducer } from "react";
import reducer from "../reducers/products_reducer";
import { products_url as url } from "../utils/constants";


const initialState = {};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer()
  return (
    <ProductsContext.Provider value="products context">
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
