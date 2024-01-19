const scrabbleBestWord = require('.')

describe('Scrabble best word', () => {
    test('should return 1', () => {
        expect(scrabbleBestWord(['A'])).toBe(1)
    })
    test('should return 3', () => {
        expect(scrabbleBestWord(['B'])).toBe(3)
    })
    test('should return 10', () => {
        expect(scrabbleBestWord(['Z'])).toBe(10)
    })
    test('should return 1', () => {
        expect(scrabbleBestWord(['GO', 'A', 'HELLO'])).toBe(1)
    })
    test('should return 4', () => {
        expect(scrabbleBestWord(['AB', 'HELLO'])).toBe(4)
    })
})
