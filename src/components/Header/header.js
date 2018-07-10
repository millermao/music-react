import React, { Component } from 'react';
import logo from '../../logo.svg';
import './header.scss';


class Header extends Component{
    render(){
        return(
            <header className="titleBg">
                <div className="logo"><img src={logo} alt="logo"/></div>
                <div className="downloadbtn">
                    <span>下载APP</span>
                </div>
            </header>
        )
    }
}

export default Header;