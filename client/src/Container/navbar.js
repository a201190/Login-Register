import React from 'react';
import './index.css';
import {connect} from 'react-redux';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    } from 'reactstrap';
class NavBar extends React.Component{
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false
        };
      }
      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
      renderContent(){
        switch (this.props.auth) {
          case null:
            return;
          case false:
            return [
              <NavItem key="1">
                <NavLink href="/auth/facebook">Login With Facebook</NavLink>
             </NavItem>,
              <NavItem key="2">
              <NavLink href="/auth/google">Login With Google</NavLink>
           </NavItem>
            ];
          default:
            return [
              <NavLink key="3" href="/api/logout">Logout</NavLink>];
            }
      }
      render() {
        return (
          <div>
            <Navbar style={{background:'red'}} light expand="md">
              <NavbarBrand href="/">Amit</NavbarBrand>
              <NavbarToggler onClick={this.toggle} />
              <Collapse isOpen={this.state.isOpen} navbar>
                <Nav className="ml-auto" navbar>
                  {this.renderContent()}
                </Nav>
              </Collapse>
            </Navbar>
          </div>
        );
      }
    }
    function mapStateToProps(state) {
      return {auth: state.auth}
    }
export default connect(mapStateToProps)(NavBar);