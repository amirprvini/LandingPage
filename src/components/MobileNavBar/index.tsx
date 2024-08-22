import React from 'react'
import { navItems } from '../../constants'

interface MobileNavBarProps {}

const MobileNavBar:React.FC<MobileNavBarProps> = () : JSX.Element => {
  return <div className='mobileNavBarWrapper text-white flex flex-col lg:hidden w-full h-max py-4 px-2 space-y-10'>
            <ul className="iltemsList flex flex-col gap-6 w-full items-center">
                {navItems.map((navItem,index)=>{
                    return <li key={index}>
                        <a href={navItem.href}>{navItem.label}</a>
                    </li>
                })}       
            </ul>

            <div className="navBarButtonsWrapper lg:hidden flex w-full justify-center space-x-8">

                <a href={'#'} className="border px-2 py-1 text-white rounded-md font-semibold"> Sing in </a>
                <a href={'#'} className="border px-2 py-1 text-white rounded-md font-semibold  bg-gradient-to-r from-orange-500 to-orange-800"> Create an account </a>
        
        </div>

  </div>
  
}

export default MobileNavBar