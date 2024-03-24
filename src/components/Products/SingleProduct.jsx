import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/apiSlice";
import { ROUTES } from "../../utils/routes";

const SingleProduct = () => {

  const { id } = useParams();

  const navigate = useNavigate();

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

  useEffect(() => {
    if(!isFetching && !isLoading && !isSuccess){
      navigate(ROUTES.HOME)
    }
  }, [isLoading, isFetching, isSuccess])

  console.log(isLoading);
  console.log(data);

  return <div>Single product </div>

}

export default SingleProduct;