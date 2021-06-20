import React, { Component } from 'react';
import PaginationPosts from './pagination.component';
import BackdropComponent from './backdrop/backdrop';
const axios = require('axios');
class Posts extends Component {

  constructor(){
    super();
    this.state={
    comments:[],
    currentPage:2,
    postsPerPage:10,
    loading:true,
    }
  }
     componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/albums')
        .then(comments => {this.setState({
          comments: comments.data,
        })
      this.setState({loading:false})
      });

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
       
       {this.state.loading?<BackdropComponent></BackdropComponent>:null}
       {currentComments.map(comment => {
         return <h1>{comment.title}</h1>
       })}
       <PaginationPosts currentPage={this.state.currentPage} changePage={(el)=>this.setState({currentPage:el})} postsPerPage={postsPerPage} totalPosts={this.state.comments.length}></PaginationPosts>
     </div>
   )
 }
}

export default Posts;