import React from 'react';
import TrackList from "../TrackList/TrackList.js";
import "./Playlist.css";

export class Playlist extends React.Component {
    render () {
        let { playlistTracks, onRemove } = this.props;
        return (
            <div className="Playlist">
                <input defaultValue={"New Playlist"}/>
                <TrackList tracks={playlistTracks} onRemove={onRemove} isRemoval={true} />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;