// import React,{useEffect} from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { Append_Product ,FetchProducts} from "../store/actions/products-actions";
// const Products = () => {
//   const Products = useSelector((state) => state.products);
//   // console.log(Products);
//   const dispatch = useDispatch();
//   useEffect(() => {
//     dispatch(FetchProducts());
//   }, [dispatch]);
//   return (
//     <>
//       <h1>products</h1>
//       <button
//         onClick={() => dispatch(Append_Product({ id: 2, title: "Red Scarf" }))}
//       >
//         Add Product
//       </button>
//       {Products.map((product) => (
//         <div key={product.id}>
//           <h3>{product.title}</h3>
//         </div>
//       ))}
//     </>
//   );
// };

// export default Products;
//=========RTK methods================================
import React,{useEffect} from "react";
import { useSelector, useDispatch } from "react-redux";
import { Append_Product,FetchProducts} from "../slices/products-slice";//
const Products = () => {
  const Products = useSelector((state) => state.products);
  console.log(Products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(FetchProducts());
  }, [dispatch]);
  return (
    <>
      <h1>products</h1>
      <button
        onClick={() => dispatch(Append_Product({ id: 2, title: "Red Scarf" }))}
      >
        Add Product
      </button>
      {Products.map((product) => (
        <div key={product.id}>
          <h3>{product.title}</h3>
        </div>
      ))}
    </>
  );
};

export default Products;

