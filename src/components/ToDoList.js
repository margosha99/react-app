import  React, { useEffect }  from "react";
import { connect } from "react-redux";
import { fetchTodos } from '../actions/todoAction'

 function ToDoList({todoData, fetchTodos}) { 
    
    useEffect(() => {
     fetchTodos()
    },[])
    
    return (
        <div>
          <h2>To Do List</h2>
            {todoData.todos.map((item) => {
              return <div key={item.id}>
                  <p>{item.id}. {item.title}</p>
                  <span>{item.completed}</span>
              </div>
            })}
        </div>
      )
 }

 const mapStateToProps = (state) => {
   return{
    todoData: state.toDoList
   }
 }
 const mapDispatchToProps = dispatch => {
   return{
     fetchTodos: () => dispatch(fetchTodos())
   }
 }

 export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)