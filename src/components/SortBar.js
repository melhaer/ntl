import React from 'react';

class SortBar extends React.Component {

  state = {
    sortedBy: 'nationality',
    asc: true,
  }
  toggleSorting = sortBy => {
    const currentSorting = this.state.asc;
    this.setState({sortedBy: sortBy, asc: !currentSorting});
    this.props.sortResults(this.props.sortBy);
  }
 
  render() {
    return(
      <div className="sort-bar">
        <label>Sort by:</label>
        <span 
          title={this.state.asc ? 'Sort ASC' : 'Sort DESC'}  
          className={`sort-filter ${this.state.asc && this.state.sortedBy === 'nationality' ? 'sort-asc' : 'sort-desc'}`} 
          onClick={() => this.toggleSorting('nationality')}>
            Participant nationality
        </span>
      </div>
    );
  }
}

export default SortBar;