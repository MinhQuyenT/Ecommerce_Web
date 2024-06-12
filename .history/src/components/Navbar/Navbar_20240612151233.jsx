import React from "react";
import Logo from "../../assets/logo.png"

const Navbar = () => {
  return <div>
    {/* Upper Nav */}
    <div>
        <div>
            <div>
                <a href="">
                    <img src={Logo} alt="Logo"></img>
                </a>
            </div>
            {/* Search bar */}
            <div>
                <div>
                    <input type="text" placeholder="Search" />
                </div>
            </div>
        </div>
    </div>
    {/* Lower Nav */}
    <div></div>
  </div>;
};

export default Navbar;
