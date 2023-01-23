import { Component } from "react";
import {BookContext} from "../context/BookContext";
import WishlistBooks from "./WishListBooks";
import React from "react";

class Wishlist extends Component{
    static contextType = BookContext;
    render(){
        const{wishList}:any = this.context;
        console.log(wishList);
        return(
            <div className="books">
                <div><b>My Wishlist</b></div>
                <div className="flex-container">
                    {wishList.length === 0? 
                    <li className="book__placeholder">Nothing in Wishlist</li> : 
                    wishList.map((title:any) => (
                        <WishlistBooks
                            title={title}
                        />
                    ))}
                </div>
            </div>    
        );
    }
}

export default Wishlist;