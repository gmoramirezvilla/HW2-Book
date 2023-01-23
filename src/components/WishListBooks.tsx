import { Component } from "react";
import React from "react";
import { BookContext } from "../context/BookContext";
import "./css/WishListBooks.css"

interface WishListBooksProps  {
    title:string;
}

class WishListBooks extends Component<WishListBooksProps> {
    static contextType = BookContext;
    render() {
        const {removeBook}:any = this.context;
        const {title}:any  = this.props;
        return (
            <div>
                {title}
                <button id={title} className="removeBotton" value="Remove Book" onClick={removeBook}>Remove Book</button>
            </div>
        );
    }
}

export default WishListBooks;