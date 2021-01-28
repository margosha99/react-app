# react-redux-app
This app has 4 components: PostsList, TodoList, UserList, Navigation.
Navigation is accessible on all pages and using react-router-dom its 
impossible navigate between these components.

All data are requested from `https://jsonplaceholder.typicode.com/` using
REST API with GET/POST/DELETE endpoints. In order to extend the Redux store's ability and
let write async logic that interacts with the store, we need to use Middleware to delay the dispatch of an action.

PostsList Component contains a form (redux-form) to add a new post to the list of posts.

For UserList Component implemented with nested routing and represent users as links that redirect to another page with 
detailed data for this user. It also includes extra data in tabs for this user.

# Techlogies
```
React 
Redux
JavaScript
SCSS
HTML
```

# Modules
```
react-router-dom
react-redux
redux-thunk
redux-form
```
# Demo
https://margosha99.github.io/react-redux-app/
