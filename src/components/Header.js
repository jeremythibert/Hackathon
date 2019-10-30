import React from 'react';
import Smoke from './img/smoke.gif'
import Logo from './img/crane.png'
import './Header.css';

class Header extends React.Component {
    render() {
        return(
            <>
            <img className="smoke" alt="smoke" src={Smoke}/>
            <img className="logo" alt="logo" src={Logo}/>
            </>
        )
    }
}















export default Header;