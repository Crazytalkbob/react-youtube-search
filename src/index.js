import React from 'react';
import ReactDOM from 'react-dom';

import API_KEY from './key';
import SearchBar from './components/search_bar';

// Create the component
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Add component to the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
