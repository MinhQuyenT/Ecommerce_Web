import React from 'react'
import LightBtn from "../../assets/website/light-mode-button.png"
import DarkBtn from "../../assets/website/dark-mode-button.png"

const DarkMode = () => {
  const [theme, setTheme] = React.useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const elements = document.documentElement; //html element

  React.useEffect(()=>{
    if(theme === "dark"){
      elements.classList.add("dark");
      localStorage.setItem("theme","dark")
    }else{
      elements.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }, [theme]);

  return (
    <div className="relative">
      <img  src={LightBtn}
      onClick={()=>setTheme(theme === "light" ? "dark" : "light")}
      className={`w-12 cursor-pointer drop-shadow-lg-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all
      duration-300 absolute right-0 z-10 ${theme === "dark" ? "opacity-0":"opacity-100"}`} alt="" />

      <img src={DarkBtn} 
      onClick={()=>setTheme(theme === "light" ? "dark":"light")}
      className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all
      duration-300
      " alt="" />
    </div>
  )
}

export default DarkMode
