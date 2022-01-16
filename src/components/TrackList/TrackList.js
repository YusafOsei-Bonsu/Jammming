import React from 'react';
import Track from "../Track/Track.js";
import "./TrackList.css";

class TrackList extends React.Component {
    render () {
        let { tracks, onAdd, onRemove, isRemoval } = this.props;
        return (
            <div className="TrackList">
                {tracks.map((track) => <Track 
                    key={track.id} 
                    track={track} 
                    onAdd={onAdd} 
                    onRemove={onRemove}
                    isRemoval={isRemoval} /> )}
            </div>
        );
    }
}

export default TrackList;