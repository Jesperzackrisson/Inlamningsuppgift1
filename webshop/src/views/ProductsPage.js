import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../store/actions/productActions';
import Products from '../components/Products/Products';


const ProductsPage = () => {

    const dispatch = useDispatch();
    

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])

    const products = useSelector(state => state.product.products)


    return (
        <div className="products-list">
            

                {products && products.map(product => <Products key={product._id} product={product} />)}
            
        </div>
    )
}

export default ProductsPage
