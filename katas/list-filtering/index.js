const listFiltering = (word) => {
    return word
        .split('')
        .map((item) => {
            if (item === '0') {
                return 'O'
            }
            if (item === '1') {
                return 'I'
            }
            if (item === '5') {
                return 'S'
            }
            return item
        })
        .join('')
}

module.exports = listFiltering
