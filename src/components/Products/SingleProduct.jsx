import React from "react";
import { useParams } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/apiSlice";

const SingleProduct = () => {

  const { id } = useParams();

  const { data } = useGetProductQuery({ id });

  console.log(data);

  return (
    <div>
      Single product 
    </div>
  )
}

export default SingleProduct;