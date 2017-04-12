import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { Navbar } from 'react-bootstrap';

// class component
export default class Header extends Component {

    render() {
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to='/'>9Gag TV</Link>
                    </Navbar.Brand>
                </Navbar.Header>
            </Navbar>
        );
    }

}
