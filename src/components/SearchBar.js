import React from 'react';

class SearchBar extends React.Component {

  state = {
    term: ''
  };

  onFilterChange = () => {
    this.props.onSubmit(this.state.term);
  }

  render() {
    return(
      <div className = "search-bar" >
        <form>
          <div className="input-wrapper">
          <input 
            type="text" 
            placeholder="Search" 
            value={this.state.term} 
            onChange={ e => {this.setState({ term: e.target.value }); this.onFilterChange()} } 
          />
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;