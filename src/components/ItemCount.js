import React, { useState } from 'react';
// import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const ItemCount = () => {
    // counter: el nombre de la variable de mi estado
    // setCounter: es la función que me permite actualizar el
    // estado
    // useState(10) lo que esta dentro de lo paréntesis es el valor
    // de mi counter
  
    const stock = 5;
    

    const [counter, setCounter] = useState(1);
  
    const handlerCounterUp = () => {
        if(counter < stock){
            setCounter(counter + 1)
         }
    };
  
    const handlerCounterDown = () => {
        if(counter > 0){
           setCounter(counter - 1)
        }
      };


    // const handlerCounter = (event) => {
    //     const name = event.target.name
    //     if (name === "increment"){
    //         if(counter < stock){
    //             setCounter(counter + 1)
    //          }
    //     }else{
    //         if(counter > 0){
    //             setCounter(counter - 1)
    //          }
    //     }
        
    // }



    return (
      <div className="counterStyle">
        <h1>Celular <strong>Iphone X</strong></h1>
        <p>CANTIDAD: {counter}</p>
        <div><Button className="buttonStyle"    color="success" onClick={handlerCounterUp} >+</Button>
         <Button className="buttonStyle"   color="success" onClick={handlerCounterDown} >-</Button></div>
         <Button variant="outlined">Agregar al Carrito</Button>
        {/* <Button className="buttonStyle"   color="success" onClick={handlerCounter} name="increment" >Incrementar</Button>
        <Button className="buttonStyle"   color="success" onClick={handlerCounter} name="decrement">Decrementar</Button>   */}
      </div>
    );
  };
  
  export default ItemCount;