import React from 'react';
import logo from './logo.svg';

import MapDisplay from './Components/MapDisplay';
import SearchBar from './Components/Searchbar';

function App() {
  return (
    <div className="App">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500&display=swap" />
      <SearchBar />
      <MapDisplay />
    </div>
  );
}

export default App;
