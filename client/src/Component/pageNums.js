import React, {useState} from 'react';
import  { Pagination } from 'react-bootstrap';

const PageNums = (props) => {
    const pages= [];


    const pagesLength = Math.ceil(props.numProducts / props.productPerPage);

    for(let i = 1; i < pagesLength+1; i++){
        pages.push(i);
    }

    console.log("pages,", pages);

    return(
        <Pagination className="d-flex justify-content-center mt-3 ">
            <Pagination.First />
            <Pagination.Prev />
                {
                   pages.length == 0 ? null : pages.map((page, i) =>(
                       <Pagination.Item key={i} onClick={() => props.setCurrentPage(page)}>{page}</Pagination.Item>
                   ))
                }
            <Pagination.Next />
            <Pagination.Last />
        </Pagination>
    )

}

export default PageNums;