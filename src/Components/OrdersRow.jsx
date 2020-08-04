import React from "react";
import "../Assets/styles/components/OrdersRow.css"
import Modal from "./Modal";


const OrdersRow=({id,title,date,client})=>{

    return(
        <div className="ordersRow">
            <div className="orders__id">
                <p className="orders__data">{id}</p>
            </div>
            <div className="orders__item">
                <p className="orders__data"><strong>{title}</strong></p>
            </div>
            <div className="orders__item">
                <p className="orders__data">{date}</p>
            </div>
            <div className="orders__item">
                <p className="orders__data">{client}</p>
            </div>
            <Modal title={title} date={date} client={client} />

        </div>
    )
}

export default OrdersRow;
