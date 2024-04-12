// eslint-disable-next-line no-unused-vars
const addProperty = (arr) => {
    return arr.map((item) => ({ ...item, userAnswer: null }))
}

module.exports = addProperty
