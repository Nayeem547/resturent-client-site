import React from "react";
import Banner from "./Banner";
import MyFooter from "./MyFooter";
import ExtraSection from "./ExtraSection";
import WelcomePart from "./WelcomePart";

const Home = () => {
 
  return (
    <div>
      <div>
        <Banner></Banner>
      </div>

      <div className=" mt-20 mb-16 flex justify-center items-center text-center   ">
        <WelcomePart></WelcomePart>
      </div>

      <div className=" flex justify-center mb-16 mt-24 flex-col text-center items-center ">
     
        <ExtraSection></ExtraSection>
        
      </div>

      <footer>
    
        <MyFooter></MyFooter>
        
      </footer>

    </div>
  );
};

export default Home;
