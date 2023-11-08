import React from 'react';
import banner_img from '../../assets/restaurant_banner.jpg'
import { Link } from 'react-router-dom';
import { motion, useTransform, useViewportScroll } from 'framer-motion';
const Banner = () => {

    const { scrollYProgress } = useViewportScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [0.2, 2]);


    return (
        <div className=' relative ' >
            <img className='   h-[600px] w-full ' src={banner_img} alt="" />
            <div className='  flex  justify-center text-center items-center mx-0 absolute top-0  bottom-0  w-full bg-opacity-60 bg-black ' >
            </div>
                <div className=' space-y-6 text-white flex-col absolute  top-0 left-0  bottom-0 flex justify-center items-center w-full  text-center mx-0 '>

                <motion.div
  animate={{ x: 100 }}
  transition={{ type: "spring", stiffness: 100 }}   >
      
                <h2 className=' pr-6 lg:pr-56 text-left text-4xl md:text-3xl lg:text-6xl font-serif items-center '>
                Traditional <br />
                Chinese Cuisine.
                </h2>
                </motion.div>




                
                <p className=' pl-10 lg:pl-56 text-left text-[12px] lg:text-2xl  ' >Foodoko delivers traditional Chinese cuisine, fusing  traditional flavours <br /> with modern cooking methods and exquisite presentation to create a <br />  unique and exciting dining experience.</p>
                
                <Link to="/allfood" >
                <button className=' py-2 px-4 bg-red-600 hover:bg-red-950 rounded-lg ' >Menues</button>
                </Link>

                
                </div>
            
        </div>
    );
};

export default Banner;