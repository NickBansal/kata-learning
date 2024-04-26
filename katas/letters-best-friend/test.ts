const { bestFriend } = require('./index')

describe('Even and double', () => {
    test('should return true', () => {
        expect(bestFriend('', 'z', 'h')).toEqual(true)
    })
    test('should return false', () => {
        expect(bestFriend('hello', 'z', 'h')).toEqual(false)
    })
    test('should return true', () => {
        expect(bestFriend('zh', 'z', 'h')).toEqual(true)
    })
    test('should return true', () => {
        expect(bestFriend('zhz', 'z', 'h')).toEqual(false)
    })
    test('should return true', () => {
        expect(bestFriend('za zh', 'z', 'a')).toEqual(false)
    })
    test('should return true', () => {
        expect(bestFriend('a test', 't', 'e')).toEqual(false)
    })
})
