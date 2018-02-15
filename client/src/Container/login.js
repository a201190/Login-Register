import React from 'react';
import {Field, reduxForm} from 'redux-form'
import { Button, Form, FormGroup, Label } from 'reactstrap';
import email from '../Component/FieldComponen/email';
import password from '../Component/FieldComponen/password';
import {connect} from 'react-redux';
import  * as actions from '.././actions/index';

class Login extends React.Component{
    render(){
        return(
        <Form className="Login" onSubmit={this.props.handleSubmit(()=>{this.props.Login(this.props.loginValues)})}>
        <FormGroup>
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
            <Field name="email" component={email}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Field name="password" component={password}/>
        </FormGroup>
        <Button type="submit">Login</Button>
      </Form>
        );
    }
}
function validate(values){
const error={};
if(!values.email){
    error.email="you first provide an email"
}
if(!values.password){
    error.password="you first provide an password"
}
return error;
}
function mapStateToProps(state){
return {loginValues:state.form.Login.values}
}
Login = connect(
    mapStateToProps,actions
  )(Login);
export default reduxForm({
    form:'Login',
    validate
}) (Login);