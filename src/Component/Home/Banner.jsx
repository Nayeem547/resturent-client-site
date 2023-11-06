import React from 'react';
import banner_img from '../../assets/restaurant_banner.jpg'
const Banner = () => {
    return (
        <div className=' relative ' >
            <img className='   h-[600px] w-full ' src={banner_img} alt="" />
            <div className='  flex  justify-center text-center items-center mx-0 absolute top-0  bottom-0  w-full bg-opacity-60 bg-black ' >
            </div>
                <div className=' space-y-6 text-white flex-col absolute  top-0 left-0  bottom-0 flex justify-center items-center w-full  text-center mx-0 '>

               
                <h2 className=' pr-56 text-left text-6xl font-serif items-center '>
                Traditional <br />
                Chinese Cuisine.
                </h2>
                <p className=' pl-56 text-left text-2xl  ' >Foodoko delivers traditional Chinese cuisine, fusing  traditional flavours <br /> with modern cooking methods and exquisite presentation to create a <br />  unique and exciting dining experience.</p>
                <button className=' py-2 px-4 bg-red-600 hover:bg-red-950 rounded-lg ' >Menues</button>
                </div>
            
        </div>
    );
};

export default Banner;