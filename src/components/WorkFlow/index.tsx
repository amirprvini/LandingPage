import React from 'react'
import { checklistItems } from '../../constants'
import CheckListItem from '../CheckListItem'

interface WorkFlowProps {} 

const WorkFlow : React.FC<WorkFlowProps> = () : JSX.Element => {
  return <>
        <div className='workFlowTitleWrapper my-4 w-full flex justify-center'>
            <h1 className="workFlowTitle text-4xl sm:text-6xl lg:text-7xl text-white text-center">
                    Accelerate your 
                    <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent'> coding workflow</span>
            </h1>

        </div>

        <div className="workFlowSectionWrapper flex justify-center px-10 my-20 gap-8">
          
          <div className="workFlowImageWrapper w-full lg:w-1/2 flex justify-end">
                <img src="./images/code.jpg" alt="workFlowImage" className='bg-transparent' width='600px'/>
          </div>

          <div className="workFlowItemsWrapper w-full lg:w-1/2">
              <ul className="checkList">
                {checklistItems.map((checkListObj,index)=>{
                  return <li key={index}> <CheckListItem Title={checkListObj.title} Description={checkListObj.description} /> </li> 
                  })}
              </ul>
          </div>

        </div>
  </>
}

export default WorkFlow