import React from 'react'
import { pricingOptions } from '../../constants'
import PricingCard from '../PricingCard'

const PricingSection: React.FC = (): JSX.Element => {
  return <div className='pricingSectionWrapper text-white my-5
   w-full flex flex-col items-center gap-4 '>
        
        <div className="pricingTitleWrapper text-4xl sm:text-6xl lg:text-7xl">
            <h1 className="pricingTitle">Pricing</h1>
        </div>

        <div className="pricingCardsWrapper mt-10 w-full flex justify-center">
            <ul className='pricingCardList flex flex-wrap justify-center gap-8 '>
                {pricingOptions.map((obj,index)=>{
                    return <li key={index}>
                        <PricingCard title={obj.title} price={obj.price} items={obj.features} />
                    </li>
                })}
            </ul>
        </div>

  </div>
}

export default PricingSection