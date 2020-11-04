import React, { Component } from 'react';


class Search extends Component {
  render() {
    return (
      <div>
        <h2> Crappy Airplane Search </h2>
        <SearchForm />
        <SearchDisplay />
      </div>
    );
  }
}

class SearchForm extends Component {
  render() {
    return (
      <h1>Form on the way</h1>
    );
  }
}

const SearchDisplay = (props) => {
  return (
    <h1>List of flights coming soon </h1>
  );
}


export default Search;
