import { testimonials } from "../../constants"
import UserCard from "../UserCard"

const TestimonialSection: React.FC = (): JSX.Element => {
  return <div className='TestimonialSectionWrapper text-white my-10
   w-full flex flex-col items-center gap-4 '>
        
        <div className="pricingTitleWrapper text-4xl sm:text-6xl lg:text-7xl my-4">
            <h1 className="pricingTitle text-center">What People are saying</h1>
        </div>

        <div className="testimonialCardsWrapper mt-5">
            <ul className='testimonialCardList w-full gap-4 flex flex-wrap justify-center'>
                {testimonials.map((obj,index)=>{
                    return <li key={index} className="w-1/3">
                        <UserCard text={obj.text} userName={obj.user} companyName={obj.company} avatar={obj.imageUrl}  />
                    </li>
                })}
            </ul>
        </div>

  </div>
}

export default TestimonialSection