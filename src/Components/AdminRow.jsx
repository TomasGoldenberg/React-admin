import React from "react"

import "../Assets/styles/components/AdminRow.css";

const AdminRow=({id,title,body})=>{

    return(
        
        <div className="adminRow">
            <div className="admin__id">
                <p className="admin__data">{id}</p>
            </div>
            <div className="admin__item">
                <p className="admin__data"><strong>{title}</strong></p>
            </div>
            <div className="admin__item">
                <p className="admin__data">{body}</p>
            </div>
  

           

        </div>
    )
}

export default AdminRow;