import React, { useEffect } from "react";


import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import AppRoutes from "./components/Routes/Routes";
import Sidebar from "./components/Sidebar/Sidebar";


import { useDispatch } from "react-redux";


import { getCatigories } from "./features/categories/categoriesSlice";
import { getProducts } from "./features/products/productSlice";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCatigories());
    dispatch(getProducts());
  }, [dispatch])

  return (
    <div className="app">
      <Header/>

      <div className="container">
        <Sidebar />
        <AppRoutes/>
      </div>

      <Footer />
    </div>
  )
}
export default App;
