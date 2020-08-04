import React from "react";
import Header from "../Components/Header";
import Features from "../Components/Features";
import Category from "../Components/Category";
import OrdersComponent from "../Components/OrdersComponent";
import "../Assets/styles/containers/Sales.css"

const Orders = ()=>{

    return(
    <>
        <Header />
        <div className="body">
        <Features isOrders/>
        <Category title="Orders">
            <OrdersComponent />
        </Category>
            
       
        </div>


    </>
    )
}

export default Orders