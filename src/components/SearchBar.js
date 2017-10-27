import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { search_term: '' };
  }

	onInputChange(search_term) {
	  this.setState({search_term});
    this.props.onSearchTermChange(search_term);
	}
  
  render() {
    return (
      <div className="search-bar">
       <input
         value={ this.state.search_term }
         onChange={ event => this.onInputChange( event.target.value ) } 
         placeholder="Search"
        />
      </div>
    );
  }

}  

export default SearchBar;
