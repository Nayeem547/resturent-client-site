import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Provider/AuthProvider';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateCart = ({}) => {

    const cartes = useLoaderData();
  const { _id, Food_Name, Food_Image, Food_Category,Food_Origin, Quantity, Price, Description } = cartes;

    
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


    //Add Foods function

    

    const handleAddCart = (event) => {
        event.preventDefault();

        if(user){
        
        const form = event.target;
        
        
        const Food_Name = form.name.value;
        const Food_Image= form.FoodImage.value;
        const Food_Category= form.FoodCategory.value;
        const Food_Origin= form.FoodOrigin.value;
        const Quantity = form.Quantity.value;
        const Price = form.Price.value;
        const Description = form.Description.value;

        const UpdateCard = {
            Food_Name,
            Food_Image,
            Food_Category,
            Food_Origin,
            Quantity,
            Price,
            Description
        }
        
        
    
        fetch(`https://resturent-manage-server.vercel.app/allfoods/${_id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(UpdateCard),
        }).then(res => res.json())
        .then((data) => { 
          if (data.modifiedCount > 0) {
            Swal.fire("Done!", "Your item has been Added.", "success");
          };
      });
    };
      
    };

    return (
        <div>
             <div  className=' flex justify-center text-center  '>
             <div className=' w-96 mt-16   '>
      <h2 className=" text-3xl font-extrabold ">Add a Food</h2>

      <form onSubmit={handleAddCart}>


        {/* my div */}

       <div className=' flex flex-col lg:flex-row  justify-center gap-10  '>

       

        

        
        <div className=" md:flex flex-col mb-8 gap-5 ">
          <div className=" form-control md:w-44 ">
            <label className=" label ">
              <span>Food Name</span>
            </label>
            <label className=" input-group ">
              <input
                type="text"
                name="name "
                defaultValue={Food_Name}
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
                defaultValue={Food_Image}
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
                defaultValue={Food_Category}
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
                defaultValue={Price}
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
                defaultValue={Description}
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
                defaultValue={Food_Origin}
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
                defaultValue={Quantity}
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


        </div> 
        {/* my div */}

       

        <input
          type="submit"
          value="Add Card"
          className=" btn btn-block mt-8 bg-slate-800 text-white "
        />
      </form>
    </div>
        </div>
        </div>
    );
};

export default UpdateCart;