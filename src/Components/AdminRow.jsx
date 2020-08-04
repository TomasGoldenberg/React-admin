import React from "react"
import Modal from "./Modal";

import "../Assets/styles/components/AdminRow.css";

const AdminRow=({id,title,date,client})=>{

    return(
        <div className="adminRow">
            <div className="admin__id">
                <p className="admin__data">{id}</p>
            </div>
            <div className="admin__item">
                <p className="admin__data"><strong>{title}</strong></p>
            </div>
            <div className="admin__item">
                <p className="admin__data">{date}</p>
            </div>
            <div className="admin__item">
                <p className="admin__data">{client}</p>
            </div>

            <Modal title={title} date={date} client={client} />

        </div>
    )
}

export default AdminRow;