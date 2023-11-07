import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import FoodsForm from './FoodsForm';


const FoodFormMap = () => {
    
    const [cart, setCart] = useState({});

    const { id } = useParams();
    
    const cartes = useLoaderData();

    useEffect(() => {
        // const findCart = cartes.find(cart=>cart._id === _id);
        // setCart(findCart);
      }, [id, cartes]);

      return(
        <div className=' h-96 flex flex-col text-center justify-center mt-32 items-center '>
            
             <FoodsForm key={cart.id} cart={cartes}>
            {" "}
            </FoodsForm>
        </div>
    );
};

export default FoodFormMap;