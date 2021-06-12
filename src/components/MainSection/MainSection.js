import React from 'react';
import './MainSection.css';
import MenuItem from '../MenuItem/MenuItem';
import image1 from '../../images/img1.webp';
import image2 from '../../images/img2.webp';
import image3 from '../../images/img3.webp';
import image4 from '../../images/img4.webp';
import image5 from '../../images/img5.webp';

const MainSection = () => {
    return (
        <div className="mainsection">
            <div className="wrap">
                <h1>What are you having for Lunch?</h1>
                <div className="wrap-description">
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente aperiam iste cumque quas placeat praesentium.</p>
                </div>
            </div>
            
            <div className="menuitems">
                <MenuItem img={image1} title="Mexican Taco" />
                <MenuItem img={image2} title="Pizza"/>
                <MenuItem img={image3} title="Chicken Burger"/>
                <MenuItem img={image4} title="Nachos"/>
                <MenuItem img={image5} title="Noodles"/>
            </div>
            <div className="description">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente aperiam iste cumque quas placeat praesentium.</p>
            </div>
        </div>
    )
}

export default MainSection
