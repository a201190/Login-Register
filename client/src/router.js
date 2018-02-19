import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Registration from './Container/Registration';
import NavBar from './Container/navbar';
import Login from './Container/login';
import Home from './Container/home';
import {connect} from 'react-redux';
import * as actions from './actions';
import { withRouter } from 'react-router-dom'

class Approuter extends React.Component{
    componentWillMount() {
        this.props.fetchUser();
      }
    render(){        
        return(
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Registration}/>
                    <Route exact path="/login" component={Login}/>
                    <Route exact path="/home" component={Home}/>                    
                </Switch>
            </div>
        );
    }
}
export default  withRouter(connect(null, actions) (Approuter));