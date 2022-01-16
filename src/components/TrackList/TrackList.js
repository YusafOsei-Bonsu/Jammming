import React from 'react';
import Track from "../Track/Track.js";
import "./TrackList.css";

class TrackList extends React.Component {
    render () {
        let { tracks } = this.props;
        return (
            <div className="TrackList">
                {tracks.map((track) => <Track key={track.id} track={track} onAdd={this.props.onAdd} /> )}
            </div>
        );
    }
}

export default TrackList;