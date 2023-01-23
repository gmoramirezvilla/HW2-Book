import React from 'react'
import {Link} from 'react-router-dom'
import "./header.css"
const Header = () => {
    return (
        <div className="header">
            <ul>
                <li>
                    <Link to="/home">Home</Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to="/wishList">WishList</Link>
                </li>
            </ul>
        </div>
    );
};

export default Header;