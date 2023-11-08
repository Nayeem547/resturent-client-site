import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const MyAddFoods = () => {
    
    const { user } = useContext(AuthContext);

    const [cartItems, setCartItems] = useState([]);
  
    useEffect(() => {
      // Fetch cart items from the server when the component mounts
      fetch(`https://resturent-manage-server.vercel.app/allfoods/${user?.email}`)
        .then((res) => res.json())
        .then((data) => setCartItems(data));
    }, []);

    return (
        <div className=' flex justify-center flex-col items-center text-center mt-20  '>
           
           <h2 className=' text-3xl font-semibold font-serif mb-10 '>My Added Food</h2>
       
        <div className=' grid grid-cols-3 gap-10 ' >
             {cartItems.map((item) => (
            <div key={item._id}>

  <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <img className="p-8 h-80 w-[100%]  rounded-t-lg" src={item.Food_Image} alt="product image" />
    <div className="px-5 pb-5">
      <div>
        <h5 className="text-xl font-semibold  ">
          {item.Food_Name}
        </h5>
        
      </div>
      
      <div className="flex items-center justify-between">
        <span className="text-3xl font-bold text-gray-900 dark:text-white">${item.Price}</span>
        <Link to={`/Updatecart/${item._id}`} >
          <button className=' py-2 px-3 bg-red-600 text-white rounded-lg hover:bg-red-900' >Details</button>
        </Link>
      </div>
    </div>
  </div>
</div>
            
     ) ) }
        </div>

        </div>
    );
};

export default MyAddFoods;