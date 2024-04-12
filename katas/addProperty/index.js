/* eslint-disable node/no-unsupported-features/es-syntax */
// eslint-disable-next-line no-unused-vars
const addProperty = (arr) => {
    return arr.map((item) => ({ ...item, userAnswer: null }))
}

module.exports = addProperty
