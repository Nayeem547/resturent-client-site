import React from 'react';
import FoodMap from './FoodMap';

const FoodDetails = ({cart}) => {
    const  {
        _id,
        Food_Name,
        Food_Image,
        Food_Category,
        users_name,
        Price, 
        Food_Origin,
        Description,
      } = cart || {}
      
    return (
        <div className=' text-center mt-16 ' >
             <h2 className=' mb-16 font-serif md:text-2xl text-xl lg:text-5xl text-red-600 font-bold ' >{Food_Name}</h2>
            <div className=' w-[300px] md:w-[600px] lg:w-[800px] mx-auto  flex flex-row-reverse justify-center items-center ' >
           
        <div className=' flex  justify-center items-center  ' >
            <img className=' rounded-xl  w-[700px]  h-80 md:h-96 lg:h-96 ' src={Food_Image} alt="" />
        </div>
        <div className=' text-left text-4xl mr-10  space-y-5 justify-center flex flex-col ' >
            <h1 className=' text-4xl font-semibold '>{Food_Category}</h1>
            
           
            <h4 className=' font-semibold'>Food Origin: {Food_Origin}</h4>
            <h5 className=' font-semibold'>Made By: {users_name}</h5>
            <p className=' text-lg w-auto ' >{Description}</p>
             <p className=' font-semibold  ' > Price: <span className=' text-red-600 '>{Price}</span></p>

             <div className=' mt-10 '>
             <button   className=' py-2 px-4 bg-red-600 text-white rounded-lg hover:bg-red-800 text-xl btn ' > Add Cart </button>
             </div>

             
        </div>
      </div>
        </div>
    );
};

export default FoodDetails;