import React from "react";
import Header from "../Components/Header";
import Features from "../Components/Features";
import Category from "../Components/Category";
import AdminComponent from "../Components/AdminComponent";


import "../Assets/styles/containers/Admin.css"


const Admin = ()=>{

    return(
    <>
        <Header />
        <div className="body">
            <Features  isAdmin/>
            <Category title="Administrator">
                <AdminComponent />
            </Category>
        </div>


    </>
    )
}

export default Admin