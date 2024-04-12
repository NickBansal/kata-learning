const simplePigLatin = require('.')

describe('Arithmetic', () => {
    test('Should return igPay', () => {
        expect(simplePigLatin('Pig !!')).toBe('igPay !!')
    })

    test('Should return igPay atinlay', () => {
        expect(simplePigLatin('Pig latin')).toBe('igPay atinlay')
    })
    test('', () => {
        expect(simplePigLatin('Hello world !')).toBe('elloHay orldway !')
    })
})
