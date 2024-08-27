import React from 'react'

interface FeatureSectionCardProps {
    icon : any , 
    cardTitle: string , 
    cardDescription : string 
}

const FeatureSectionCard:React.FC<FeatureSectionCardProps> = ({icon,cardTitle,cardDescription}) : JSX.Element => {
  return <div className='cardContainer flex space-x-5 px-4 py-4 bg-neutral-900 rounded-md bg-opacity-20'>

        <div className="cardHeader flex items-start h-full text-white">
            <div className="iconWrapper text-orange-700">{icon}</div>
        </div>

        <div className="caedDescriptionWrapper h-full flex flex-col space-y-6">
            <div className="cardTitleWrapper text-white"> <p className="cardTitle font-semibold">{cardTitle}</p> </div>
            <p className="cardDescription text-neutral-500">
                {cardDescription}
            </p>
        </div>
  </div>
}

export default FeatureSectionCard