import React from 'react'
import Product from './Product'

export default function Home() {
    return (
        <div>
            <div className="images_main">
                <img src="https://www.businessinsider.in/photo/86677398/amazon-great-indian-festival-2021-deals-on-smartphones-wearables-laptops-and-more.jpg?imgsize=85140" className="home_Img"alt="check your internert connectivity" ></img>
            </div>
            <div className="home_row">
                <Product titles="Realmi c11" price={30} image="https://m.media-amazon.com/images/I/31-lVlmtanL._AC_SY200_.jpg" rating={5} />
                <Product />
            </div>
            <div className="home_row">
                <Product titles="Fire TV stick" price={1799} image="https://images-eu.ssl-images-amazon.com/images/G/31/img17/AmazonDevices/2019/Jupiter-21/phase4/1x_top_products_Tile_3._SY116_CB637842464_.jpg" rating={4}/>
                <Product />
                <Product />
            </div> <div className="home_row">
                {/* Product */}
            </div>
        </div>
    )
}
 