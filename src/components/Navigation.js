import React from "react";
import { Link } from "react-router-dom";

export default function Navigation() {
    return (
        <nav>
          <ul className="nav">
            <li className="nav__item">
              <Link className="nav__link" to="/">Posts List</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/toDoList">To do List</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/userList">User List</Link>
            </li>
            <li className="nav__item">
              <Link className="nav__link" to="/form">Form</Link>
            </li>
          </ul>
          <hr></hr>
        </nav>
    )
}

 