import React from 'react';
import {Field, reduxForm} from 'redux-form'
import { Button, Form, FormGroup, Label } from 'reactstrap';
import email from '../Component/FieldComponen/email';
import password from '../Component/FieldComponen/password';
// import {withRouter} from "react-router-dom";
 import {connect} from 'react-redux';
import  * as actions from '.././actions/index';
class Login extends React.Component{
    constructor(){
        super();
        this.getuname=this.getuname.bind(this);
        this.getPassword=this.getPassword.bind(this);
        this.state={
            data:[],
            uemail:'',
            upassword:''
        }
    }
    componentWillMount(){
        fetch('http://localhost:3000/api/login').then(res=>res.json()).then(response=>{
            var data=  response.map((response)=>{return response.local})
            this.setState({
                data:data
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
       var data=this.state.data.map((data)=>{return data.email})
       var pdata=this.state.data.map((data)=>{return data.password})      
        if(data.includes(this.state.uemail) && pdata.includes(this.state.upassword)){
            return 'Click on login button to see home page'
        }
        else{
            return "You are not Register"
        }
   }
   routerS(){
       if(this.uLogin()==='Click on login button to see home page'){
        this.props.history.push({pathname:'/home'})
       }
   }
    render(){
        return(
         <div>
        <Form key="2" className="Login" onSubmit={this.props.handleSubmit(()=>{this.uLogin()})}>
        <div key="1" style={{backgroundColor:'orange', width:'100%', textAlign:'center'}}>{this.uLogin()}</div>   
        <FormGroup>
          <Label for="exampleEmail" className="mr-sm-2">Email</Label>
            <Field name="email" component={email} onChange={this.getuname}/>
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword" className="mr-sm-2">Password</Label>
          <Field name="password" component={password} onChange={this.getPassword}/>
        </FormGroup>
        <Button type="submit" onClick={(()=>{this.routerS()})}>Login</Button>
      </Form>
      </div>
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
Login=connect(mapStateToProps, actions)(Login);
export default reduxForm({
    form:'Login',
    validate,
}) (Login);