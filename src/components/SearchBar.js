import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);

    // default state:
    this.state = { 
      search_term: '' 
    };
  }

	onInputChange(search_term) {
    // whenever user types something in the search input, 
    // update the state and call 'videoSearch' function with the search term
	  this.setState({search_term});
    this.props.onSearchTermChange(search_term);
	}
  
  render() {
    return (
      <div className="search-bar">
       <input
         value={this.state.search_term}
         onChange={event => this.onInputChange( event.target.value )} 
         placeholder="Search"
        />
      </div>
    );
  }

}  

export default SearchBar;
