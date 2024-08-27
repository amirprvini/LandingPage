import React from 'react'
import { features } from '../../constants'
import FeatureSectionCard from '../FeatureSectionCard'

interface FeatureSectionProps {} 

const FeatureSection : React.FC<FeatureSectionProps> = () : JSX.Element => {
  return <>
        <div className="featureTitleWrapper my-10">
            <h4 className="featureTitle text-orange-600 uppercase"> Feature </h4>
        </div>

        <div className="featureDescriptionWrapper my-5 text-4xl sm:text-6xl lg:text-7xl">
            <h2 className="featureDescription text-white text-center">
                Easily build <span className="bg-gradient-to-r from-orange-600 to-orange-900 bg-clip-text text-transparent">your code</span>
            </h2>
        </div>

        <div className="featureItemsWrapper flex justify-center w-4/5 my-10">
            <ul className="cardsList w-full flex justify-center flex-wrap gap-6">
                {features.map((feature,index)=>{
                    return <li key={index} className='w-1/4 min-w-72'>
                        <FeatureSectionCard icon={feature.icon} cardTitle={feature.text} cardDescription={feature.description} />
                    </li>
                })}
            </ul>
        </div>
  </>
}

export default FeatureSection