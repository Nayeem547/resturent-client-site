import React, { useEffect, useState } from 'react';
import AllFood from './AllFood';
import { useLoaderData } from 'react-router-dom';
import MyFooter from '../Home/MyFooter';
import Search from './Search';


const FoodPagination = () => {
    const [allfoods, setProducts] = useState([]);

    const [currentPage, setCurrentPage] = useState(0);
    const [itemsPerPage, setItemsPerPage] = useState(10);
    const {count} = useLoaderData();

    // const itemsPerPage = 10;
    const numberofPages = Math.ceil(count/ itemsPerPage);

    // const pages = []
    // for(let i = 0; i < numberofPages; i++){
    //     pages.push(i)
    // }
    // console.log(pages);

    const pages = [...Array(numberofPages).keys()];
    console.log(pages);

      //implement search function
      





      //serch function end

     
        
      


    useEffect(() => {
        fetch(`http://localhost:5000/allfoods?page=${currentPage}&size=${itemsPerPage}`)
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [itemsPerPage, currentPage]);


    
    const handleItemsPerPage = e => {
        const val = parseInt(e.target.value);
        setItemsPerPage(val);
        setCurrentPage(0);
    }

    const handlePrevousPage = () => {
      
        if(currentPage > 0){
            setCurrentPage(currentPage - 1)
        }


    }

    const handleNextPage = () => {
      
        if(currentPage < pages.length -1){
            setCurrentPage(currentPage + 1)
        }


    }


    return (
        <div>

            <div>
                <Search></Search>
            </div>

        
        <div className=' flex mx-auto mb-16   flex-col-reverse items-center text-center justify-center mt-16 ' >
             <div className=" justify-center items-center mx-auto text-center  products-container grid md:grid-cols-2  grid-cols-1   lg:grid-cols-3  gap-10 ">
                {
                    allfoods.map(product => <AllFood  key={product._id}
                        product={product}
                       > </AllFood> )
                }
            </div>

            <div className=' text-2xl font-semibold mb-12 space-y-6 ' >
                <p>Current Page : {currentPage}</p>
               
                
              <div className=' flex justify-center flex-wrap  gap-7 ' >

              <button className=' bg-gray-900  rounded-lg text-white py-2 px-3 text-xl ' onClick={handlePrevousPage} >prev</button>
                {
                    pages.map(page => <button
                
                    className={  currentPage === page  ? ' text-xl bg-black  rounded-lg py-1 px-4  text-white ' : undefined }
                        onClick={() => setCurrentPage(page)} 
                        key={page} >{page}</button>)

                }

            <button className=' bg-gray-900  rounded-lg text-white py-2 px-3 text-xl '  onClick={handleNextPage} >Next</button>
            </div>

                

                <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
                    {/* <option value="5">5</option> */}
                    <option value="10">10</option>
                    {/* <option value="20">20</option>
                    <option value="50">50</option> */}
                </select>
            </div>
        </div>

        <footer>
            <MyFooter></MyFooter>
        </footer>


        </div>
    );
};

export default FoodPagination;