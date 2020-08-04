import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import "../Assets/styles/components/search.css"
import {foundSale, foundOrder, foundClient, foundProduct, isSearching } from "../actions";
import {connect} from "react-redux";



const Search =(props)=>{

    const {component}= props

 
    const handleInput = (event) =>{
                
        if(event.target.value === ""){
            props.isSearching(false)
        }else{
            
            switch(component){
                case "orders":
                    props.foundOrder(event.target.value)
                    props.isSearching(true)
                    break

                case "sales":
                        props.foundSale(event.target.value)
                        props.isSearching(true)
                    break

                case "clients":
                    props.foundClient(event.target.value)
                    props.isSearching(true)
                break

                case "products":
                    props.foundProduct(event.target.value)
                    props.isSearching(true)
                break
                    
                default: console.log("add component value")

            }
            
        }
    }


    return(
    <div className="search">

            {component === "products" ? 
                    <input
                    type="text" 
                    placeholder="    Search Product..." 
                    className="search__input"
                    name="search"
                    onChange={handleInput}
                    />
            :
                    <input
                        type="text" 
                        placeholder="    Search Client..." 
                        className="search__input"
                        name="search"
                        onChange={handleInput}
                    />
            }
            <SearchIcon className="search__icon"/>
            </div>
    )
}

const mapDispatchToProps={
    foundSale,
    foundOrder,
    foundClient,
    foundProduct,
     isSearching,

}

export default connect(null,mapDispatchToProps)(Search);