import React from 'react';

class SortBar extends React.Component {

  state = {
    sortedBy: 'name',
    asc: true,
  }

  toggleSorting = (name) => {
    const currentSorting = this.state.asc;
    //const currentName = this.state.sortedBy === 'name' ? 'nationality' : 'name';
    this.setState({sortedBy: name, asc: !currentSorting})
  }
  render() {
    return(
      <div className="sort-bar">
        Sort by:
        <span 
          title={this.state.asc ? 'Sort ASC' : 'Sort DESC'}  
          className={`sort-filter ${this.state.asc && this.state.sortedBy === 'nationality' ? 'sort-asc' : 'sort-desc'}`} 
          onClick={() => this.toggleSorting('nationality')}>
            Participant nationality
        </span>
        <span 
          title={this.state.asc ? 'Sort ASC' : 'Sort DESC'}  
          className={`sort-filter ${this.state.asc && this.state.sortedBy === 'name' ? 'sort-asc' : 'sort-desc'}`} 
          onClick={() => this.toggleSorting('name')}>
            Participant name
        </span>
      </div>
    );
  }
}

export default SortBar;