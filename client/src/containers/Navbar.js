import React, {Component} from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink } from 'reactstrap';
  import {LinkContainer} from 'react-router-bootstrap';

export default class Example extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    const idForFirstDiv = (window.location.pathname === "/contact") ? "stars" : "base"
    const idForSecondDiv = (window.location.pathname === "/contact") ? "twinkling" : "base"

    return (
      <div id={idForFirstDiv}>
        <div id={idForSecondDiv}>
          <Navbar color="light" expand="md" >
            <NavbarBrand href="/">MPGames</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="ml-auto" navbar>
                <NavItem>
                  <LinkContainer to="/">
                    <NavLink >Home</NavLink>
                  </LinkContainer >
                </NavItem>
                <NavItem>
                  <LinkContainer to="/quizzes">
                    <NavLink >Quizzes</NavLink>
                  </LinkContainer >
                </NavItem>
                <NavItem>
                  <LinkContainer to="/contact">
                    <NavLink >Contact</NavLink>
                  </LinkContainer >
                </NavItem>
                <NavItem>
                  <LinkContainer to="/about">
                    <NavLink >About</NavLink>
                  </LinkContainer >
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar>
        </div>
      </div>
    );
  }
}
