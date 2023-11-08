import React from 'react';
import { Link } from 'react-router-dom';
import { motion} from 'framer-motion';

const AllFood = (props) => {
    const {_id, Food_Name, Food_Image, Food_Category, Price } = props.product;

    


    return (
//         <div className=' ' >
            
// <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    
//         <img className="p-8 h-80 w-[100%]  rounded-t-lg" src={Food_Image} alt="product image" />
    
//     <div className="px-5 pb-5">

//         <div>

       
        
//             <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
//              {Food_Name}
//             </h5>
//             <p> Quantity: </p>
//             </div>
//         <div className="flex items-center mt-2.5 mb-5">
//             {Food_Category}
//         </div>
//         <div className="flex items-center justify-between">
//      <span className="text-3xl font-bold text-gray-900 dark:text-white">${Price}</span>
//          <Link to={`/foodDetails/${_id}`} > 
//          <button className=' py-2 px-3 bg-red-600 text-white rounded-lg hover:bg-red-900 ' >Details</button>
//          </Link>
            
//         </div>
//     </div>
// </div>

//         </div>

<motion.div
layoutId={_id}

initial={{ opacity: 0, scale: 0.8 }}
animate={{ opacity: 1, scale: 1 }}
exit={{ opacity: 0, scale: 0.8 }}
>
<div className=''>
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
          <button className=' py-2 px-3 bg-red-600 text-white rounded-lg hover:bg-red-900' >Details</button>
        </Link>
      </div>
    </div>
  </div>
</div>
</motion.div>
        
    );
};

export default AllFood;