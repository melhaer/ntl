import React from 'react';

import SearchBar from './SearchBar';
import SortBar from './SortBar';
import ItemDetails from './ItemDetails';

class App extends React.Component {

  render() {

    const data =[
      {
        "name": "Sam",
        "id": "1234",
        "age": 34,
        "location": "Italy",
        "tags": ['one', 'two'],
        "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum eget tortor ullamcorper, egestas mi sed, elementum est. Pellentesque mollis lacus eget erat fermentum tincidunt. Vivamus interdum porttitor tincidunt. Sed ultrices lectus maximus volutpat mattis. Maecenas at turpis auctor, imperdiet quam non, dictum magna"
      },
      {
        "name": "Alex",
        "id": "4567",
        "age": 22,
        "location": "Spain",
        "tags": ['one'],
        "text": "Sed id purus lacus. Aenean nibh eros, dignissim sed fringilla quis, mattis at turpis."
      },
      {
        "name": "James",
        "age": 33,
        "location": "Germany",
        "tags": ['two'],
        "text": "Cras ut consequat erat, nec luctus augue. Curabitur a metus eget metus efficitur malesuada consequat ac sem. Integer laoreet augue nec ornare aliquam"
      },
      {
        "name": "Nick",
        "age": 44,
        "location": "Portugal",
        "tags": ['two'],
        "text": "Etiam vel mi vel tellus blandit rhoncus."
      }
    ];

    const itemDetails = data.map((d) => (
        <ItemDetails 
          key={d.id} 
          name={d.name} 
          age={d.age} 
          location={d.location} 
          tags={d.tags} 
          text={d.text} 
        />
      )
    )
  
    return (
      <div className="container">
        <SearchBar onSubmit={this.onSearchSubmit} />
        <SortBar />
        <div className="items-container">
          {itemDetails}
        </div>
      </div>
    );
  }
}

export default App;