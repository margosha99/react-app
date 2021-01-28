import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom'
import { useRouteMatch } from 'react-router-dom'
import { fetchUserToDo } from '../actions/getUserToDoAction';


function UserToDo({userToDo, fetchUserToDo}) { 
    const { id } = useParams();

    useEffect(() => {
        fetchUserToDo(id)
    }, [])

    return (
        userToDo.map((todo, id) => {
            return  <div>
                
                    { todo.completed ? (
                        <div className="todo-group" key={id}> 
                        <input type="checkbox" id={id} readOnly checked/>
                        <label htmlFor={id}>{todo.title}</label>
                        </div>
                    ) : (
                        <div className="todo-group" key={id}> 
                        <input type="checkbox" id={id}/>
                        <label htmlFor={id}>{todo.title}</label>
                        </div>
                    ) }
            
            </div>
            
        })
    )
}

const mapStateToProps = state => {
    return{
        userToDo: state.userToDo
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchUserToDo: (userId) => dispatch(fetchUserToDo(userId))
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(UserToDo)