const evenAndDouble = require('.')

describe('Even and double', () => {
    test('should return 4', () => {
        expect(evenAndDouble([2])).toEqual([4])
    })
    test('should return 4', () => {
        expect(evenAndDouble([1, 2])).toEqual([4])
    })
})
