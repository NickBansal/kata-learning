// eslint-disable-next-line no-unused-vars
const evenAndDouble = (array) => {
    return array.filter((item) => item % 2 === 0).map((item) => item * 2)
}

module.exports = evenAndDouble
