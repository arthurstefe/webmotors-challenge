import React from 'react';
import logo from './../assets/images/logo.svg';

export default class Header extends React.Component {
    
    render() {
        return (
            <header className="header">
                <img src={logo} className="logo" alt="logo" />
            </header>
        )
    }
}