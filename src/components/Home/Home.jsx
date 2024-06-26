import React, { useDebugValue, useEffect } from "react";
import Poster from "../Poster/Poster";
import Products from "../Products/Products";
import { useDispatch, useSelector } from "react-redux";
import Categories from "../Categories/Categories";
import Banner from "../Banner/Banner";
import { filterByPrice } from "../../features/products/productSlice";

const Home = () => {
  const dispatch = useDispatch();
  const { 
    products: { list, filtered },
     categories, } = useSelector(( state ) => state);

  useEffect(() => {
    if (!list.length) return;

    dispatch(filterByPrice(50))
  }, [dispatch, list.length]);

  return (
    <>
    <Poster />
    <Products products={list} amount={5} title='Trending'/>
    <Categories products={categories.list} amount={5} title='Worth to seeing'/>
    <Banner />
    <Products products={filtered} amount={5} title='Less than 50$'/>
    </>
  )
}

export default Home;