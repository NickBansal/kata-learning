const arithmetic = require('.')

describe('Arithmetic', () => {
    test('Should return 3', () => {
        expect(arithmetic(1, 2, 'add')).toBe(3)
    })
    test('should return 5', () => {
        expect(arithmetic(10, 5, 'subtract')).toBe(5)
    })
    test('should return 10', () => {
        expect(arithmetic(2, 5, 'multiple')).toBe(10)
    })
    test('should return 2', () => {
        expect(arithmetic(10, 5, 'divide')).toBe(2)
    })
    test('should return error', () => {
        expect(arithmetic('hello', 'bye', 'Gogo')).toBe('Error')
    })
})
