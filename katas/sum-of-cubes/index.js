// eslint-disable-next-line no-unused-vars
const sumOfCubes = (integer) => {
    let sum = 0
    for (let i = 1; i <= integer; i++) {
        sum += i ** 3
    }
    return sum
}

module.exports = sumOfCubes
