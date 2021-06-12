import React from 'react';
import './Header.css';
import ShoppingCartOutlinedIcon from '@material-ui/icons/ShoppingCartOutlined';

const Header = () => {
    return (
        <div className="header">
            <div className="menu">
                <div className="bar1"></div>
                <div className="bar2"></div>
                <div className="bar3"></div>
            </div>
            <div className="title">
                <h2>Lorem</h2>
            </div>
            <ShoppingCartOutlinedIcon />
        </div>
    )
}

export default Header
