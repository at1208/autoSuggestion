import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import Theme from './autosuggest.css'

const languages = [
  {
    name: 'anmol',
  },
  {
    name: 'aman',
  },
  {
    name: 'nagar',
  },
  {
    name: 'kawal',
  },
  {
    name: 'dicky',
  },
  {
    name: 'sachin',
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
  <div className='container a2'>
    <div className='a3'>{suggestion.name}</div>
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

    return <div className='text-center a1 container-fluid'>

    <Autosuggest
        theme={Theme}
        className='a1'
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
