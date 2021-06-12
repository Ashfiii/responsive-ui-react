import React from 'react';
import './MenuItem.css';

const MenuItem = ({img, title}) => {
    return (
        <div className="menuitem">
            <img className="image" src={img} alt="menuItemImage" />
            <p>{title}</p>
        </div>
    )
}

export default MenuItem
