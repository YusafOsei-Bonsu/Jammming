import React from 'react';
import TrackList from "../TrackList/TrackList.js";
import "./Playlist.css";

export class Playlist extends React.Component {

    constructor (props) {
        super(props);
    }

    handleNameChange = (e) => {
        this.props.onNameChange(e.target.value);
    }
 
    render () {
        let { playlistTracks, onRemove } = this.props;
        return (
            <div className="Playlist">
                <input defaultValue={"New Playlist"} onChange={this.handleNameChange}/>
                <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;