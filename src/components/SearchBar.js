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
    return(
      <div className = "search-bar" >
        <form onSubmit={this.onFormSubmit}>
          <input 
            type="text" 
            placeholder="Search" 
            value={this.state.term} 
            onChange={ (e) => this.setState({ term: e.target.value }) } 
          />
        </form>
      </div>
    );
  }
}

export default SearchBar;