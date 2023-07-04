import React, {useContext} from 'react';
import { DataContext } from '../context/Dataprovider';
import ProductoItem from "./ProductoItem.jsx";

const Productos = () => {

  const value = useContext(DataContext)
  const [productos] = value.productos

  console.log(productos)


  return (
    <>
      <h1 className='title'>PRODUCTOS</h1>
      <div className='productos'>
        {
          productos.map(producto =>(
            <ProductoItem 
              Key={producto.id}
              id={producto.id} 
              title={producto.title} 
              price={producto.price} 
              image={producto.image} 
              category={producto.category} 
              cantidad={producto.cantidad}  
            />
          ))   
        }
        
      </div>
    </>
  )
}

export default Productos;
