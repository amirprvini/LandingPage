import React from 'react'
import { GiConfirmed } from "react-icons/gi";

interface CheckLsitItemProps {
    Title : string , 
    Description : string
}

const CheckListItem: React.FC<CheckLsitItemProps> = ({Title,Description}) : JSX.Element =>{
  return <div className='checkListItemWrapper text-white flex  gap-2'>
    <div className="chekListIconWrapper text-green-600 text-2xl h-full flex items-start py-4">
        <GiConfirmed />
    </div>

    <div className="checkListContent h-full flex items-start py-4 flex-col gap-2">
        
        <div className="checkListTitleWrapper">
            <h3 className="checkListTitle">
                {Title}
            </h3>
        </div>

        <div className="checkListDescriptionWrapper text-neutral-600">
            <h3 className="checkListDescription">
                {Description}
            </h3>
        </div>

        


    </div>
  </div>
}

export default CheckListItem