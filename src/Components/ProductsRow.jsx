import React from "react";
import "../Assets/styles/components/ProductsRow.css"
import Modal from "./Modal";

const ProductRow =({id,name,stock,price}) => {

    return(
        <div className="productsRow">
            <div className="products__id">
                <p className="products__data">{id}</p>
            </div>
            <div className="products__item">
                <p className="products__data"><strong>{name}</strong></p>
            </div>
            <div className="products__item">
                <p className="products__data">{stock}</p>
            </div>
            <div className="products__item">
                <p className="products__data">${price}</p>
            </div>
            <Modal name={name} price={price} status={stock}/>

        </div>
    )
}

export default ProductRow;