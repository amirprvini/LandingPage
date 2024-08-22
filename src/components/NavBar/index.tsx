import React, { useState } from 'react';
import { navItems } from '../../constants';
import {Menu , X} from 'lucide-react'
import MobileNavBar from '../MobileNavBar';

interface navBarProps {}

const NavBar: React.FC<navBarProps> = () : JSX.Element => {

    const [isClicked,setIsClicked] = useState<boolean>(false) ;

  return <div className="navBar flex flex-col">
        
        <div className="navBarContainer w-full bg-black text-white flex justify-between px-6 lg:justify-around lg:px-0 items-center border-b border-neutrul-700/80 h-16 sticky top-0 backdrop-blur-lg">

            <div className="logoWrapper flex justify-center items-center space-x-2">
            <div className="logoIconWrapper">
                <img src="./images/logo.png" alt="headerLogo" width={'30px'} height={'30px'} />
            </div>
            <h3 className="logoTitle text-lg"> Landing Page </h3>
        </div>

        <div className="navBarItemsWrapper hidden lg:block">
            <ul className="iltemsList flex gap-6">
                {navItems.map((navItem,index)=>{
                    return <li key={index}>
                        <a href={navItem.href}>{navItem.label}</a>
                    </li>
                })}       
            </ul>
        </div>

        <div className="navBarButtonsWrapper space-x-10 hidden lg:flex">

                <a href={'#'} className="border px-2 py-1 text-white rounded-md font-semibold"> Sing in </a>
                <a href={'#'} className="border px-2 py-1 text-white rounded-md font-semibold  bg-gradient-to-r from-orange-500 to-orange-800"> Create an account </a>
        
        </div>

        <div className="navBarMenuWrapper flex lg:hidden">
                <button className="navBarMenu" onClick={()=>{setIsClicked(!isClicked)}}>
                    {isClicked ? <X /> : <Menu />}
                </button>
        </div>

    </div>
    
        { isClicked ? <MobileNavBar /> : null }

  </div>
}

export default NavBar