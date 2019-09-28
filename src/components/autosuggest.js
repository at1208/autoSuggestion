import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import theme from './autosuggest.css'

const City = [
  {
    name: 'Mumbai',

  },
  {
    name: 'Delhi',

  },
  {
    name: 'Bangalore',

  },
  {
    name: 'Hyderabad',

  },
  {
    name: 'Ahmedabad',

  },
  {
    name: 'Chennai',

  },
  {
    name: 'Kolkata',

  },
  {
    name: 'Surat',

  },
  {
    name: 'Pune',

  },
  {
    name: 'Jaipur',

  },
  {
    name: 'Lucknow',

  },
  {
    name: 'Kanpur',

  },
  {
    name: 'Nagpur',

  },
  {
    name: 'Indore',

  },

];


const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : City.filter( city =>
    city.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};



const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.

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
    const inputProps = { placeholder: 'type a city name',value, onChange: this.onChange };

    return <div className='text-center'>
    <Autosuggest
        theme = {theme}
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
