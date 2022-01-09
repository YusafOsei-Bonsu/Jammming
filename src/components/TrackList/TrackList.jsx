import React from 'react';
import { Track } from "../Track/Track.jsx";
import "./TrackList.css";

export class TrackList extends React.Component {

    render () {
        let tracks = this.props.tracks.map((track) => {
            return <Track key={track.id} name={track.name} artist={track.artist} album={track.album} />;
        });

        return (
            <div className="TrackList">
                {/* You will add a map method that renders a set of Track components */}
                {tracks}
            </div>
        );
    }

}