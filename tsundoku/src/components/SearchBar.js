import React from "react";

class SearchBar extends React.Component {
  render() {
    return (
      <div className="SearcBar">
        <nav className="navbar navbar-light bg-light">
          <div className="container">
            <a href="/#" className="navbar-brand">
              Navbar
            </a>
            <form className="form-inline">
              <input
                className="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
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
