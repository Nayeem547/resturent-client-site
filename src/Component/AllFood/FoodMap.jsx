import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import FoodDetails from './FoodDetails';

const FoodMap = ({}) => {

    const [cart, setCart] = useState({});

    const { id } = useParams();
    
    const cartes = useLoaderData();

    useEffect(() => {
        // const findCart = cartes.find(cart=>cart._id === _id);
        // setCart(findCart);
      }, [id, cartes]);

    return (




        <div>
            <FoodDetails key={cart.id} cart={cartes} >
            {" "}
            </FoodDetails>

            {/* <CarDetails >
        {" "}
      </CarDetails> */}
        </div>
    );
};

export default FoodMap;