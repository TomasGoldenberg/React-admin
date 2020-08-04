import React from "react";
import Header from "../Components/Header";
import Features from "../Components/Features";
import Category from "../Components/Category";
import ProductsComponent from "../Components/ProductsComponent";
import "../Assets/styles/containers/Sales.css"

const Products =()=>{

    return(
        <>
            <Header />
            <div className="body">
                <Features isProducts/>
                <Category title="Products">
                    <ProductsComponent />
                </Category>
            </div>
        </>
    )
}

export default Products