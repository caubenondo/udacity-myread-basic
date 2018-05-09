import React, { Component } from "react";
import BookShelf from "../Components/bookshelf";
import { getAll, update } from "../BooksAPI";
import { Link } from "react-router-dom";
export default class BookList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentlyReading: [],
      wantToRead: [],
      read: []
    };
  }

  componentDidMount = () => {
    getAll().then(res => {
      this.setState({
        currentlyReading: res.filter(book => book.shelf === "currentlyReading").map(book=>book.id),
        wantToRead: res.filter(book => book.shelf === "wantToRead").map(book=>book.id),
        read: res.filter(book => book.shelf === "read").map(book=>book.id)
      });
      
    });
  };
  updateBook = (status, book) => {
    update(book, status).then(data =>{
     
     this.setState({
       currentlyReading: data.currentlyReading,
       wantToRead: data.wantToRead,
       read: data.read
     })

      }
    )
  };
  render() {
    const { currentlyReading, wantToRead, read } = this.state;
    return (
      <div className="list-books">
        <div className="list-books-title">
          <h1> MyReads </h1>
        </div>
        <div className="list-books-content">
          <div>
            <BookShelf
              shelf={currentlyReading}
              shelfTitle="Currently Reading"
              onChange={this.updateBook}
            />
            <BookShelf
              shelf={wantToRead}
              shelfTitle="Want to Read"
              onChange={this.updateBook}
            />
            <BookShelf
              shelf={read}
              shelfTitle="Read"
              onChange={this.updateBook}
            />
          </div>
        </div>
        <div className="open-search">
          <Link to='/search'>
            Add a book
          </Link>
        </div>
      </div>
    );
  }
}
