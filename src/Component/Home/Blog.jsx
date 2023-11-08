import React from "react";
import MyFooter from "./MyFooter";

const Blog = () => {
  return (


    <div>

   

    <div className=" mt-20 flex flex-col justify-center items-center text-center ">

 
    <div >
        <h2 className=" text-2xl lg:text-6xl text-red-600 font-serif font-semibold mb-16 " >FAQ</h2>
      </div>
    <div className=" text-xl lg:text-3xl grid grid-cols-1 gap-4 lg:grid-cols-3  " >
      
      <div className=" space-y-3 ">
        <h2 className=" text-red-600 font-semibold font-serif  ">What is One way data binding?</h2>
        <p className="text-[25px] font-thin ">One-way data binding is a data flow mechanism used in many front-end and UI frameworks like React, Angular, and Vue.js. In one-way data binding, data flows in one direction, typically from the model (or data source) to the view (UI). Changes in the model trigger updates in the view, but changes in the view do not directly affect the model.</p>
      </div>
      <div className="  space-y-3 ">
        <h2  className=" text-red-600 font-semibold font-serif  ">What is NPM in node.js?</h2>
        <p className="text-[25px] font-thin ">NPM, which stands for "Node Package Manager," is a package manager for Node.js, a runtime environment for executing JavaScript on the server-side. NPM is a critical tool for managing JavaScript libraries and packages, and it comes bundled with Node.js when you install it.</p>
      </div>
      <div className="  space-y-3 ">
        <h2  className=" text-red-600 font-semibold font-serif  ">Different between Mongodb database vs mySQL database.</h2>
        <p className=" text-[25px] font-thin ">
        MongoDB uses a flexible, schema-less document-based model, ideal for unstructured data, while MySQL relies on a fixed tabular model with strong schema enforcement. MongoDB scales horizontally and supports complex queries using a JSON-like language, while MySQL traditionally scales vertically and uses SQL for querying. MongoDB provides tunable consistency and is popular for real-time analytics, while MySQL ensures strong ACID compliance and is widely used in e-commerce and financial systems. Choose based on your data structure and consistency needs
        </p>
      </div>
    </div>


    </div>

<footer className=" mt-10 ">
    <MyFooter></MyFooter>
</footer>

    </div>
  );
};

export default Blog;
