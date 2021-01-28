# react-redux-app
This app has 4 components: PostsList, TodoList, UserList, Navigation.
Navigation is accessible on all pages and using react-router-dom its 
impossible navigate between this components.

All data are requested from `https://jsonplaceholder.typicode.com/` using
REST API with GET/POST/DELETE endpoints. In order to extend the Redux store's ability and
let write async logic that interacts with the store we need to use Middleware to delay the dispacth of an action.

PostsList Component contains a form (redux-form) to add new post to the list of posts.

For UserList Component implemented with nested routing and represent users as links that redirect to another page with detailed data for this user. It also include extra data in tabs
for this user.

# Techlogies
React 
Redux

# Modules
react-router-dom
react-redux
redux-thunk
redux-form

# Demo


