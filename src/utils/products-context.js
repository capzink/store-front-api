import axios from "axios";
import React, { useContext, useEffect, useReducer} from "react";
import reducer from "../reducers/products-reducer";
import { products_url as url } from "../utils/constants";


const initialState = {
   isSidebarOpen:false,
   products_error:false,
   products:[],
   featured_products:[],
   single_product_error:false,
   single_product:{},
  

};

const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

const openSidebar = ()=>{
    dispatch({type:'SIDEBAR_OPEN'})
}
const closeSidebar = () => {
  dispatch({ type: "SIDEBAR_CLOSE" });
};
const fetchProducts =async(url) =>{
  try {
    const resp = await axios.get(url);
    const products =resp.data
    dispatch({type:'GET_PRODUCTS_SUCCESS', payload:products})
    
  } catch (error) {
    dispatch({type:'GET_PRODUCT_ERROR'})
    
  }
  
}
const fetchSingleProduct = async(url) => {
  try {
    const resp = await axios.get(url);
    const singleProduct = resp.data;
    dispatch({ type: "GET_SINGLE_PRODUCT_SUCCESS", payload: singleProduct })
  } catch (error) {
    dispatch({ type: "GET_SINGLE_PRODUCT_ERROR" });
  }
};
useEffect(()=>{
  fetchProducts(url)
  
  

},[])

  return (
    <ProductsContext.Provider
      value={{ ...state, openSidebar, closeSidebar, fetchSingleProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext);
};
