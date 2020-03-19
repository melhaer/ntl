import React from 'react';

import axios from 'axios';

import SearchBar from './SearchBar';
import SortBar from './SortBar';
import ItemDetails from './ItemDetails';

class App extends React.Component {
  state = {
    quotes: [],
  }
  componentDidMount() {
    this.getQuotes();
  }
  getQuotes() {
    axios.get(`http://localhost:3001/quotes`)
      .then(res => {
        const quotes = res.data;
        this.setState({ quotes });
      }, err => {
        alert(`Something went wrong, please try again!`);
      }
      )
  }
  removeItem = id => {
    axios.delete(`http://localhost:3001/quotes/${id}`)
      .then(
        res => {
          alert(`The quote will be deleted permanently!`);
          this.getQuotes();
        }, err => {
          alert(`Something went wrong, please try again!`);
        }
      )
  }
  onSearchSubmit(term) {

  }
  render() {
    const quoteDetails = this.state.quotes.map(({ id, content, created_by, age, participant, tags }) => (
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
    )

    const itemDetailsHeight = quoteDetails.length / 2 * 250;

    return (

      <div className="container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <SortBar />
        <div className="items-container" ref={this.itemsContentRef} style={{ height: `${itemDetailsHeight}px` }}>
          {quoteDetails}
        </div>
      </div>
    );
  }
}

export default App;