function bestFriend(txt, a, b) {
    if (txt === '') return true
    if (!txt.includes(a)) return false
    return txt.split('').reduce((acc, current, index, arr) => {
        return current === a ? arr[index + 1] === b : acc
    }, false)
}
export { bestFriend }
