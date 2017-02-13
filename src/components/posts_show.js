//1.create an action creator the can create a single post
import React,{Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {fetchPost} from '../actions/index';

class PostsShow extends Component{
  componentWillMount(){
    this.props.fetchPost(this.props.params.id)
  }

  render(){
    if(!this.props.post){
      return <div>Loading...</div>
    }

      return (
        <div>
          <h3>{this.props.post.title}</h3>
          <h6>{this.props.post.content}</h6>
        </div>
      )
  }
}

function mapStateToProps(state){
  return {
    post:state.posts.post
  }
}


export default connect(mapStateToProps,{fetchPost})(PostsShow);
