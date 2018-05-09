import React, { Component } from "react";
import { get } from "../BooksAPI";
export default class BookItem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      book: [],
      authors: []
    };
  }
  componentWillMount = () => {
    get(this.props.book).then(data => {
      this.setState({
        book: data,
        title: data.title,
        thumbnail: data.imageLinks.smallThumbnail,
        authors: data.authors,
        value: data.shelf
      });
    //   console.log(data);
    });
  };

  updateStatus = event => {
    this.props.onMoveShelf(event.target.value, this.state.book);
  };
  render() {
    const { book } = this.state;
    let authors = this.state.authors.join(', ')
    return (
      <div className="book">
        <div className="book-top">
          <div
            className="book-cover"
            style={{
              width: 128,
              height: 193,
              backgroundImage: `url("${this.state.thumbnail}")`
            }}
          />
          <div className="book-shelf-changer">
            <select onChange={this.updateStatus} value={this.state.value}>
              {/* <option value="none" disabled>
                Move to...
              </option> */}
              <option value="currentlyReading" defaultValue>Currently Reading</option>
              <option value="wantToRead"> Want to Read </option>
              <option value="read"> Read </option>             
              {<option value="none"> None </option>}
            </select>
          </div>
        </div>

        <div className="book-title">{this.state.title} </div>
        <div className="book-authors">
          { authors }
        </div>
        {/* <div>Shelf: {book.shelf}</div> */}
      </div>
    );
  }
}
