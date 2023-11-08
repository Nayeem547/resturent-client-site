import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../Provider/AuthProvider";
import swal from "sweetalert";
import Swal from "sweetalert2";

const FoodsForm = ({cart}) => {

   const {
    _id,
        Food_Name,
        users_name,
        Food_Image,
        Price, 
        
      } = cart || {}






      //Handle Purachse
      
      const [selectedQuantity, setSelectedQuantity] = useState(1);

      const handleOrderFood = () => {
        // Create an object representing the item to be added to the cart
        const itemToAdd = {
            email: user.email,
          productId: _id, // Assuming _id is part of brandDetails
          names: Food_Name,
          image: Food_Image,
          Owner: users_name,
          Price: Price,
          quantity: selectedQuantity,
          selectedDate
          
        };
      
        // Send a POST request to your server to add the item to the cart
        fetch('https://resturent-manage-server.vercel.app/userStore', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(itemToAdd),
        })
          .then((res) => res.json())
          .then((data) => {
            Swal.fire({
                title: "Success!",
                text: "User Update succesfully",
                icon: "success",
                confirmButtonText: "Cool",});
                console.log(data);
            // Handle the response from the server
            
            // You can also update your UI to indicate that the item was added to the cart
          })
          .catch((error) => {
            // Handle any errors that occur during the request
            console.error('Error adding item to the cart:', error);
          });
      };







      //Date picker
      const [selectedDate, setSelectedDate] = useState(null);

      const handleDateChange = (date) => {
        setSelectedDate(date);
      };


      //User info

      const {user} = useContext(AuthContext);
    
      const [userdata, setUserdata] = useState();
      
  
     const  handleinfo = () => {
      fetch(`https://resturent-manage-server.vercel.app/user/${user?.email}`) // Replace with your actual API endpoint
          .then((res) => res.json())
          .then((data) => {
             // Assuming the API response contains { name, img }
            setUserdata(data);
          })
          .catch((error) => {
            console.error('Error fetching user data:', error);
          });
     }
  
  
      
      useEffect(() => {
        // Make an API request to fetch user data
        handleinfo();
      }, [user?.email]);
    





    return (
        <div className=" flex flex-col md:text-2xl text-xl lg:text-3xl pb-20 rounded-lg shadow-lg border  px-32 justify-center items-center text-center  ">
            <div className=" py-16 ">   <h2 className=" font-bold "> Order Here  </h2> </div>
          
            <div className="  grid gap-24 grid-cols-1 lg:grid-cols-2 ">

           
            <div className="space-y-8 text-left ">
            <h2 className=" text-red-600 font-serif font-bold ">{Food_Name}</h2>
            <p className= " font-bold " > Price:<span className=" font-semibold text-red-600 ">${Price}</span> </p>

            <h2 className= " font-semibold ">Buyer Name:{userdata?.name}  </h2>
            <h2 className=" font-semibold "> Buyer Email:{userdata?.email} </h2>
            </div>
            

            

            <div className=" space-y-10 " >
            <div className=" font-semibold space-y-2 ">
                <h2>Quantity</h2>
                <select
  className="select select-info w-full max-w-xs"
  value={selectedQuantity}
  onChange={(e) => setSelectedQuantity(parseInt(e.target.value))}
>
  <option value={1}>1</option>
  <option value={2}>2</option>
  <option value={3}>3</option>
  {/* Add more options as needed */}
</select>
            </div>            

            <div className="App">
      <h1>Date Picker</h1>
      <DatePicker selected={selectedDate} onChange={handleDateChange} />
      
    </div>
     
            </div>

           

            
            </div>
            <div className=" mt-8 text-center ">
                <button onClick={handleOrderFood} className=" text-xl py-3 px-4 bg-red-600 text-white rounded-lg ">Purchase</button>
            </div>
        </div>
    );
};

export default FoodsForm;