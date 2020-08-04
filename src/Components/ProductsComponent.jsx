import React,{useState} from "react";
import Pagination from "./Pagination"
import {connect} from "react-redux";
import ProductsRow from "./ProductsRow";
import "../Assets/styles/components/ProductsComponent.css";
import Search from "./Search";

const ProductsComponent= ({products,found, isSearching})=>{

    const [currentPage, setCurrentPage]     = useState(1);
    const [itemsPerPage]                    = useState(20);  
    
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItem = products.slice(indexOfFirstItem,indexOfLastItem)

    const paginate = (pageNumbers)=>{
        setCurrentPage(pageNumbers)
    }
    return(
        <>
            <div className="productsComponent">

                <Search component="products" />

                <div className="titles">
                <h2 className="id--products">ID</h2>
                    <h2 className="name--products">Name</h2>
                    <h2 className="stock--products">Stock</h2>
                    <h2 className="price--products">Price</h2>
                </div>
            </div>

            <div>
                {isSearching ?
                    found.map(item =>
                        <ProductsRow key={item.id} {...item} />
                        )
                    :
                    currentItem.map(item =>
                        <ProductsRow key={item.id} {...item} />
                        )
                }
            </div>
            <Pagination
            itemsPerPage={itemsPerPage}
            totalItems={products.length}
            paginate={paginate}
            />
        </>
    )
}


const mapStateToProps = state =>{
    return{
        products:state.products,
        found:state.found,
        isSearching: state.isSearching
    }
}

export default connect(mapStateToProps, null)(ProductsComponent);