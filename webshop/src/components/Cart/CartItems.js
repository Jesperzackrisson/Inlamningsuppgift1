import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/actions/cartActions'; 

const CartItems = ({product}) => {

    const TotalPrice = (price, quantity) => {
        return price * quantity;
    }

    const dispatch = useDispatch();

    const add = e => {
        e.stopPropagation();
        dispatch(addToCart(product))
      }
    
      const remove = e => {
        e.stopPropagation();
        dispatch(removeFromCart(product._id))
      }

    return (
   
            <tr>
                <td className="imageTable">  <img src={ product.image }  alt=""/> </td>
                <td>  { product.name }      </td>
                <td>  { product.quantity }  </td>
                <td>  { TotalPrice(product.price, product.quantity)} kr  </td>
                <td className="buttonsTable">
                    <i className="fas fa-plus" onClick={add}></i>
                    <i className="fas fa-trash"></i>
                    <i className="fas fa-minus" onClick={remove}></i>
                </td>
                
            </tr>

            

            
            
        
    )
}

export default CartItems
