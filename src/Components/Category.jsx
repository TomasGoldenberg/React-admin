import React from "react";
import "../Assets/styles/components/Category.css";

const Category =({children, title})=>{

    return(
    <div className="category">
        
        <div className="category__title">{title}</div>
        
            <div className="children">
                {children}
            </div>
    </div>)
}

export default Category;
