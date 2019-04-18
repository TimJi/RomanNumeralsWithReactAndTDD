import React, { Component } from 'react';

class RomanNumerals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arabicNumerals: 0,
            romanNumerals: ''
        }
    }
    toRomanNumerals = arabicNumerals => {
        return '^_^'
    }
    onClickToRomanNumerals = () => {
        const { arabicNumerals } = this.state
        this.setState({romanNumerals: this.toRomanNumerals(arabicNumerals)})
    }
    handleChange = event => {
        this.setState({arabicNumerals: event.target.value})
    }
render() {
    const { romanNumerals } = this.state
        return (
            <div>
                <h1>Arabic Numerals: 
                    <input type='text' onChange={this.handleChange.bind(this)}/>
                </h1>
                <button onClick={this.onClickToRomanNumerals}>to Roman Numerals</button>
                <h1>Roman Numerals: </h1>
                <h1>{ romanNumerals }</h1>
            </div>
        );
    }
}
export default RomanNumerals;