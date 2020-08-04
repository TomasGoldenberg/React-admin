import React from "react";
import Header from "../Components/Header";
import Features from "../Components/Features";
import Category from "../Components/Category";
import ClientsComponent from "../Components/ClientsComponent";
import "../Assets/styles/containers/Sales.css"


const Clients =()=>{

    return(
        <>
            <Header />
            <div className="body">
                <Features isClients />
                <Category title="Clients">
                    <ClientsComponent/>
                </Category>
            </div>
        </>
    )
}

export default Clients