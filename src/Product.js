
import React from 'react'
import "./product.css"
import Rating from '@mui/material/Rating';
import { Button } from '@mui/material';




export default function Product({titles,price,image,ratings}) {
    return (
        <div className="product">
            <div className="product_number">
          <div className="product_name">
              <p>Title:i{titles} </p>
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
    );
}
