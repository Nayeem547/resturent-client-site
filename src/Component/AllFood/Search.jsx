import React, {  useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Search = () => {



     const getCategory = useLoaderData();
        const [category, setCategory] = useState(getCategory);
    

    const handleSearch = (e) => {
        e.preventDefault();
       
        const categoryName = e.target.category.value.toLowerCase();
        const filterData = getCategory.filter(
            (data) => data.category.toLowerCase() === categoryName
        );
        setCategory(filterData);
    };

  


    
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
            <div>

<form onSubmit={handleSearch}>
<input
className="pl-1 pr-8 md:pl-2 lg:pl-2 md:pr-16 lg:pr-16 border rounded-l-md border-[#DEDEDE] py-1 md:py-2 lg:py-2"
placeholder="Search by Category..."
type="text"
name="category"
></input>
<button className="px-2 py-[5px] md:py-2 lg:py-2 rounded-r-md bg-[#FF444A] text-white">
Search
</button>
</form>

</div>
        </div>
    );
};

export default Search;