import  React  from "react";
import {Field, reduxForm} from 'redux-form';

     
export default function Forms ({ handleSubmit, submit })  {
  
  return (
    <form onSubmit={handleSubmit(submit)}>
       <div>
        <label htmlFor="firstName">User Id</label>
        <Field name="userId" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Title</label>
        <Field name="title" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="email">Body</label>
        <Field name="body" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}


Forms = reduxForm({
    form: 'addPostItem'
})(Forms)


