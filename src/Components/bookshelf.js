import React, { Component } from "react";
import BookItem from "./book";

class BookShelf extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  

  componentWillMount = () => {
    
  }
  update = (status,book)=>{
    this.props.onChange(status,book)
  }
 
  render(){
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.props.shelfTitle}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {this.props.shelf.map(c => <li key={c}><BookItem onMoveShelf={this.update} book={c}/></li>)}
          </ol>
        </div>
      </div>
    );
  }
}
export default BookShelf;
