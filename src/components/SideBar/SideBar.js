import React from 'react';
import './SideBar.css';

const SideBar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-title">
                <h1>Lorem Ipsum</h1>
            </div>
            <div className="list-items">
                <p>About</p>
                <p>Services</p>
                <p>Cuisine</p>
                <p>Gallery</p>
                <p>Contact</p>
                <p>Book</p>
            </div>
            <button>Cart</button>
        </div>
    )
}

export default SideBar
