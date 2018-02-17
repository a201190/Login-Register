import React from 'react';
import {Field, reduxForm} from 'redux-form'
import { Button, Form, FormGroup, Label } from 'reactstrap';
import email from '../Component/FieldComponen/email';
import password from '../Component/FieldComponen/password';
 import {connect} from 'react-redux';
// import  * as actions from '.././actions/index';
class Login extends React.Component{
    constructor(){
        super();
        this.getuname=this.getuname.bind(this);
        this.getPassword=this.getPassword.bind(this);
        this.state={
            email:[],
            password:[],
            uemail:'',
            upassword:''
        }
    }
    componentWillMount(){
        fetch('http://localhost:3000/api/login').then(res=>res.json()).then(response=>{
            var email=  response.map((response)=>{return response.local.email})
            var password=response.map((response)=>{return response.local.password})
            this.setState({
                email:email,
                password:password
            })    
        })
    }
    getuname(event){
        this.setState({
            uemail:event.target.value
        })
    }
    getPassword(event){
        this.setState({
        upassword:event.target.value
    })
   }
   uLogin(){
       this.state.email.filter((email)=>{
           let filterdata;
           if(this.state.uemail){
               filterdata=email.includes(this.state.uemail)
           }else{
               filterdata="email not avl"
           }
           return filterdata;
       })
   }
    render(){
        console.log(this.uLogin())
        return(
        <Form className="Login" onSubmit={this.props.handleSubmit((values)=>{console.log(values)})}>
        <FormGroup>
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
            <Field name="email" component={email} onChange={this.getuname}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Field name="password" component={password} onChange={this.getuname}/>
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
    return {loginValue:state.form.Login}
}
Login=connect(mapStateToProps)(Login);
export default reduxForm({
    form:'Login',
    validate,
}) (Login);