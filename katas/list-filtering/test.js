const listFiltering = require('.')

describe('List filtering', () => {
    test('Should return London', () => {
        expect(listFiltering('L0ND0N')).toEqual('LONDON')
    })
    test('Should return DUBLIN', () => {
        expect(listFiltering('DUBL1N')).toEqual('DUBLIN')
    })
    test('Should return SINGAPORE', () => {
        expect(listFiltering('51NGAP0RE')).toEqual('SINGAPORE')
    })
    test('Should return PARIS', () => {
        expect(listFiltering('PAR15')).toEqual('PARIS')
    })
    test('Should return BUDAPEST', () => {
        expect(listFiltering('BUDAPE5T')).toEqual('BUDAPEST')
    })
})
