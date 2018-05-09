import React, { Component } from "react";
import { search, update } from "../BooksAPI";
import BookItem from "../Components/book";
import { Link } from "react-router-dom";
export default class SearchView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: " ",
      search: [],
      terms: [
        "Android",
        "Art",
        "Artificial Intelligence",
        "Astronomy",
        "Austen",
        "Baseball",
        "Basketball",
        "Bhagat",
        "Biography",
        "Brief",
        "Business",
        "Camus",
        "Cervantes",
        "Christie",
        "Classics",
        "Comics",
        "Cook",
        "Cricket",
        "Cycling",
        "Desai",
        "Design",
        "Development",
        "Digital Marketing",
        "Drama",
        "Drawing",
        "Dumas",
        "Education",
        "Everything",
        "Fantasy",
        "Film",
        "Finance",
        "First",
        "Fitness",
        "Football",
        "Future",
        "Games",
        "Gandhi",
        "Homer",
        "Horror",
        "Hugo",
        "Ibsen",
        "Journey",
        "Kafka",
        "King",
        "Lahiri",
        "Larsson",
        "Learn",
        "Literary Fiction",
        "Make",
        "Manage",
        "Marquez",
        "Money",
        "Mystery",
        "Negotiate",
        "Painting",
        "Philosophy",
        "Photography",
        "Poetry",
        "Production",
        "Programming",
        "React",
        "Redux",
        "River",
        "Robotics",
        "Rowling",
        "Satire",
        "Science Fiction",
        "Shakespeare",
        "Singh",
        "Swimming",
        "Tale",
        "Thrun",
        "Time",
        "Tolstoy",
        "Travel",
        "Ultimate",
        "Virtual Reality",
        "Web Development",
        "iOS",
      ],
    };
  }
  updateCollection = (status, book) => {
    update(book, status).then(data => console.log(data));
  };
  updateQuery = queryInput => {
    this.setState({ query: queryInput.trim() });
    if (
      this.state.terms
        .map(term => term.toLowerCase())
        .includes(queryInput.trim().toLowerCase())
    ) {
      search(queryInput.trim())
        .then(data => data.map(data => data.id))
        .then(data => this.setState({ search: data }));
    }
  };
  render() {
  
    
    return (
      <div className="search-books">
        <div className="search-books-bar">
          <Link
            className="close-search"
            to='/'
          >
            Close
          </Link>
          <div className="search-books-input-wrapper">
            <input
              type="text"
              value={this.state.query}
              onChange={event => {
                this.updateQuery(event.target.value);
              }}
              placeholder="Search by title or author"
            />
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {this.state.query !== "" &&
              this.state.search.map(c => (
                <li key={c}>
                  <BookItem onMoveShelf={this.updateCollection} book={c} />
                </li>
              ))}
          </ol>
        </div>
      </div>
    );
  }
}
