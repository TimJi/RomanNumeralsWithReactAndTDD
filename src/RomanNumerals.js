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
        let mappingThousand = ['M']
        let mappingHundred = ['C', 'CD', 'D', 'CM']
        let mappingTen = ['X', 'XL', 'L', 'XC']
        let mapping = ['I', 'IV', 'V', 'IX']

        let arabicArray=arabicNumerals.toString().split('')
        
        if(arabicArray.length ===4){
            return this.toRomanNumerals1to9(arabicArray[0], mappingThousand) + this.toRomanNumerals1to9(arabicArray[1], mappingHundred) + this.toRomanNumerals1to9(arabicArray[2], mappingTen) + this.toRomanNumerals1to9(arabicArray[3], mapping)
        }
        if(arabicArray.length ===3){
            return this.toRomanNumerals1to9(arabicArray[0], mappingHundred) + this.toRomanNumerals1to9(arabicArray[1], mappingTen) + this.toRomanNumerals1to9(arabicArray[2], mapping)
        }
        if(arabicArray.length ===2){
            return this.toRomanNumerals1to9(arabicArray[0], mappingTen) + this.toRomanNumerals1to9(arabicArray[1], mapping)
        }
        return this.toRomanNumerals1to9(arabicNumerals, mapping)
        
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