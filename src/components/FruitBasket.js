import React from 'react';
import Filter from './Filter';
import FilteredFruitList from './FilteredFruitList.js';


// class FruitBasket extends Component {
//   constructor() {
//     super();
//   }

const FruitBasket = ({handleFilterChange, currentFilter, filtersList, fruit}) => {
  return (
    <div className="fruit-basket">
      <Filter handleChange={handleFilterChange} filters={filtersList}/>
      <FilteredFruitList
        filter={currentFilter}
        fruit={fruit}/>
    </div>
    )
  }

FruitBasket.defaultProps = {
  fruit: [],
  filters: [],
  currentFilter: "",
  updateFilterCallback: null
}
export default FruitBasket;
