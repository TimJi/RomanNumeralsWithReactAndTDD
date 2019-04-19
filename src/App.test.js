import React from 'react';
import { shallow } from 'enzyme';
import RomanNumerals from './RomanNumerals';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

describe('Roman Numerals Testing', () => {
    const wrapper = shallow(<RomanNumerals />)
    const testCaseMapping = []
    testCaseMapping[1] = 'I'
    testCaseMapping[2] = 'II'
    testCaseMapping[3] = 'III'
    testCaseMapping[4] = 'IV'
    testCaseMapping[5] = 'V'
    testCaseMapping[6] = 'VI'
    testCaseMapping[7] = 'VII'
    testCaseMapping[8] = 'VIII'
    testCaseMapping[9] = 'IX'
    testCaseMapping[10] = 'X'
    testCaseMapping[19] = 'XIX'
    testCaseMapping[24] = 'XXIV'
    testCaseMapping[34] = 'XXXIV'
    testCaseMapping[99] = 'XCIX'
    testCaseMapping[369] = 'CCCLXIX'
    testCaseMapping[448] = 'CDXLVIII'
    testCaseMapping[999] = 'CMXCIX'
    testCaseMapping[1998] = 'MCMXCVIII'
    testCaseMapping[2751] = 'MMDCCLI'
    testCaseMapping[3333] = 'MMMCCCXXXIII'
    testCaseMapping[3444] = 'MMMCDXLIV'
    testCaseMapping[3999] = 'MMMCMXCIX'
    

    testCaseMapping.forEach(( exceptRomanNumerals, arabicNumerals ) => {
        it(`Given I input Arabic numerals ${arabicNumerals}, when I call function toRomanNumerals, then I should got "${exceptRomanNumerals}"`, () => {
            expect(wrapper.instance().toRomanNumerals( arabicNumerals )).toBe(exceptRomanNumerals)
        })
    });
})