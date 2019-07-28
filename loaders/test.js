module.exports = function (source) {
    const regExp = new RegExp("love", "ig")
    const result = source.replace(regExp, "❤")
    return result
}