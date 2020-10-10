module.exports = function check(brackets, config) {
        let temp = brackets.replace(/\(\)|\[]|{}|\|\||12|34|56|77|88/, '')
        if(temp === brackets) {
            return !brackets
        }
        return check(temp);
}
