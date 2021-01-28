import React from "react";
import { connect } from "react-redux";
import { getFormValues } from "redux-form";

const FormValues = ({ values }) =>
  <div>
    <pre>
    {values ? JSON.stringify(values, null, 2) : String(values)}
    </pre>
  </div>;

const selector = getFormValues('addPostItem');
export default connect(state => ({
  values: selector(state, 'addPostItem')
}))(FormValues);

//formValueSelector
//getFormValues