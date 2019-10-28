import React from "react";

class SearchBar extends React.Component {
  state = { bookSearch: "" };

  onInputChange = event => {
    this.setState({ bookSearch: event.target.value });
  };

  onFormSubmit = event => {
    event.preventDefault();

    // to update the value of search item in the parent component
    this.props.onFormSubmit(this.state.bookSearch);
  };

  render() {
    return (
      <div className="SearcBar">
        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <a href="/#" className="navbar-brand">
              Navbar
            </a>
            <form className="form-inline" onSubmit={this.onFormSubmit}>
              <input
                className="form-control mr-sm-2"
                placeholder="Search"
                aria-label="Search"
                onChange={this.onInputChange}
                value={this.state.bookSearch}
              />
              <button
                className="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </div>
    );
  }
}

export default SearchBar;
