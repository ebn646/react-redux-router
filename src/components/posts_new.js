
import React,{Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import {reduxForm} from 'redux-form';
import {createPost} from '../actions/index';

class PostsNew extends Component{
//below defines an object on the PostsNew class
//contextType calls for the context from a parent component
//the index router will provide the context
//this.context.router
  static contextTypes = {
    router: PropTypes.object
  }
  onSubmit(props){
    //createPost w payload creates a promise so we can us then.
    this.props.createPost(props)
    .then(()=>{
      //blog post has been created navigate user to index
      //we navigate by calling this.context.router.push with the new path
      this.context.router.push('/');
    });
  }
  render(){
    const { fields:{title,categories,content},handleSubmit } = this.props;

      return (
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <h3>Create A New Post</h3>
          <div className="form-group">
            <label>Title</label>
            <input type="text" className="form-control" {...title}/>
          </div>
          <div className="form-group">
            <label>Categories</label>
            <input type="text" className="form-control" {...categories}/>
          </div>
          <div className="form-group">
            <label>Content</label>
            <textarea type="text" className="form-control" {...content}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      )
  }
}

//reduxForm is like connect except it take in the configuration as the first object,mapStateToProps = null, mapDispatchToProps = createPost

export default reduxForm({
  form:'PostsNewForm',
  fields:['title', 'categories', 'content']
},null,{createPost})(PostsNew);

//we navigate using context from parent
