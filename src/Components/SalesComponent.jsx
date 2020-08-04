import React from "react";
import {connect} from "react-redux";
import SalesRow from "./SalesRow";
import "../Assets/styles/components/SalesComponent.css"
import Search from "./Search";



const SalesComponent = ({sales,found,isSearching})=>{

 
    


    return(
    <>

        <div className="salesComponent">

            <Search component="sales"/>



            <div className="titles">
                <h2 className="id--sales">Id</h2>
                <h2 className="date--sales">Date</h2>
                <h2 className="client--sales">Client</h2>
                <h2 className="total">Total</h2>

            </div>
            


            <div>
                {isSearching ?
                     found.map(item =>
                        <SalesRow key={item.id} {...item} />    )
                     :
                     sales.map(item =>
                        <SalesRow key={item.id} {...item} />    )
                }



                
            </div>
        </div>
    </>
    )
}

const mapStateToProps =state=>{
    return{
        sales:state.sales,
        found:state.found,
        isSearching: state.isSearching
    }
}



export default connect(mapStateToProps,null)(SalesComponent);