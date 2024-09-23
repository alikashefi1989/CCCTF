import Country, { Code, codes, countriesCodeList } from './countries-code'

/**
 * This function takes the country name which is stand for and unique, and return the flag emoji.(ccctf stand for 'convert country code to flag')
 * @param country this is stand for of country name
 * @returns flag emoji
 */

const ccctf = (country: Country): string => {
    return country
        .toUpperCase()
        .split('')
        .map(char => String.fromCodePoint(char.charCodeAt(0) + 0x1F1A5))
        .join('');
}

export default ccctf


/**
 * This function takes the country name which is stand for and unique, and return the country code.(gcc stand for 'get country code')
 * @param country this is stand for of country name
 * @returns country code
 */

export const gcc = (country: Country): string => (countriesCodeList[country])


/**
 * This function takes the country code which is like +1,+90,... , and return the countries name, which are codes equal params.(gcnbc stand for 'get countries name by code')
 * @param countryCode this is country code
 * @returns countries name
 */

export const gcnbc = (countryCode: Code): Array<string> => (codes[countryCode])