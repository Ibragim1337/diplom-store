import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useGetProductQuery } from "../../features/api/apiSlice";
import { ROUTES } from "../../utils/routes";
import Product from "./Product";
import Products from "./Products"
import { useDispatch, useSelector } from "react-redux";
import { getRelatedProducts } from "../../features/products/productSlice";

const SingleProduct = () => {

  const { related } = useSelector(({ products }) => products)

  const dispatch = useDispatch();

  const { id } = useParams();

  const navigate = useNavigate();

  const { data, isLoading, isFetching, isSuccess } = useGetProductQuery({ id });

  useEffect(() => {
    if(!isFetching && !isLoading && !isSuccess){
      navigate(ROUTES.HOME)
    }
  }, [isLoading, isFetching, isSuccess]);

  useEffect(() => {
    if(data) {
      dispatch(getRelatedProducts(data.category.id))
    }
  }, [data])



  return !data ? (
    <section className='preloader'> LOADING</section>
  ) : (
    <div>
      <Product {...data} />
      <Products products={related} amount={5} title='Related Products'/>
    </div>
  )

}

export default SingleProduct;