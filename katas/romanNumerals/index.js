const romanNumerals = (roman) => {
    const romanNumeral = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }
    let result = 0
    let prevValue = 0
    for (let i = roman.length - 1; i >= 0; i--) {
        const currentValue = romanNumeral[roman[i]]
        console.log(currentValue)
        if (currentValue >= prevValue) {
            result += currentValue
        } else {
            result -= currentValue
        }
        prevValue = currentValue
    }
    return result
}

module.exports = romanNumerals
