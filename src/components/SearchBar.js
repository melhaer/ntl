import React from 'react';

class SearchBar extends React.Component {

  state = {
    term: ''
  };

  onFormSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.term);
  }

  render() {
    return (
      <div className="search-bar" >
        <form onSubmit={this.onFormSubmit}>
          <div className="input-wrapper">
            <input
              type="text"
              placeholder="Search"
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;