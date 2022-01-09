import React from "react";
import { TrackList } from "../TrackList/TrackList.jsx";
import "./SearchResults.css"

export class SearchResults extends React.Component {

    render () {
        const { searchResults } = this.props;
        return (
            <div className="SearchResults">
                <h2>Results</h2>
                <TrackList tracks={searchResults} />
            </div>
        )
    }

}