import React from 'react'
import PricingCardFeature from '../PriceCardFeature'

interface PricingCardProps {
    title: string , 
    price: string , 
    items: string[]
}

const PricingCard: React.FC<PricingCardProps> = ({title,price,items}):JSX.Element =>{
  return <div className='pricingCardWrapper border border-neutral-500 py-4 px-6 rounded-lg flex flex-col gap-5'>

    <div className="cardTitleWrapper text-2xl lg:text-3xl">
        <h2 className="cardTitleWrapper">
            {title}
        </h2>
    </div>

    <div className="cardPriceWrapper">
        <span className='text-2xl lg:text-3xl'>{price}</span>   / month
    </div>

    <div className="cardItemsWrapper">
        <ul className="cardItemsList">
            {items.map((item,index)=>{
                return <li key={index}> <PricingCardFeature text={item} />  </li>
            })}
        </ul>
    </div>
    
    

  </div>
}

export default PricingCard