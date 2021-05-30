import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOneProduct, setProduct } from '../store/actions/productActions';
import { useParams } from 'react-router-dom';
import { addToCart } from '../store/actions/cartActions';

const ProductPage = () => {

  

  const _id = useParams()._id
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOneProduct(_id))

    return () => {
      dispatch(setProduct(null))
    }

  }, [dispatch, _id])

  const product = useSelector(state => state.product.product);

  const _product = ( product && 
    <div className="productCard">
      <div className="productCard-image">
        <img src= { product.image } alt=""/>
      </div>
      <div className="productCard-text">
        <h2> { product.name  } </h2>
        <h3>  { product.price } Kr </h3>
        <p>  { product.desc  } </p>
        <button onClick={() => { 
          dispatch(addToCart(product))
        }}>Lägg till</button>
      </div>
    </div>)

  return (
    <div>
      { _product }
      
    </div>
  )
}

export default ProductPage
