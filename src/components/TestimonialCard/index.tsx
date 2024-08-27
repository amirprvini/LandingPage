interface TestimonialCardProps {
    user: string,
    company: string,
    imageUrl: string,
    text: string
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({user,company,imageUrl,text}):JSX.Element =>{
  return <div className='TestimonialCardWrapper shaddow-md bg-neutral-500 py-4 px-6 rounded-md flex flex-col gap-5'>

    <div className="cardTextWrapper text-2xl lg:text-3xl">
        <p className="cardTextWrapper">
            {text}
        </p>
    </div>

    <div className="userCardsWrapper">
        <ul className="cardItemsList">
            
        </ul>
    </div>
    
  </div>
}

export default TestimonialCard