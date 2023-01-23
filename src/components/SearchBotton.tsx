import React from "react";
import { Component } from "react";
import { BookContext } from "../context/BookContext";
import "./css/SearchBotton.css"

class SearchBotton extends Component {
    static contextType = BookContext;
    render() {
        console.log("render SearchBotton");
        const {updateAPI}:any = this.context;
        return (
            <div>
                <input type="text" className="searchInput" id="searchInput"></input>
                <button onClick={updateAPI((document.getElementById("searchInput") as HTMLInputElement).value)} className="searchBotton">Submit</button>
            </div>
        )
    }
}

export default SearchBotton;