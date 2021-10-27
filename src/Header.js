import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
export default function Header() {
    return (
        <div className="header">
        <div className="header_logo">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROBZsOV_lhvC7eymRovQqQ4bbxGVZ_JfgBWA&usqp=CAU" className="header_logo" alt="this is dp"></img>
        </div>
        <div className="header_search" >
            <div className="header_extend">
            <input type="search"></input>
            </div>
            <SearchIcon className="header_searchicon"/>
        </div>
        <div className="header_nav">
            <div className="header_options">
                <span className="header_optionLineOn">
                    Hello guest
                </span>
                <span className="header_optionLineOne">
                    Sign In
                </span>
            </div>
            <div className="header_options">
                <span className="header_optionLineOn">
                    Return
                </span>
                <span className="header_optionLineOne">
                    &Order
                </span>
            </div>
            <div className="header_options">
                <span className="header_optionLineOn">
                        Yours
                </span>
                <span className="header_optionLineOne">
                    Prime
                </span>
            </div>
            <div className="header_cart">
                <ShoppingCartIcon />
                <span className="header_cart_numbertwo header_baskerCount"><b>0</b></span>
            </div>
        </div>
        </div>

    )
}
