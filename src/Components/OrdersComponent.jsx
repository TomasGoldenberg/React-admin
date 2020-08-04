import React,{useState} from "react";
import Pagination from "./Pagination"
import {connect} from "react-redux";
import OrdersRow from "./OrdersRow";
import "../Assets/styles/components/OrdersComponent.css"
import Search from "./Search";

const OrdersComponent = ({orders,found,isSearching})=>{


    const [currentPage, setCurrentPage]     = useState(1);
    const [itemsPerPage]   = useState(20);  
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = orders.slice(indexOfFirstItem,indexOfLastItem)

    const paginate = (pageNumbers)=>{
        setCurrentPage(pageNumbers)
    }

    return(
        <>
        <div className="salesComponent">
            <Search component="orders"/>
            <div className="titles">
                <h2 className="id">Id</h2>
                <h2 className="title">Title</h2>
                <h2 className="date">Date</h2>
                <h2 className="client">Client</h2>
            </div>
        </div>
        <div>
        {isSearching ?
            found.map(item =>
            <OrdersRow key={item.id} {...item} />    )
            :
            currentItem.map(item =>
            <OrdersRow key={item.id} {...item} />    )
        }

        </div>
        <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={orders.length}
            paginate={paginate}
        />
        </>
    )
}

const mapStateToProps = state =>{
    return{
        orders:state.orders,
        found:state.found,
        isSearching: state.isSearching
    }
}

export default connect(mapStateToProps,null)(OrdersComponent);