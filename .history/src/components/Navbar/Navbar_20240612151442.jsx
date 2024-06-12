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
                <div className="group">
                    <input type="text" placeholder="Search" className="w-[200px] sm:w-[200px] group-hover:w-[300px]" />
                </div>
            </div>
        </div>
    </div>
    {/* Lower Nav */}
    <div></div>
  </div>;
};

export default Navbar;
