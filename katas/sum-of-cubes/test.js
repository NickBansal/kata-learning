const sumOfCubes = require('.')

describe('Sum of cubes', () => {
    test('Should return 0', () => {
        expect(sumOfCubes(0)).toBe(0)
    })
    test('Should return 1', () => {
        expect(sumOfCubes(1)).toBe(1)
    })
    test('Should return 9', () => {
        expect(sumOfCubes(2)).toBe(9)
    })
    test('Should return 36', () => {
        expect(sumOfCubes(3)).toBe(36)
    })
})
