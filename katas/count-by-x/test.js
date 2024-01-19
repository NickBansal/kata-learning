const countByX = require('.')

describe('Count By X', () => {
    test('Should return 1', () => {
        expect(countByX()).toBe(1)
    })
    // test('should return correct arrays', () => {
    //     expect(countByX(1, 10)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
    //     expect(countByX(2, 5)).toEqual([2, 4, 6, 8, 10])
    // })
})
