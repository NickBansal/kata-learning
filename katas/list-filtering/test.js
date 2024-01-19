const listFiltering = require('.')

describe('List filtering', () => {
    test('Should return 1', () => {
        expect(listFiltering()).toBe(1)
    })
    // test('should return correct arrays', () => {
    //     expect(listFiltering([1, 2, 'a', 'b']).toEqual([1, 2])
    //     expect(listFiltering([1, 2, 'aasf', '1', '123', 123]).toEqual([1,2,123])
    // })
})
