import React from 'react';
import { shallow } from 'enzyme';
import RomanNumerals from './RomanNumerals';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Roman Numerals Testing', () => {
    const wrapper = shallow(<RomanNumerals />)
    it('Given I input Arabic numerals 1, when I call function toRomanNumerals, then I should got "I"', () => {
        expect(wrapper.instance().toRomanNumerals( 1 )).toBe('I')
    })
    it('Given I input Arabic numerals 2, when I call function toRomanNumerals, then I should got "II"', () => {
        expect(wrapper.instance().toRomanNumerals( 2 )).toBe('II')
    })
    it('Given I input Arabic numerals 3, when I call function toRomanNumerals, then I should got "III"', () => {
        expect(wrapper.instance().toRomanNumerals( 3 )).toBe('III')
    })
    it('Given I input Arabic numerals 4, when I call function toRomanNumerals, then I should got "III"', () => {
        expect(wrapper.instance().toRomanNumerals( 4 )).toBe('IV')
    })
    it('Given I input Arabic numerals 5, when I call function toRomanNumerals, then I should got "III"', () => {
        expect(wrapper.instance().toRomanNumerals( 5 )).toBe('V')
    })
    it('Given I input Arabic numerals 6, when I call function toRomanNumerals, then I should got "III"', () => {
        expect(wrapper.instance().toRomanNumerals( 6 )).toBe('VI')
    })
    it('Given I input Arabic numerals 7, when I call function toRomanNumerals, then I should got "III"', () => {
        expect(wrapper.instance().toRomanNumerals( 7 )).toBe('VII')
    })
    it('Given I input Arabic numerals 8, when I call function toRomanNumerals, then I should got "III"', () => {
        expect(wrapper.instance().toRomanNumerals( 8 )).toBe('VIII')
    })
    it('Given I input Arabic numerals 9, when I call function toRomanNumerals, then I should got "III"', () => {
        expect(wrapper.instance().toRomanNumerals( 9 )).toBe('IX')
    })
    it('Given I input Arabic numerals 9, when I call function toRomanNumerals, then I should got "III"', () => {
        expect(wrapper.instance().toRomanNumerals( 12 )).toBe('XII')
    })
    it('Given I input Arabic numerals 9, when I call function toRomanNumerals, then I should got "III"', () => {
        expect(wrapper.instance().toRomanNumerals( 12 )).toBe('XII')
    })
    it('Given I input Arabic numerals 19, when I call function toRomanNumerals, then I should got "III"', () => {
        expect(wrapper.instance().toRomanNumerals( 19 )).toBe('XIX')
    })
    it('Given I input Arabic numerals 19, when I call function toRomanNumerals, then I should got "III"', () => {
        expect(wrapper.instance().toRomanNumerals( 34 )).toBe('XXXIV')
    })
    it('Given I input Arabic numerals 99, when I call function toRomanNumerals, then I should got "III"', () => {
        expect(wrapper.instance().toRomanNumerals( 99 )).toBe('XCIX')
    })
})