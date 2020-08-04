import React,{useState} from "react";
import Pagination from "./Pagination"
import {connect} from "react-redux";
import ClientsRow from "./ClientsRow";
import "../Assets/styles/components/ClientsComponent.css";
import Search from "./Search";

const ClientsComponent = ({clients,found, isSearching})=>{
    const [currentPage, setCurrentPage]     = useState(1);
    const [itemsPerPage]   = useState(20);  
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = clients.slice(indexOfFirstItem,indexOfLastItem)

    const paginate = (pageNumbers)=>{
        setCurrentPage(pageNumbers)
    }

    return(
        <>
            <div className="clientsComponent">

                <Search component="clients"/>

                <div className="titles">
                    <h2 className="id--clients">ID</h2>
                    <h2 className="name--clients">Name</h2>
                    <h2 className="status--clients">Status</h2>
                    <h2 className="industry--clients">Industry</h2>
                </div>
            </div>
            
            <div>
                {isSearching ?
                    found.map( item =>
                        <ClientsRow key={item.id} {...item} />    
                        )
                    :
                    currentItem.map( item =>
                        <ClientsRow key={item.id} {...item} />    
                        )
                }
            </div>
            <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={clients.length}
            paginate={paginate}
        />
        </>
    )
}

const mapStateToProps = state =>{
    return{
        clients:state.clients,
        found:state.found,
        isSearching: state.isSearching
    }
}

export default connect(mapStateToProps,null)(ClientsComponent);