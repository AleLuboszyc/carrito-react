import React, {useContext} from 'react'
import { Link } from 'react-router-dom';
import { DataContext } from '../context/Dataprovider';

const ProductoItem = ({id, title, price, image, category}) => {

    const value = useContext(DataContext);
    const addCarrito = value.addCarrito;


    return (
        <div className="producto">
            <Link to="#">
                <div className="producto__img">
                    <img src={image} alt={title} />
                </div>
            </Link>
            <div className="producto__footer">
                <h1> {title} </h1>
                <p> {category} </p>
                <p className='price'>${price}</p>
            </div>
            <div className="boton">
                <button className='btn' onClick={() => addCarrito(id)}>Añadir al carrito</button>
                <div>
                    <Link to="#" className='btn'>
                        Vista
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ProductoItem;