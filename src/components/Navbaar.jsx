import React, { useContext } from 'react'
import logoImg from '../assets/images/logo.svg'
import { faSun } from '@fortawesome/free-solid-svg-icons';
import { faMoon } from '@fortawesome/free-regular-svg-icons'; // or free-solid
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import DarkModeContext from '../context/DarkModeContext';
import useColor from '../customHook/useColor';
const Navbaar = () => {
    const {darkMode,toggleMode} = useContext(DarkModeContext)
    const {bgColor,textColor} = useColor()
    console.log(bgColor.gray, "bgColor")
  return (
    <>
      <div className={`h-[60px] w-[80%] mx-auto ${bgColor.lightGray} flex rounded-md items-center justify-between   mt-8 px-4`}>

       <img src={logoImg} alt="Logo" className="pl-4  h-[30px] md:h-[40px] " />
        <div className="flex space-x-4">
          <button className={`${bgColor.extraLightGray}  px-4 py-2 pr-4 mr-4 rounded focus:outline-none focus:border-2 focus:border-red-500
                hover:cursor-pointer`} onClick={toggleMode}> {darkMode ? <FontAwesomeIcon icon={faSun} /> : <FontAwesomeIcon icon={faMoon} />} </button>
          
        </div>
      
      
      </div>
    
    </>
  
  )
}

export default Navbaar
