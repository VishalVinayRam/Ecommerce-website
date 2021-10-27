
import React from 'react'
import { Rating,Button } from '@mui/material'

export default function Checkout({title,price,ratings,image}) {
    return (
        <div className="product">
            <div className="product_number">
          <div className="product_name">
              <p>Title:helo{title} </p>
          </div>
          <p>
                      </p>
                  <strong contentEditable>
                      Price:{price}
                  </strong>
                  <h4><Rating />{ratings}
                      </h4>
          <div className="product_price">
              <small>
                  <div className="product_pic">
                  <img src={image} alt="Check your internet connectivity"></img>
                  </div>
                  </small>
                  <Button variant="contained">Add to cart</Button>
                 </div>
          </div>
              <div>

              </div>
        </div>
    )
}
