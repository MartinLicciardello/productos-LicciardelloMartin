import React, { useState, useEffect } from 'react';

import ItemList from '../UserComponents/ItemList';

const Item = () => {
    const[users,setUsers] = useState([]);

    useEffect(() =>{
        fetch('https://api.github.com/users')
                .then(response => response.json())
                .then((json) => setUsers(json));
    }, []);

  return (<div>
      
          {users.map((user) => {
          return( <div>  <ItemList data ={user}/> </div>);
          })}  
         
          
          </div>);
};

export default Item;
