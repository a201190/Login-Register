import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './Container/login';
import NavBar from './Container/navbar';
import {connect} from 'react-redux';
import * as action from './actions'
class Approuter extends React.Component{
    componentDidMount() {
        this.props.fetchUser();
      }
    
    render(){
        return(
            <div>
                <NavBar/>
                <Switch>
                    <Route to="/" component={Login}/>
                </Switch>
            </div>
        );
    }
}
export default  connect(null, action)(Approuter);