import React from 'react';
import { navItems } from '../../constants';

interface navBarProps {}

const NavBar: React.FC<navBarProps> = () : JSX.Element => {
  return <div className="navBar bg-black text-white flex justify-between items-center border-b-2 border-gray-300 h-12 px-2">
        
        <div className="logoWrapper flex space-x-4">
            <div className="logoIconWrapper">
                <img src="./my-app/src/assets/logo.png" alt="headerLogo" />
            </div>
            <h3 className="logoTitle"> Landing Page </h3>
        </div>

        <div className="navBarItemsWrapper">
            <ul className="iltemsList flex gap-6">
                {navItems.map((navItem,index)=>{
                    return <li key={index}>
                        <a href={navItem.href}>{navItem.label}</a>
                    </li>
                })}       
            </ul>
        </div>

        <div className="navBarButtonsWrapper flex gap-2">
                <a href={'#'} className="border px-2 py-1 text-white rounded-md font-semibold"> Sing in </a>
                
                <a href={'#'} className="border px-2 py-1 text-white rounded-md font-semibold  bg-gradient-to-r from-orange-500 to-orange-800"> Create an account </a>
        </div>
  </div>
}

export default NavBar