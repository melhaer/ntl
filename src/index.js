import React from 'react';
import ReactDOM from 'react-dom';

import './assets/styles/style.scss';

import App from './components/App';
//import ItemDetails from './components/ItemDetails';
//import SearchBar from './components/SearchBar';

/*class App extends React.Component {
  render() {
    return (
      <div className="container">
        <SearchBar />
          <div className="items-container">
            <ItemDetails author="Sam" age="34" location="Italy" tags="tag" text="Some text here" />
            <ItemDetails author="Alex" age="22" location="Spain" tags="tag one, tag two" text="Some text here" />
            <ItemDetails author="James" age="33" location="Germany" tags="tag one, tag two, tag three" text="Some text here" />
            <ItemDetails author="Nick" age="44" location="Portugal" tags="tag two" text="Some text here" />
          </div>
      </div>
    );
  }
}*/



ReactDOM.render(
  <App />,
  document.querySelector('#root')
);