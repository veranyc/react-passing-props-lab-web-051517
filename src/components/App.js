import React from 'react';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';
import FruitBasket from './FruitBasket'


class App extends React.Component {
  constructor(props) {
    super(props)

  this.state = {
    filters: [],
    fruit: [],
    currentFilter: null
    }
  }

  componentWillMount() {
    this.fetchFilters()
    this.fetchFruitItems()
  }


  fetchFilters = () => {
    fetch('/api/fruit_types')
      .then(response => response.json())
      .then(filters => this.setState({ filters }));
  }

  fetchFruitItems() {
    fetch('/api/fruit')
      .then(response => response.json())
      .then(fruit => this.setState({ fruit }));
  }

  handleFilterChange = event => {
    console.log('new filter: ', event.target.value);
    this.setState({ currentFilter: event.target.value });
  }



  render() {
    return (
    <FruitBasket
      handleFilterChange={this.handleFilterChange}
      filters={this.state.filters}
      fruit={this.state.fruit}
      currentFilter={this.state.currentFilter}
    />
    )
  }
}
export default App;
