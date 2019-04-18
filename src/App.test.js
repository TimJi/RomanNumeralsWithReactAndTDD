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
})