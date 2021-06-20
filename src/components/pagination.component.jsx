import React from 'react';
import {Pagination} from 'react-bootstrap'

const PaginationBasic = (props) => {
    const {postsPerPage,totalPosts} = props
    let active = props.currentPage;
   let items = [];
const setPageNum=(num)=>{
    props.changePage(num);
}

for (let number = 1; number <= Math.ceil(totalPosts/postsPerPage); number++) {
  items.push(
    <Pagination.Item key={number} active={number === active} onClick={()=>{setPageNum(number)}} >
      {number}
    </Pagination.Item>,
  );
}
 return (    
      <div>
        <Pagination size="sm">{items} {active<(totalPosts/postsPerPage)?<Pagination.Next onClick={()=>setPageNum(active+1)}/>:null}</Pagination>
      </div>
    );
 }
export default PaginationBasic;