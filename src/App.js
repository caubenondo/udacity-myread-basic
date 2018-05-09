import React from "react";
import "./App.css";
import BookList from "./Pages/booklistpage";
import SearchView from "./Pages/searchview";
import { Link, Route } from "react-router-dom";
class BooksApp extends React.Component {
  state = {};

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => <BookList />} />
        <Route path="/search" render={() => <SearchView />} />
      </div>
    );
  }
}

export default BooksApp;
