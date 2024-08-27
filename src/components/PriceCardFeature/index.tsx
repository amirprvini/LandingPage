import React from 'react'
import { GiConfirmed } from "react-icons/gi";

interface PricingCardFeatureProps {
    text : string
}

const PricingCardFeature: React.FC<PricingCardFeatureProps> = ({text}): JSX.Element => {
  return <div className='flex gap-3 text-neutral-500'>
    <div className="featureIcon"> <GiConfirmed /> </div>
    <div className="featureText"> {text} </div>
  </div>
}

export default PricingCardFeature