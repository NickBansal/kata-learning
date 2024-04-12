const simplePigLatin = (string) =>
    string
        .split(' ')
        .map((word) => {
            if (word.match(/^[a-zA-Z]+$/)) {
                const stringArr = word.split('')
                stringArr.push(stringArr.splice(0, 1)[0])
                return stringArr.concat('ay').join('')
            }
            return word
        })
        .join(' ')

module.exports = simplePigLatin
