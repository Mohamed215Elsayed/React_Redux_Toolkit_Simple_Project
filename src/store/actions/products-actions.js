export const Add_Product = "Add_Product";
export const Get_Products = "Get_Products";
export const Append_Product = (product) => {
  return {
    type: Add_Product,
    payload: product,
  };
};
export const getAllProducts = (products) => {
  return {
    type: Get_Products,
    payload: products,
  };
};
export const FetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      console.log(data);
      // dispatch({type:Get_Products,payload:data});//=
      dispatch(getAllProducts(data)); //important
    } catch (error) {
      // Handle error
    }
  };
};
