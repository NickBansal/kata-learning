const romanNumerals = require('.')

describe('Arithmetic', () => {
    test('Should return 1', () => {
        expect(romanNumerals('I')).toBe(1)
    })
    test('should return 5', () => {
        expect(romanNumerals('V')).toBe(5)
    })
    test('should return 10', () => {
        expect(romanNumerals('X')).toBe(10)
    })
    test('should return 50', () => {
        expect(romanNumerals('L')).toBe(50)
    })
    test('should return 100', () => {
        expect(romanNumerals('C')).toBe(100)
    })
    test('should return 500', () => {
        expect(romanNumerals('D')).toBe(500)
    })
    test('should return 1000', () => {
        expect(romanNumerals('M')).toBe(1000)
    })
    test('should return 2', () => {
        expect(romanNumerals('II')).toBe(2)
    })
    test('should return 3', () => {
        expect(romanNumerals('III')).toBe(3)
    })
    test.only('should return 4', () => {
        expect(romanNumerals('MMMDXCIX')).toBe(3599)
    })
})
