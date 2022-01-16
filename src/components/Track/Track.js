import React from "react";
import "./Track.css";

class Track extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            isRemoval: false
        }
    }

    addTrack = () => {
        this.props.onAdd(this.props.track);
    }

    renderAction () {
        return this.state.isRemoval ? <button className="Track-action">-</button> : <button className="Track-action" onClick={this.addTrack}>+</button>;
    }

    render () {
        let { name, artist, album } = this.props.track;
        return (
            <div className="Track">
                    <div className="Track-information">
                        <h3>{name}</h3>
                        <p>{artist} | {album}</p>
                    </div>
                    {this.renderAction()}
            </div>
        );
    }
}

export default Track;