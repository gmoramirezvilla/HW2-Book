import React, {Component, createContext} from 'react';
import { startAPI } from '../startAPI';

export const BookContext = createContext<any>(null);

type propsBook = {
    children: JSX.Element
}

class BookContextProvider extends Component<propsBook>{
    state = {
        searhReturn: startAPI,
        wishList: ["The Hobbit", "A Tale of Two Cities", "And Then There Were None"],
    }

    addBook = (e:any) => {
        console.log("addBook");
        const newBook = e.target.title
        if(this.state.wishList.indexOf(newBook) === -1){
            console.log("Book added");
            this.setState({wishList:this.state.wishList.concat(newBook)});
        }
        else{
            console.log("Book already existed");
        }
    }

    removeBook = (e:any) => {
        console.log("removeBook");
        const newBook = e.target.id
        this.setState({wishList: this.state.wishList.filter(title => title !== e.target.id)})
    }

    updateAPI = (bookname:string) => {
        if(bookname.length <= 3){
            console.log("Input too short");
            return;
        }
        const url = `https://www.googleapis.com/books/v1/volumes?q=${bookname.trim()}&startIndex=0&maxResults=20`
        fetch(url).then(res => res.json()).then(data => this.setState({searhReturn:data}));
    }

    render(): JSX.Element {
        console.log(this.state);
        return (
            <BookContext.Provider value={{
                ...this.state, 
                addBook: this.addBook, 
                removeBook: this.removeBook, 
                updateAPI:this.updateAPI}}>
                {this.props.children}
            </BookContext.Provider>
        )
    }
}

export default BookContextProvider;