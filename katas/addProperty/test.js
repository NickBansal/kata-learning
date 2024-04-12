const addProperty = require('.')

describe('Arithmetic', () => {
    test('Should return 1', () => {
        expect(
            addProperty([
                { a: 2, b: 3 },
                { a: 5, b: 6 },
            ])
        ).toEqual([
            { a: 2, b: 3, userAnswer: null },
            { a: 5, b: 6, userAnswer: null },
        ])
    })
})
