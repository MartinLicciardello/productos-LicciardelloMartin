import React from 'react';
import Item from './CardListComponent/Item';
import ItemCount from './ItemCount';

export const ItemListContainer = (props) => {
        return (<div>
                    
                    <h1 style={{border: `10px solid ${props.color}`}}>Nuestros Productos en Stock</h1>
                   
                   
                  <div className='container'>
                      <div className='row'>
                            <div className='col-md-4'>
                                <Item/>
                            </div>
                      </div> 
                  </div> 
                   
                   
                   
                    <ItemCount></ItemCount>
                </div>);
        };
