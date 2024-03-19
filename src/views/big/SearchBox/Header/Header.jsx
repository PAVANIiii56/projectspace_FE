import React from "react";
import pic from './man.jpg'
import './header.css'
const Header = ({ exp }) => {
    return (
        <div className="head-container">
            <img src={pic} alt="" className={`head-image 
            ${exp
                    ? `hd-img-exp`
                    : `hd-img-con`
                }`} />
            <h1 className="head-text">CHATBOT</h1>

        </div>
    )
}
export default Header;