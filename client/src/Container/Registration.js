import React from 'react';
import './index.css';
import { Button, Form, FormGroup, Label } from 'reactstrap';
import {Field, reduxForm} from 'redux-form';
import name from '../Component/FieldComponen/name';
import email from '../Component/FieldComponen/email';
import mobile from '../Component/FieldComponen/mobile';
import password from '../Component/FieldComponen/password';
import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';
import  * as actions from '.././actions/index';

class Registration extends React.Component{
    render(){
        return(
            <Form className="SubmitForm" onSubmit={
              this.props.handleSubmit(()=>{
                this.props.SubmitPersonalDetails(
                  this.props.formValues, this.props.history)
                })}>
            <FormGroup>
              <Label>First Name</Label>
              <Field name="fName" component={name}/>
            </FormGroup>
            <FormGroup>
              <Label>Last Name</Label>
              <Field name="lName" component={name}/>              
            </FormGroup>
            <FormGroup>
              <Label>Email</Label>
              <Field name="email" component={email}/>                 
            </FormGroup>
            <FormGroup>
              <Label>Mobiln Number</Label>
              <Field name="mobile" component={mobile}/>                             
            </FormGroup>
            <FormGroup>
              <Label>Password</Label>
              <Field name="password" component={password}/>                                             
            </FormGroup>
            <Button type="submit">Submit</Button>
          </Form>
        );
    }
}
function validate(values){
  const error={};
if(!values.fName){
error.fName="You Must Provide a first Name"
} 
if(!values.lName){
  error.lName="You Must Provide a Last Name"
  }
if(!values.email){
  error.email="You Must Provide a Email"
}  
if(!values.mobile){
  error.mobile="You Must Provide a Mobile Number"
}
if(!values.password){
  error.password="You Must Provide a Password"
}  
return error; 
}
function mapStateToProps(state){
  return {formValues:state.form.Registration.values}
}
Registration = connect(
  mapStateToProps,actions
)(withRouter(Registration));

export default reduxForm({
    form:'Registration', 
    validate
})(Registration);