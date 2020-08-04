import React from "react"
import {Link} from "react-router-dom"
import "../Assets/styles/components/Paginate.css"

const Pagination= ({itemsPerPage, totalItems , paginate})=>{

    const pageNumbers = [];

    for(let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++){
        pageNumbers.push(i)
    }

    return(
        <div className="pagination">
            {pageNumbers.map(number => (
                <p key={number} className="pagination__item">
                    <Link onClick={ ()=> paginate(number) } className="pagination__link">{number}</Link>
                </p>
            )) }
        </div>
    )
}

export default Pagination;