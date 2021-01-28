import  React  from "react";
import { Route, Switch } from "react-router-dom";
import UserInfo from "./UserInfo";
import Users from './Users';

export default function UserList() {
  return(
      <Switch>
        <Route exact path="/userList" component={Users} />
        <Route path="/userList/:id" component={UserInfo} />
      </Switch>
  )
}  
  