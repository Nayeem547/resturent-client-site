import React from 'react';

import partone from "../../assets/partone.jpg"
import parttwo from "../../assets/parttwo.jpg"
import foller from "../../assets/folerb.png"

const WelcomePart = () => {
    return (
        <div className=' grid grid-cols-1 lg:grid-cols-2 '>
            <div>
                <h2>Welcome To Foodoko <br /> Restaurant</h2>
                <div><img src={parttwo} alt="" /></div>
            </div>

            <div className=' space-y-5 '>
                <p className=' font-medium italic '>We are happy to help you for a business lunch, family dinner or a quick bite. We prepare our dishes in the traditional way and serve them fairly quickly on the table. Would you like to experience how the dishes in the Far East taste?</p>
                <p>Then you are welcome every day from 11:00 am to 10:30 pm. Prefer to spoil the family at home? Call & order, it’s efficient and fast!</p>
                <div>
                    <img src={partone} alt="" />
                </div>
            </div>
        </div>
    );
};

export default WelcomePart;