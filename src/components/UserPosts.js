import React, { useEffect } from 'react'
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'
import { fetchUserPosts } from '../actions/getUserPostsAction';

function UserPosts({userPosts, fetchUserPosts}) { 
    const { id } = useParams();
    const { url, path } = useRouteMatch();

    useEffect(() => {
        fetchUserPosts(id)
    },[])

    return (
        userPosts.map((post, id) => {
            return <div className="post-item" key={id}>
                <p>Title: {post.title}</p>
                <p>{post.body}</p>
            </div>
        })
    )
 }
 const mapStateToProps = state => {
     return{
         userPosts: state.userPosts
     }
 }

 const mapDispatchToProps = dispatch => {
     return {
         fetchUserPosts: (userId) => dispatch(fetchUserPosts(userId))
     }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(UserPosts);
