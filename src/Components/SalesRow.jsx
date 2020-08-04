import React from "react";
import "../Assets/styles/components/SalesRow.css";
import Modal from "./Modal";


const SalesRow=({id,date,client,total})=>{

    return(
        <div className="salesRow">
            <div className="sales__id">
                <p className="admin__data">{id}</p>
            </div>
            <div className="admin__item">
                <p className="admin__data">{date}</p>
            </div>
            <div className="admin__item">
                <p className="admin__data">{client}</p>
            </div>
            <div className="admin__item">
                <p className="admin__data">$ <strong>{total}</strong> </p>
            </div>
            <Modal name={client} date={date} total={total}/>

        </div>
    )
}

export default SalesRow;