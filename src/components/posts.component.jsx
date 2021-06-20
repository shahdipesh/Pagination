import React, { Component } from 'react';
import PaginationPosts from './pagination.component';
const axios = require('axios');
class Posts extends Component {

  constructor(){
    super();
    this.state={
    comments:[],
    currentPage:1,
    postsPerPage:20,
    }
  }
     componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/comments')
        .then(comments => this.setState({
          comments: comments.data,
        }));
    }
    
    changePage=(num)=>{
      this.setState({currentPage:num});
    }
 render() {
  var {currentPage,postsPerPage} =  this.state;
  var indexOfLastComment = currentPage * postsPerPage;
  var indexOfFirstComment = indexOfLastComment - postsPerPage;
  var currentComments = this.state.comments.slice(indexOfFirstComment, indexOfLastComment);
   return (

     <div>
       {currentComments.map(comment => {
         return <h1>{comment.name}</h1>
       })}
       <PaginationPosts changePage={(el)=>this.changePage(el)} postsPerPage={postsPerPage} totalPosts={this.state.comments.length}></PaginationPosts>
     </div>
   )
 }
}

export default Posts;