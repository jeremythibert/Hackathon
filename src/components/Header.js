import React from 'react';
import Smoke from './img/smoke.gif'
import Logo from './img/crane3.png'
import './Header.css';


class Header extends React.Component {
    render() {
        return(
            <>
            <img className="smoke" alt="smoke" src={Smoke}/>
            <div className="logo">
                <img className="skull" alt="skull" src={Logo}/>
                <h1 className="title">Le Mauvais Coin</h1>
            </div>
            </>
        )
    }
}















export default Header;