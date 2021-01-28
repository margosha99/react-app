import React from "react";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import PostsList from './components/PostList';
import ToDoList from './components/ToDoList';
import UserList from './components/UserList';
import  Navigation  from "./components/Navigation";
import  Form  from "./components/Form";
import FormValues from "./components/formValues";

export default function App() {
    return (
        <Router>
            <Navigation />
          <Switch>
            <Route exact path="/">
              <PostsList />
            </Route>
            <Route path="/toDoList">
              <ToDoList />
            </Route>
            <Route path="/userList">
              <UserList />
            </Route>
            <Route path="/form">
              <Form />
              <FormValues />
            </Route>
          </Switch> 
        </Router>
      )
}