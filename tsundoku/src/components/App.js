import React from "react";
import SearchBar from "./SearchBar";
import BookList from "./BookList";
import googleBooks from "../apis/googleBooks";
import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/sass/base.scss";

class App extends React.Component {
  state = { bookList: [] };

  onSearchSubmit = async bookSearch => {
    const response = await googleBooks.get("/volumes", {
      params: {
        q: bookSearch
      }
    });

    this.setState({ bookList: response.data.items });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onFormSubmit={this.onSearchSubmit} />
        <BookList books={this.state.bookList} />
      </div>
    );
  }
}

export default App;
