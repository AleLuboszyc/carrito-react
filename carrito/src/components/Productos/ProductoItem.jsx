import React from 'react'
import { Link } from 'react-router-dom';

const ProductoItem = ({title, price, image, category}) => {
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
                <button className='btn'>Añadir al carrito</button>
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
