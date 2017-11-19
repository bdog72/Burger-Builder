import React from 'react'

import Aux from '../../../hoc/Aux'

const orderSummary = (props) => {
  const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
      return  <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}
              </li>
    })
  return (
      <Aux>
          <h3>Your Order</h3>
          <p>A Delicious Burger with the following ingredients:</p>
          <ul>
            {ingredientSummary}
          </ul>
          <p>Continue To CheckOut?</p>
      </Aux>
  )
}

export default orderSummary