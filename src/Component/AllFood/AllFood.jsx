import React from 'react';
import { Link } from 'react-router-dom';

const AllFood = (props) => {
    const {_id, Food_Name, Food_Image, Food_Category, Price } = props.product;
    return (
        <div className=' ' >
            
<div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
        <img className="p-8 h-80 w-[100%]  rounded-t-lg" src={Food_Image} alt="product image" />
    
    <div className="px-5 pb-5">

        <div>

       
        
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
             {Food_Name}
            </h5>
            <p> Quantity: </p>
            </div>
        <div className="flex items-center mt-2.5 mb-5">
            {Food_Category}
        </div>
        <div className="flex items-center justify-between">
     <span className="text-3xl font-bold text-gray-900 dark:text-white">${Price}</span>
         <Link to={`/foodDetails/${_id}`} > 
         <button>Details</button>
         </Link>
            
        </div>
    </div>
</div>

        </div>
        
    );
};

export default AllFood;