import React from "react";
import plat from "../../assets/home-03-353x395.png";
import fools from "../../assets/icon-02-96x96.png";
const ExtraSection = () => {
  return (
    <div className=" mt-10 w-40 lg:w-full mb-10  ">
      <div className=" text-center mx-auto flex justify-center ">
        <img src={fools} alt="" />
      </div>
      <div className=" grid grid-cols-1 md:grid-cols-1  lg:grid-cols-3 text-center justify-center items-center ">
        <div className=" text-md lg:text-xl space-y-6 ">
          <h2 className=" text-xl lg:text-4xl font-semibold font-serif text-red-600 ">
            Opening Hours
          </h2>
          <div>
            <p>Monday — Thursday</p>
            <p>11 am — 10:30 pm</p>
          </div>

          <div>
            <p>Monday — Thursday</p>
            <p>11 am — 10:30 pm</p>
          </div>
          <p>Restaurant is closed on holidays.</p>
        </div>

        <div className=" w-32 lg:w-full ">
          <img className="" src={plat} alt="" />
        </div>

        <div className=" text-md lg:text-xl space-y-6 ">
          <h2 className=" text-xl lg:text-4xl font-semibold font-serif text-red-600 ">Contact info</h2>

          <div>
            <p>3891 Ranchview Dr. Richardson,</p>
            <p>California 62639</p>
          </div>
          <div>
            <p>(704) 555-0127</p>
            <p>info@demolink.rog</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExtraSection;
