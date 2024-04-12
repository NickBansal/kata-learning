// eslint-disable-next-line no-unused-vars
const arithmetic = (a, b, operator) => {
    const obj = {
        add: '+',
        subtract: '-',
        multiple: '*',
        divide: '/',
    }

    if (typeof a === 'string' || typeof b === 'string') {
        return 'Error'
    }

    // eslint-disable-next-line no-eval
    return eval(`${a}${obj[operator]}${b}`)
}

module.exports = arithmetic
