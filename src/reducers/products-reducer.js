
const products_reducer = (state, action) => {

  if(action.type ==='SIDEBAR_OPEN'){
    return { ...state, isSidebarOpen:true };
  }
  if (action.type === "SIDEBAR_CLOSE") {
    return { ...state, isSidebarOpen: false };
  }
  
 if (action.type === 'GET_PRODUCTS_SUCCESS'){
    const featured_products = action.payload.filter((product)=>product.rating.rate > 4.6)
    return {...state, products:action.payload,featured_products}

 }
 if(action.type === 'GET_PRODUCT_ERROR'){
   return {...state, products_error:true}
 }

 if (action.type === "GET_SINGLE_PRODUCT_SUCCESS"){
   return {...state, single_product:action.payload}
 }

  if (action.type === "GET_SINGLE_PRODUCT_ERROR") {
    return {
      ...state,
      single_product_error: true,
    };
  }


   throw new Error(`No Matching "${action.type}" - action type`);
}

export default products_reducer