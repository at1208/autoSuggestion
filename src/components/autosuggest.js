import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import './autosuggest.css'

const City = [
  {
    name: 'Ajwain Butter Salt Cookies',

  },
  {
    name: 'Besan Khatai',

  },
  {
    name: 'Biscotti',

  },
  {
    name: 'Coconut Khatai',

  },
  {
    name: 'Honey Oats Cookies',

  },
  {
    name: 'Milk Ajwain Cookies',

  },
  {
    name: 'Milk Badam Cookies',

  },
  {
    name: 'Milk Coconut Cookies',

  },
  {
    name: 'Milk Pista Flake Cookies',

  },
  {
    name: 'Pista Milk Cookies',

  },
  {
    name: 'Nankhatai',

  },
  {
    name: 'Choco Crunchy Cookies',

  },
  {
    name: 'Butter Jeera Cookies',

  },
  {
    name: 'French Hearts',

  },
  {
    name: 'Chocolate Kaju Cookies',

  },
  {
    name: 'Kaju Pista Cookies',

  },
  {
    name: 'Choco Chips Cookies ',

  },
  {
    name: 'White Forest Cake',

  },
  {
    name: 'Black Forest Cake',

  },
  {
    name: 'Blueberry Cake',

  },
  {
    name: 'Choco Chip Cake',

  },
  {
    name: 'Fresh Fruit Cake',

  },
  {
    name: 'Pineapple Cake',

  },
  {
    name: 'Choco Truffle Cake',

  },
  {
    name: 'Choco Delight Cake',

  },
  {
    name: 'Muffins',

  },
  {
    name: 'Chocolate Lolipop',

  },
  {
    name: 'Red Velvet Pastry',

  },
  {
    name: 'Truffle Nuts Pudding',

  },
  {
    name: 'Walnut Pie',

  },
  {
    name: 'Pineapple Pastry',

  },
  {
    name: 'Black Forest Pastry',

  },
  {
    name: 'Choco Truffle Pastry',

  },
  {
    name: 'Muddy Chocolate Roll',

  },
  {
    name: 'Butter Scotch Pastry',

  },
  {
    name: 'Melting Brownie',

  },
  {
    name: 'Blueberry Pastry',

  },
  {
    name: 'Brownie Lava',

  },
  {
    name: 'Blueberry Pie',

  },
  {
    name: 'Milk Bread',

  },
  {
    name: 'Garlic Bread',

  },
  {
    name: 'Pao Bun',

  },
  {
    name: 'Kulcha Bun',

  },
  {
    name: 'Cake Rusk',

  },
  {
    name: 'Veg Sandwich',

  },
  {
    name: 'Paneer Stuff Kulcha ',

  },
  {
    name: 'Doughnuts',

  },
  {
    name: 'Cheese Burger',

  },
  {
    name: 'Ajwain Puff ',

  },
  {
      name: 'Methi Twister',

    },
    {
      name: 'Mix Veg Roll ',

    },
    {
      name: 'Paneer Stuff Hotdog',

    },
    {
      name: 'Paneer Tikka Roll ',

    },
    {
      name: 'Pizza Bite ',

    }
];


const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : City.filter( food =>
    food.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};



const getSuggestionValue = suggestion => suggestion.name;



    const renderSuggestion = suggestion => (

    <div className='a1'>{suggestion.name}</div>
    );



class AutoSuggestion extends Component {

    state = {
    value: '',
    suggestions: []
    };

    onChange = (event, { newValue }) => {
    this.setState({
    value: newValue
    });
    };


    onSuggestionsFetchRequested = ({ value }) => {
    this.setState({
    suggestions: getSuggestions(value)
    });
    };

    onSuggestionsClearRequested = () => {
    this.setState({
    suggestions: []
    });
    };



  render(){
    const value = this.state.value
    const inputProps = { placeholder: '',value, onChange: this.onChange };

    return <div className=''>


    <Autosuggest

        suggestions = {this.state.suggestions}
        onSuggestionsFetchRequested = {this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested = {this.onSuggestionsClearRequested}
        getSuggestionValue = {getSuggestionValue}
        renderSuggestion = {renderSuggestion}
        inputProps = {inputProps}  />


 
          </div>
  }

}
export default AutoSuggestion;
