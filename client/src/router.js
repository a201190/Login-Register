import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Registration from './Container/Registration';
import NavBar from './Container/navbar';
import Login from './Container/login';
import {connect} from 'react-redux';
import * as action from './actions';
class Approuter extends React.Component{
    componentDidMount() {
        this.props.fetchUser();
      }
      componentWillMount(){
          this.props.Login();
      }
    render(){        
        return(
            <div>
                <NavBar/>
                <Switch>
                    <Route exact path="/" component={Registration}/>
                    <Route exact path="/login" component={Login}/>
                </Switch>
            </div>
        );
    }
}
export default  connect(null, action)(Approuter);