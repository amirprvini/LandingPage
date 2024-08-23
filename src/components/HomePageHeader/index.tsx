import React from 'react'

interface HomePageHeaderProps {}

const HomePageHeader:React.FC<HomePageHeaderProps> = () : JSX.Element => {

  return <>

        <div className="titleWrapper w-full flex justify-center mt-20">
            <h1 className="headerTitle text-white text-4xl sm:text-6xl lg:text-7xl text-center tracking-wide">
                VirtualR build tools 
                <span className='bg-gradient-to-r from-orange-500 to-red-800 text-transparent bg-clip-text'> for <br /> developers</span> 
            </h1>
        </div>

        <div className="descriptionWrapper flex justify-center my-10">
            <p className="description text-neutral-500 text-lg max-w-4xl text-center">
                Empower your creativity and bring your VR app ideas to life with our intulitive development tools.
                Get started today and turn your imagination  into immersive reality!
            </p>
        </div>

        <div className="buttonsWrapper w-full flex justify-center space-x-6">
                
                <button className="px-4 py-2 rounded-md text-white bg-gradient-to-r from-orange-600 to-red-800">Start for free</button>
                <button className='px-4 py-2 rounded-md text-white border'>Documentation</button>
        </div>


        <div className="videosWrapper w-3/4 flex justify-center space-x-4 pt-5">

            <video 
            autoPlay 
            loop
            muted
            className=' border border-orange-700 shadow-orange-500 w-1/2 rounded-md mx-2 my-1'>
                <source src='./images/video1.mp4' type='video/mp4'/>
                Your browser does not support the video tag.
            </video>

            <video 
            autoPlay 
            loop
            muted
            className=' border border-orange-700 shadow-orange-500 w-1/2 rounded-md mx-2 my-1'>
                <source src='./images/video2.mp4' type='video/mp4'/>
                Your browser does not support the video tag.
            </video>

        </div>

  </>
}

export default HomePageHeader 