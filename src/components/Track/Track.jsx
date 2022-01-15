import React from "react";
import "./Track.css";

class Track extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            isRemoval: false
        }
    }

    renderAction () {
        return this.state.isRemoval ? "-" : "+";
    }

    render () {
        const { name, artist } = this.props;
        return (
            <div className="Track">
                    <div className="Track-information">
                        <h3>{name}</h3>
                        <p>{artist}</p>
                    </div>
                    <button className="Track-action">
                        {/* <!-- + or - will go here --> */}
                        {this.renderAction()}
                    </button>
            </div>
        );
    }
}

export default Track;