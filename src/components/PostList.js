import  React, {useEffect}  from "react";
import { connect } from 'react-redux';
import { fetchPosts, addPost, submitToServer } from '../actions/postsAction';
import {Field, reduxForm } from 'redux-form';

function PostList({postData, fetchPosts, handleSubmit, addPost}) {
    
  useEffect(() => {
    fetchPosts()
  },[])


  function submit(values) {
    submitToServer(values).then(data => addPost(data))
  } 

  return postData.loading ? (
    <h2>Loading ...</h2>) 
    : postData.error ? (
      <h2>{postData.error}</h2>
    ) : (
      <div>
        <h2>Post List</h2>
        <form onSubmit={handleSubmit(submit)} className="post-form">
          <div className="post-form__item">
            <label htmlFor="firstName">User Id</label>
            <Field name="userId" component="input" type="text" />
          </div>
          <div className="post-form__item">
            <label htmlFor="lastName">Title</label>
            <Field name="title" component="input" type="text" />
          </div>
          <div className="post-form__item">
            <label htmlFor="email">Body</label>
            <Field name="body" component="input" type="text" />
          </div>
          <button className="post-form__btn" type="submit">Add post</button>
        </form>
        <div>
          {postData.posts.map(post => <p key={post.id} >{post.title}</p>)}
        </div>
      </div>
    )
  }

const mapStateToProps = (state) => {
  return {
    postData: state.postList
  }
}
const mapDispatchToProps = dispatch => {
  return{
    addPost: (data) => dispatch(addPost(data)),
    fetchPosts: () => dispatch(fetchPosts())
  }
}
PostList = reduxForm({
  form: 'addPostItem'
})(PostList)

export default connect(mapStateToProps, mapDispatchToProps)(PostList)