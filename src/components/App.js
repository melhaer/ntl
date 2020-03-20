import React from 'react';

import axios from 'axios';

import SearchBar from './SearchBar';
import SortBar from './SortBar';
import ItemDetails from './ItemDetails';

class App extends React.Component {
  state = {
    quotes: [],
    filteredQuotes: [],
    asc: true,
    sortedBy: 'nationality',
  }
  componentDidMount() {
    this.getQuotes();
  }
  getQuotes() {
    axios
      .get(`http://localhost:3001/quotes`)
      .then(
        res => {
          const quotes = res.data;
          this.setState({ quotes });
        }, err => {
          alert(`Something went wrong, please try again!`);
        }
      )
  }
  removeItem = id => {
    axios
      .delete(`http://localhost:3001/quotes/${id}`)
      .then(
        res => {
          alert(`The quote will be deleted permanently!`);
          this.getQuotes();
        }, err => {
          alert(`Something went wrong, please try again!`);
        }
      )
  }
  onSearchSubmit = term => {
    this.setState({ filteredQuotes: term.trim() });
  }

  sortHandler = () => {
    this.setState( {asc: !this.state.asc} );
  }

  sortCountries = (a, b) => {
    return (a.participant[this.state.sortedBy] > b.participant[this.state.sortedBy]) && this.state.asc ? 1 : -1;
  }

  getSortFilterResult() {
    let filteredResults = this.state.quotes;

    if (this.state.filteredQuotes) {
      filteredResults = this.state.quotes.filter(quote => quote.content.includes(this.state.filteredQuotes));
    }

    filteredResults.sort(this.sortCountries);

    return filteredResults;
  }
  
  render() {
    const filterResults = this.getSortFilterResult();

    const quoteDetails = filterResults.map(
      ({ id, content, created_by, age, participant, tags }) => (
        <ItemDetails
          id={id}
          key={id}
          name={`${created_by.name} ${created_by.surname}`}
          age={age}
          location={participant.nationality}
          tags={tags}
          text={content}
          closeHandler={this.removeItem}
        />
      )
    );

    const itemDetailsHeight = ((quoteDetails.length / 2) & 1) ? (quoteDetails.length / 2 * 270) + 200 : quoteDetails.length / 2 * 270;
    
    return (
      <div className="container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <SortBar sortResults={this.sortHandler} />
        <div className="items-container" style={{ height: `${itemDetailsHeight}px` }}>
          {quoteDetails}
        </div>
      </div>
    );
  }
}

export default App;