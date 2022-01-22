import React from 'react';
import SearchBar from "../SearchBar/SearchBar.js";
import SearchResults from "../SearchResults/SearchResults.js";
import Playlist from "../Playlist/Playlist.js";
import Spotify from '../../util/Spotify.js';
import './App.css';

class App extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      playlistName: "My Playlist",
      playlistTracks: [],
      searchResults: []
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

  savePlaylist = () => {
    const { playlistName, playlistTracks } = this.state;
    const trackURIs = playlistTracks.map((track) => track.id);
    Spotify.savePlaylist(playlistName, trackURIs);
    // Reset playlist name & tracks after saving playlist
    this.updatePlaylistName("New Playlist");
    this.setState({ playlistTracks: [] });
  }

  // Retrieve tracks from Spotify API
  search = (searchTerm) => {
    let tracks = Spotify.search(searchTerm);
    this.setState({ 
      searchResults: tracks 
    });
  }
  
  render () {
    let { playlistName, playlistTracks, searchResults } = this.state;
    return (
        <div>
          <h1>Ja<span className="highlight">mmm</span>ing</h1>
          <div className="App">
            <SearchBar onSearch={this.search} />
            <div className="App-playlist">
              <SearchResults 
                onAdd={this.addTrack} 
                searchResults={searchResults} />
              <Playlist
                onSave={this.savePlaylist} 
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