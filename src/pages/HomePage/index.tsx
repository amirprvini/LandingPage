import React from 'react'
import HomePageHeader from '../../components/HomePageHeader'
import FeatureSection from '../../components/FeatureSection'
import WorkFlow from '../../components/WorkFlow'
import PricingSection from '../../components/PricingSection'
import TestimonialSection from '../../components/TestimonialSection'
import Footer from '../../components/Footer'

interface HomePagePrpos {}

const HomePage : React.FC<HomePagePrpos> = () : JSX.Element => {
  return <div className='homePageWrapper h-70vh w-full flex flex-col justify-around'>

    <div className="headerWrapper py-8 flex flex-col space-y-10 items-center">
      <HomePageHeader/>
    </div>


    <div className="featureSectionWrapper flex flex-col items-center">
      <FeatureSection/>
    </div>

    <div className="workFlowWrapper w-full justify-center my-10">
        <WorkFlow />
    </div>

    <div className="pricingContainer w-full justify-center">
        <PricingSection />
    </div>

    <div className="testimonialContainer w-full justify-center">
        <TestimonialSection />
    </div>

{/* 
    <div className="footerContainer w-full justify-center mt-5">
      <Footer />
    </div> */}

  </div>
}

export default HomePage