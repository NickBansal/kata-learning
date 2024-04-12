const countByX = require('.')

describe('Arithmetic', () => {
    test('Should return 1', () => {
        expect(countByX(1, 1, 'add')).toBe(2)
    })
})
