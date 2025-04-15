import React, { useContext } from 'react'
import DarkModeContext from '../context/DarkModeContext'

const useColor = () => {
    const {darkMode} = useContext(DarkModeContext)

    const bgColor = {
        primary: darkMode ? 'bg-[#050b21]' : 'bg-[#ebecf7]',
        black: darkMode ? 'bg-gray-800' : 'bg-gray-100',
        darkBlack: darkMode ? 'bg-black' : 'bg-white',
        gray: darkMode ? 'bg-gray-700' : 'bg-gray-100',
        lightGray: darkMode ? 'bg-gray-600' : 'bg-gray-100',
        lightGray2: darkMode ? 'bg-gray-500' : 'bg-gray-300',
        extraLightGray: darkMode ? 'bg-gray-400' : 'bg-gray-200',
      };
      
      const textColor = {
        primary: darkMode ? 'text-gray-100' : 'text-black',
        secondary: darkMode ? 'text-gray-400' : 'text-gray-600',
        gray: darkMode ? 'text-gray-500' : 'text-gray-600',
      };
      
  return {bgColor,textColor}
}

export default useColor
