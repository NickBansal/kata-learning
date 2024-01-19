const scrabbleBestWord = (array) => {
    const points = [
        1, 3, 3, 2, 1, 4, 2, 4, 1, 8, 10, 1, 2, 1, 1, 3, 8, 1, 1, 1, 1, 4, 10,
        10, 10, 10,
    ]

    const newArr = array.reduce((a, b) => {
        return a.length <= b.length ? a : b
    })

    const newNewArr = newArr.split('').reduce((a, b) => {
        return a + points[b.charCodeAt() - 65]
    }, 0)

    return newNewArr
}

module.exports = scrabbleBestWord
