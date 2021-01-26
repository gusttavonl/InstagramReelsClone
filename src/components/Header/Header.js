import { ArrowBackIos, CameraAlt } from '@material-ui/icons';
import React from 'react';
import './Header.css';


function Header() {
    return (

        <div className="header">
            <div className="headerLeft">
                <ArrowBackIos />
            </div>
            <div className="headerCenter">
                <h4 className="headerCenterText">Reels</h4>
            </div>
            <div className="headerRight">
                <CameraAlt />
            </div>
        </div>
    );
}

export default Header;