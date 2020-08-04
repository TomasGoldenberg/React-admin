import React from "react";
import "../Assets/styles/components/ClientsRow.css"
import Modal from "./Modal";


const ClientsRow= ({id, status, name, industry})=>{
    return(
        <div className="clientsRow">
            <div className="clients__id">
                <p className="clients__data">{id}</p>
            </div>
            <div className="clients__item">
                <p className="clients__data"><strong>{name}</strong></p>
            </div>
            <div className="clients__item">
                <p className="clients__data">{status}</p>
            </div>
            <div className="clients__item">
                <p className="clients__data">{industry}</p>
            </div>

            <Modal name={name} industry={industry} status={status}/>

        </div>
    )
}

export default ClientsRow