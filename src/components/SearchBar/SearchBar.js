import React from "react";
import "./SearchBar.css";

class SearchBar extends React.Component {

    constructor (props) {
        super(props);
        this.state = { searchTerm: "" };
    }

    search = () => {
        this.props.onSearch(this.state.searchTerm);
    }

    handleTermChange = (e) => {
        this.setState({ searchTerm: e.target.value });
    }
    
    render () {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleTermChange} />
                <button className="SearchButton">SEARCH</button>
            </div>
        );
    }

}

export default SearchBar;