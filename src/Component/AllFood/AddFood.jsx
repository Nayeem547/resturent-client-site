import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';


import swal from 'sweetalert';

const AddFood = () => {

    //User info

    const {user} = useContext(AuthContext);
    
    const [userdata, setUserdata] = useState();
    

   const  handleinfo = () => {
    fetch(`http://localhost:5000/user/${user?.email}`) // Replace with your actual API endpoint
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


    //Add Foods function

    

    const handleAddCart = (event) => {
        event.preventDefault();

        if(user){
        
        const form = event.target;
        const email = user.email;
        
        const Food_Name = form.name.value;
        const Food_Image= form.FoodImage.value;
        const Food_Category= form.FoodCategory.value;
        const Food_Origin= form.FoodOrigin.value;
        const Quantity = form.Quantity.value;
        const Price = form.Price.value;
        const Description = form.Description.value;
        
        
    
        fetch("http://localhost:5000/allfoods", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email,
            Food_Name,
            Food_Image,
            Food_Category,
            Food_Origin,
            Quantity,
            Price,
            Description
          }),
        }).then(res => res.json())
        .then((data) => { 
            if (data.insertedID) {
              swal.fire({
                title: "Success!",
                text: "Category added succesfully",
                icon: "success",
                confirmButtonText: "Cool",
              });
            }
            console.log(data);
        });
    };
      
    };

    return (
        <div  className=' flex justify-center text-center  '>
             <div className=' w-96 mt-16 '>
      <h2 className=" text-3xl font-extrabold ">Add a Food</h2>

      <form onSubmit={handleAddCart}>


        

       

        

        
        <div className=" md:flex flex-col mb-8 gap-5 ">
          <div className=" form-control md:w-44 ">
            <label className=" label ">
              <span>Food Name</span>
            </label>
            <label className=" input-group ">
              <input
                type="text"
                name="name "
                placeholder="Food Name"
                className=" input input-bordered w-full "
              />
            </label>
          </div>
          <div className=" form-control md:w-44 ">
            <label className=" label ">
              <span>Food Image</span>
            </label>
            <label className=" input-group ">
              <input
                type="text"
                name="FoodImage"
                placeholder="Photo url"
                className=" input input-bordered w-full "
              />
            </label>
          </div>
          
          <div className=" form-control md:w-56">
            <label className=" label ">
              <span> Food Category</span>
            </label>
            <label className=" input-group ">
              <input
                type="text"
                name="FoodCategory"
                placeholder="Food Category"
                className=" input input-bordered w-full "
              />
            </label>
          </div>

        </div>


        <div className=" md:flex mb-8 gap-5">
          
        </div>

        




        <div>

        

        <div className=" md:flex mb-8 gap-5">
          <div className=" form-control md:w-56 ">
            <label className=" label ">
              <span>Price</span>
            </label>
            <label className=" input-group ">
              <input
                type="text"
                name="Price"
                placeholder="Price"
                className=" input input-bordered w-full "
              />
            </label>
          </div>
          <div className=" form-control md:w-56 ">
            <label className=" label ">
              <span>Short description </span>
            </label>
            <label className=" input-group ">
              <input
                type="text"
                name="Description"
                placeholder="description"
                className=" input input-bordered w-full "
              />
            </label>
          </div>
        </div>



        <div className=" md:flex mb-8 gap-5">
          <div className=" form-control md:w-56 ">
            <label className=" label ">
              <span>Food Origin</span>
            </label>
            <label className=" input-group ">
              <input
                type="text"
                name="FoodOrigin"
                placeholder="Food Origin"
                className=" input input-bordered w-full "
              />
            </label>
          </div>
          <div className=" form-control  md:w-56 ">
            <label className=" label ">
              <span>Quantity </span>
            </label>
            <label className=" input-group ">
              <input
                type="text"
                name="Quantity"
                placeholder="Quantity"
                className=" input input-bordered w-full "
              />
            </label>
          </div>
        </div>



        <div className=" md:flex mb-8 gap-5">
          <div className=" form-control md:w-56 ">
            <label className=" label ">
              <span>User Name</span>
            </label>
            <label className=" input-group ">
              <input
                type="text"
                name="UserName"
                placeholder={userdata?.name}
                className=" input input-bordered text-xl  font-semibold w-full "
               readOnly
              />
            </label>
          </div>
          <div className=" form-control md:w-56 ">
            <label className=" label ">
              <span>User email </span>
            </label>
            <label className=" input-group ">
              <input
                type="text"
                name="Useremail"
                placeholder={userdata?.email}
                className=" input input-bordered text-xl  font-semibold w-full "
                readOnly
              />
            </label>
          </div>
        </div>

        </div>


        

       

        <input
          type="submit"
          value="Add Card"
          className=" btn btn-block mt-8 bg-slate-800 text-white "
        />
      </form>
    </div>
        </div>
    );
};

export default AddFood;