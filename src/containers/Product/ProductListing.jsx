import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchProducts } from "../../redux/actions/HelperActions";
import ProductComponent from "./ProductComponent";

const ProductListing = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]); // Include 'dispatch' in the dependency array

  return (
    <div className="ProductListing">
      <ProductComponent />
    </div>
  );
};

export default ProductListing;
