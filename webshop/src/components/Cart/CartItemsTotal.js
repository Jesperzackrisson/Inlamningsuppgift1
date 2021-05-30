import React from 'react'
import { useSelector } from 'react-redux'

const CartItemsTotal = () => {

    const totalAmount = useSelector(state => state.cartReducer.totalAmount)
    const totalQuantity = useSelector(state => state.cartReducer.totalQuantity)


    return (
        <tr>
            <td>{ totalQuantity }</td>
            <td> { totalAmount }</td>
        </tr>
    )
}

export default CartItemsTotal
