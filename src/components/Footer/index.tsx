import React from 'react'
import { communityLinks, platformLinks, resourcesLinks } from '../../constants'

interface FooterProps {}

const Footer: React.FC<FooterProps> = (): JSX.Element => {
  return <div className='footerWrapper text-white flex justify-around mt-3 gap-5 border border-t-neutral-500 py-2 px-10'>
      
      <div className="resourcesLinksWrapper w-1/3 h-full flex flex-col items-center gap-4">

        <h5 className='resourcesTitle'> Resources </h5>
        
        <div className="resourcesItems">
          <ul className="resourcesList text-neutral-500 flex flex-col items-center">
            {resourcesLinks.map((res,index)=>{
              return <li key={index}>
                <a href={res.href} className='hover:text-white'> {res.text} </a>
              </li>
            })}
          </ul>
        </div>

      </div>


<div className="platformLinksWrapper w-1/3 h-full flex flex-col items-center gap-4">

        <h5 className='platformLinksTitle'> Platform </h5>
        
        <div className="platformLinksItems">
          <ul className="platformLinksList text-neutral-500 flex flex-col items-center">
            {platformLinks.map((res,index)=>{
              return <li key={index}>
                <a href={res.href} className='hover:text-white'> {res.text} </a>
              </li>
            })}
          </ul>
        </div>

      </div>


<div className="communityLinksWrapper w-1/3 h-full flex flex-col items-center gap-4">

        <h5 className='communityLinksTitle'> Community </h5>
        
        <div className="communityLinksItems">
          <ul className="communityLinksList text-neutral-500 flex flex-col items-center">
            {communityLinks.map((res,index)=>{
              return <li key={index}>
                <a href={res.href} className='hover:text-white'> {res.text} </a>
              </li>
            })}
          </ul>
        </div>

      </div>



  </div>

}

export default Footer