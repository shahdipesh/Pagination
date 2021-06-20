// import React from 'react';
import {Pagination} from 'react-bootstrap'

// const PaginationPosts = (props) => {
//    const {postsPerPage,totalPosts} = props
//     const pageNumber = [1,2,3];
//     for(var i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
//           pageNumber.push(i);
//     }
//  return (
//     <div>
//         {console.log(pageNumber)}
//   <Pagination>
//   <Pagination.Prev />
//   {pageNumber.map(el=>{
//       return <Pagination.Item >{el}</Pagination.Item>
//   })}
//   <Pagination.Next />
// </Pagination>
//   </div>
//  )
// }

// export default PaginationPosts;


import React, { Component } from 'react';

class PaginationPosts extends Component {
    constructor(props) {
        super(props);
    }
    render() {
    const {postsPerPage,totalPosts} = this.props
    const pageNumber = [];
    for(var i=1;i<=Math.ceil(totalPosts/postsPerPage);i++){
          pageNumber.push(i);
    }
        return (
            <div>
                {console.log(totalPosts)}
                <Pagination>
                    <Pagination.Prev />
                    {pageNumber.map(el => {
                        return <Pagination.Item onClick={()=>this.props.changePage(el)}>{el}</Pagination.Item>
                    })}
                    <Pagination.Next />
                </Pagination>
            </div>
        )
    }
}

export default PaginationPosts;