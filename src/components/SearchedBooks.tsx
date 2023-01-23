import React from "react";
import { Component } from "react";
import './css/SearchedBooks.css'
import { BookContext } from "../context/BookContext";

interface SearchedBooksProps  {
    title:string;
    authors:string;
    publisher:string;
    publishDate:string;
    description:string;
    thumbnail:string;
}

class SearchedBooks extends Component<SearchedBooksProps> {
    static contextType = BookContext;
    render() {
        const {addBook}:any = this.context;
        const {title, authors, publisher, publishDate, description, thumbnail}:any = this.props;
        return (
            <div className="BookComp" onClick={addBook} title={title}>
                <div className="splitSearch leftSearch" onClick={addBook} title={title}>
                    <img onClick={addBook} title={title} src={thumbnail}></img>
                </div>
                <div onClick={addBook} title={title} className="splitSearch rightSearch">
                    <p onClick={addBook} title={title}><b>Title: {title ? title : " NA"}</b></p><br></br>
                    <p onClick={addBook} title={title}><b>Authors:</b>{authors ? authors : " NA"}</p><br></br>
                    <p onClick={addBook} title={title}><b>Publisher:</b> {publisher ? publisher : " NA"}</p><br></br>
                    <p onClick={addBook} title={title}><b>Publication Date:</b> {publishDate ? publishDate : " NA"}</p><br></br>
                    <p onClick={addBook} title={title}><b>Description:</b> {description ? description : " NA"}</p><br></br>
                </div>
            </div>
        );
    }
}

export default SearchedBooks;