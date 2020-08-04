import React from "react";
import Header from "../Components/Header";
import Features from "../Components/Features";
import Category from "../Components/Category";
import SalesComponent from "../Components/SalesComponent";
import "../Assets/styles/containers/Sales.css"

const Sales = ()=>{

    return(
    <>
        <Header />
        <div className="body">
        <Features isSales />
        <Category title="Sales">
            <SalesComponent />
        </Category>
            
       
        </div>


    </>
    )
}

export default Sales