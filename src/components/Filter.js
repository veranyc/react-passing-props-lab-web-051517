import React, { Component } from 'react';

// class Filter extends Component {
//   constructor(props) {
//     super(props);
//
//
//   }

const Filter = ({handleChange, filters}) => {

  return (
      <select onChange={handleChange} defaultValue='all'>
        <option value='all'>All</option>
        {filters.map(filter =>
          <option key={filter} value={filter}>{filter}</option>
        )}
      </select>
      )
    }

  Filter.defaultProps = {
    filters: [],
    handleChange: null
  }


export default Filter;
