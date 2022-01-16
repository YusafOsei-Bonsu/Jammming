import React from 'react';
import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Playlist from "../Playlist/Playlist.js";
import './App.css';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      playlistName: "My Playlist",
      playlistTracks: [
        { id: 4, name: "Candy Shop", artist: "50 Cent", album: "Get rich or die tryin'" },
        { id: 5, name: "Without me", artist: "Eminem", album: "White boy" },
        { id: 6, name: "Gold digger", artist: "Kanye West", album: "West" }
      ],
      searchResults: [
        { id: 1, name: "Wanna be startin' somethin", artist: "Michael Jackson", album: "Thriller" },
        { id: 2, name: "My Prerogative", artist: "Bobby Brown", album: "Don't be cruel" },
        { id: 3, name: "Oops! I did it again!", artist: "Britney Spears", album: "Stronger" }
      ]
    };
  }

  // Adds a new song/track to the playlist
  addTrack = (newTrack) => {
    let isExisting = this.state.playlistTracks.find((savedTrack) => savedTrack.id === newTrack.id);
    if (!(isExisting)) {
      this.setState({ playlistTracks: [...this.state.playlistTracks, newTrack] });
    } else {
      return;
    }
  }

  // Remove a song/track from a playlist based on its ID
  removeTrack = (existingTrack) => {
    this.setState({
      playlistTracks: this.state.playlistTracks.filter((track) => track.id !== existingTrack.id)
    });
  }

  // Update the playlist name
  updatePlaylistName = (newName) => {
    this.setState({ playlistName: newName });
  }
  
  render () {
    let { playlistName, playlistTracks, searchResults } = this.state;
    return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar />
            <div className="App-playlist">
              <SearchResults 
                onAdd={this.addTrack} 
                searchResults={searchResults} />
              <Playlist 
                playlistName={playlistName} 
                playlistTracks={playlistTracks}
                onNameChange={this.updatePlaylistName} 
                onRemove={this.removeTrack} />
            </div>
          </div>
        </div>
    );
  }
  
}

export default App;