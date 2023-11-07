import React from 'react';

const FoodsForm = ({cart}) => {
   const {
    _id,
        Food_Name,
        Food_Image,
        Food_Category,
        users_name,
        Price, 
        Food_Origin,
        Description,
      } = cart || {}

    return (
        <div>
            <div>
            <h2>{Food_Name}</h2>
            <p> Price:<span>${Price}</span> </p>
            </div>
            

            <div>
            <select className="select select-info w-full max-w-xs">
  <option disabled selected>1</option>
  <option>2</option>
  <option>3</option>
  <option>4</option>
  <option>5</option>
  <option>6</option>
  <option>7</option>
  <option>8</option>
  <option>9</option>
  <option>10</option>
  <option>11</option>
  <option>12</option>
  <option>13</option>
  <option>14</option>
  <option>15</option>
  <option>16</option>
  <option>17</option>
  <option>18</option>
  <option>19</option>
  <option>20</option>
</select>
            </div>

            <div>
            <h2>Buyer Name: </h2>
            <h2>Buyer Email: </h2>
            
            </div>

            
            
        </div>
    );
};

export default FoodsForm;