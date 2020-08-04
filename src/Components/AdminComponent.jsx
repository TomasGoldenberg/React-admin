import React , {useState} from "react";
import {connect} from "react-redux"
import AdminRow from "./AdminRow";
import Pagination from "./Pagination";

const AdminComponent = ({orders})=>{
    
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

       <div >
           {currentItem.map(item =>
            <AdminRow key={item.id} {...item}/>
            )}
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
        orders: state.orders
    }
}

export default connect(mapStateToProps,null) (AdminComponent);