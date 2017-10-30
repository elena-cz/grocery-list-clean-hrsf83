import React from 'react';
// import GroceryItem from 'GroceryItem';



const GroceryList = ({groceries}) => (
  <div className="groceries"> 
    <h1>Grocery List</h1>
    {groceries.map( item => (
      <GroceryItem item={item} />
      ))}
  </div>
)


const GroceryItem = ({item}) => (
  <div>{item.description}</div>
)


export default GroceryList;