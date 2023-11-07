import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';

const MyOrder = () => {
     
    const { user } = useContext(AuthContext);

    const [cartItems, setCartItems] = useState([]);
   
  
    useEffect(() => {
      // Fetch cart items from the server when the component mounts
      fetch(`http://localhost:5000/userStore/${user.email}`)
        .then((res) => res.json())
        .then((data) => setCartItems(data));
    }, []);

    
    //Delete Function

    return (
        <div>
            <div className=" flex justify-center mt-16 ">
      <ul className=" grid grid-cols-1 lg:grid-cols-2 gap-5 items-center justify-center mx-auto ">
        {cartItems.map((item) => (
          <li key={item._id} >
            <div className="card   h-[500px] w-[300px] lg:w-[500px] bg-base-100 shadow-xl">
              <figure>
                <img
                  className="rounded-2xl w-[1200px] h-[350px]"
                  src={item.image}
                  
                />
              </figure>
              <div className="card-body h-[300px]">
                <h2 className="card-title text-2xl">{item.names}</h2>
                <h2 className=' text-xl font-semibold '>Owner: {item.Owner}</h2>
                <p className=' font-semibold '>Price: <span className=' text-red-600 '>${item.Price}</span></p>
                <p className="italic text-xl font-semibold"> Date: <span className=' text-sm ' >{item. selectedDate}</span> </p>
                {/* <button onClick={() => handleDelete(item._id) } className="btn">Delete</button> */}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
        </div>
    );
};

export default MyOrder;