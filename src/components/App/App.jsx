import React from 'react';
import SearchBar from "../SearchBar/SearchBar.jsx";
import SearchResults from "../SearchResults/SearchResults.jsx";
import Playlist from "../Playlist/Playlist.jsx";
import './App.css';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      searchResults: [
        { id: 1, name: "Wanna be startin' somethin", artist: "Michael Jackson", album: "Thriller" },
        { id: 2, name: "My Prerogative", artist: "Bobby Brown", album: "Don't be cruel" },
        { id: 3, name: "Oops! I did it again!", artist: "Britney Spears", album: "Stronger" }
      ]
    }
  }
  
  render () {
    return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
              <SearchResults searchResults={this.state.searchResults} />
              <Playlist />
            </div>
          </div>
        </div>
    );
  }
}

export default App;