import  React, {useEffect}  from "react";
import { connect } from 'react-redux';
import { Link, useRouteMatch} from "react-router-dom";
import { fetchUsers } from '../actions/userAction';


 function Users({userData, fetchUsers}) {

    useEffect(() => {
        fetchUsers()
      },[])

    const { url } = useRouteMatch();

    return userData.loading ? (
    <h2>Loading ...</h2>) 
    : userData.error ? (
      <h2>{userData.error}</h2>
    ) : (
      <div>
        <h2>Users List</h2>
        <div>
          {userData.users.map( ({name, id, username}) => 
          <p key={id} >
            <Link className="userLink" to={`${url}/${id}`}>Name: {name} Username: {username}</Link>
          </p> )}
        </div>
    </div>
    )
}

const mapStateToProps = (state) => {
    return {
      userData: state.userList
    }
  }
  const mapDispatchToProps = dispatch => {
    return{
      fetchUsers: () => dispatch(fetchUsers())
    }
  }
  export default connect(mapStateToProps, mapDispatchToProps)(Users)