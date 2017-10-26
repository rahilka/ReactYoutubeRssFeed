import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = { search_term: '' };
  }

	onInputChange(search_term) {
	  this.setState({search_term});
	}
  
  render() {
    return (
      <div>
       <input
         value = { this.state.search_term }
         onChange = { event => this.onInputChange( event.target.value ) } />
      </div>
    );
  }

}  

export default SearchBar;
