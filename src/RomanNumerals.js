import React, { Component } from 'react';

class RomanNumerals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arabicNumerals: 0,
            romanNumerals: ''
        }
    }
    toRomanNumerals1to9=(arabicNumerals, mapping)=>{
        let result = '';
        arabicNumerals = Number(arabicNumerals)
        if(arabicNumerals<=5){
            for( let i=0; i < arabicNumerals; i++){
                result +=mapping[0]
            }
            if(arabicNumerals === 4){
                return mapping[1];
            }
            if(arabicNumerals === 5){
                return mapping[2];
            }
            return result;
        }
        if(arabicNumerals<=10){
            if(arabicNumerals === 9){
                return mapping[3];
            }
            result = mapping[2]
            arabicNumerals -= 5
            for( let i=0; i < arabicNumerals; i++){
                result += mapping[0];
            }
            return result;
        }
    }
    toRomanNumerals = arabicNumerals => {
        let romanLevelMapping = [];
        romanLevelMapping[1] = ['I', 'IV', 'V', 'IX']
        romanLevelMapping[2] = ['X', 'XL', 'L', 'XC']
        romanLevelMapping[3] = ['C', 'CD', 'D', 'CM']
        romanLevelMapping[4] = ['M']

        let arabicArray=arabicNumerals.toString().split('')
        let result = ''
        while(arabicArray.length >= 1){
            let mapping = romanLevelMapping[arabicArray.length]
            result += this.toRomanNumerals1to9(arabicArray.shift(), mapping);
        }
        return result
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