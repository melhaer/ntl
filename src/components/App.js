import React from 'react';

import axios from 'axios';

import SearchBar from './SearchBar';
import SortBar from './SortBar';
import ItemDetails from './ItemDetails';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      quotes: [],
    }

    this.itemsContentRef = React.createRef();
  }

  componentDidMount() {
     axios.get(`http://localhost:3001/quotes`)
     //axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log(res);
        const quotes = res.data.data;
        this.setState({ quotes });
      })
  }

  onSearchSubmit(term) {
  
  }
  render() {
    const quoteDetails = this.state.quotes.map(({id, content, created_by, age, participant, tags}) => (
        <ItemDetails 
          key={id} 
          name={`${created_by.name} ${created_by.surname}`} 
          age={age} 
          location={participant.nationality} 
          tags={tags} 
          text={content} 
        />
      )
    )

    const itemDetailsHeight = quoteDetails.length / 2 * 300;
  
    return (

      <div className="container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <SortBar />
        <div className="items-container" ref={this.itemsContentRef} style={{height: `${itemDetailsHeight}px`}}>
          {quoteDetails}
        </div>
      </div>
    );
  }
}

export default App;