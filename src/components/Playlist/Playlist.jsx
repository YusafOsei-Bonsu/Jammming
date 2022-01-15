import React from 'react';
import TrackList from "../TrackList/TrackList.jsx";
import "./Playlist.css";

export class Playlist extends React.Component {
    render () {
        return (
            <div className="Playlist">
                <input defaultValue={"New Playlist"}/>
                <TrackList />
                <button className="Playlist-save">SAVE TO SPOTIFY</button>
            </div>
        );
    }
}

export default Playlist;