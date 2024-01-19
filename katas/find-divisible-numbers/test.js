const findDivisibleNumbers = require('.')

describe('Find divisible numbers', () => {
    test('Should return 1', () => {
        expect(findDivisibleNumbers()).toBe(1)
    })
    // test('should return correct arrays', () => {
    //     expect(findDivisibleNumbers([1, 2, 3, 4, 5, 6], 2)).toEqual([2, 4, 6])
    //     expect(findDivisibleNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 12], 4)).toEqual([4, 8, 12])
    // })
})
