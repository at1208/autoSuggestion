import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';

const languages = [
  {
    name: 'anmol',
    year: 1972
  },
  {
    name: 'aman',
    year: 2012
  },
  {
    name: 'nagar',
    year: 1972
  },
  {
    name: 'kawal',
    year: 1972
  },
  {
    name: 'dicky',
    year: 1972
  },
  {
    name: 'sachin',
    year: 1972
  },
];
const getSuggestions = value => {
  const inputValue = value.trim().toLowerCase();
  const inputLength = inputValue.length;

  return inputLength === 0 ? [] : languages.filter(lang =>
    lang.name.toLowerCase().slice(0, inputLength) === inputValue
  );
};

const getSuggestionValue = suggestion => suggestion.name;

// Use your imagination to render suggestions.
const renderSuggestion = suggestion => (
  <div>
    {suggestion.name}
  </div>
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

    const { value, suggestions } = this.state;

    // Autosuggest will pass through all these props to the input.
    const inputProps = {
      placeholder: 'Type a programming language',
      value,
      onChange: this.onChange
    };

    return <div>
    <Autosuggest
    className='text-center'
        suggestions={suggestions}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        getSuggestionValue={getSuggestionValue}
        renderSuggestion={renderSuggestion}
        inputProps={inputProps}
      />
          </div>
  }

}
export default AutoSuggestion;
