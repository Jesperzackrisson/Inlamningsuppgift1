import React from 'react'
import { useSelector } from 'react-redux';
import CartItems from '../components/Cart/CartItems';

const Cart = () => {

    const Cart = useSelector(state => state.cartReducer.Cart)

    const totalAmount = useSelector(state => state.cartReducer.totalAmount)

    return (
        <div className="cart">
            <h1>Kundvagn</h1>
            <table className="cartTable">
                <thead>
                    <tr>
                        <th>Produkt</th>
                        <th></th>
                        <th>Antal</th>
                        <th>Pris</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Cart && Cart.map(product => (
                            <CartItems key={product._id} product={product} />
                        ))
                    }   
                </tbody>
                
            </table>

            <table className="checkoutTable">
                 <thead>
                     <tr>
                         <th>Kundvagn total</th>
                         
                     </tr>
                 </thead> 
                 <tbody>
                    <tr>
                        <td>Total: { totalAmount } Kr</td>
                    </tr>
                 </tbody> 
                 <tfoot>
                     <tr>
                         <td>
                             <button>gå vidare</button>
                         </td>
                         
                     </tr>
                 </tfoot> 
            </table>
            
        </div>
    )
}

export default Cart
