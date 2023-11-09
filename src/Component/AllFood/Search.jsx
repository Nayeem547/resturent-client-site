import React, {  useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const Search = ({}) => {


    const {Food_Name} = useParams();
     const getCategory = useLoaderData({});
       
    

        // const handleSearch = (e) => {
        //     e.preventDefault();
        //     const foodName = e.target.foodName.value.toLowerCase();
        //     const filterData = getCategory.filter(
        //       (data) => data.Food_Name.toLowerCase().includes(foodName)
        //     );
        //     setCategory(filterData);
        //   };
          
  


    
    // const [category, setCategory] = useState([]);
  
    // const handleSearch = (e) => {
    //   e.preventDefault();
    //   let CategoryName = e.target.name.value;
    //   let filterData = getCategory.filter(
    //       (data) => data.category.toLowerCase() == CategoryName.toLowerCase()
    //     );
    //     setCategory(filterData);
  
    //   fetch(`https://resturent-manage-server.vercel.app/allfoods?category=${categoryName}`)
    //     .then((response) => response.json())
    //     .then((data) => {
    //       setCategory(data);
    //     })
    //     .catch((error) => {
    //       console.error('Error fetching data:', error);
    //     });
    // };
  


    return (
        <div>
        
        </div>
    );
};

export default Search;