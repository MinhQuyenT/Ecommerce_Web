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
                    <input type="text" placeholder="Search" className="w-[200px] sm:w-[200px] group-hover:w-[300px] transition-all
                    duration-300 rounded-full border border-gray-300 px-2 py-1 focus:outline-none focus:border-1
                    focus:border-primary
                    " />
                </div>
            </div>
        </div>
    </div>
    {/* Lower Nav */}
    <div></div>
  </div>;
};

export default Navbar;
