import React from 'react'
import { Link } from 'react-router-dom';

const Products = ({product}) => {
    return (
        <div className="card">
            
                <Link to={`/products/${product._id}`} className="cardImage">
                    <img src={ product.image } alt=""/>
                </Link> 
                <div className="cardText">
                    <h1>{ product.name} </h1>
                    <p>{ product.short }</p>
                </div>
                {/* <div className="cardCheckout">
                    <p>Lägg till</p>
                </div> */}
            
        </div>
    )
}

export default Products
