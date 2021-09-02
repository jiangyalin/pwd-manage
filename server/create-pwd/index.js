const digit = require('./digit')
const letter = require('./letter')
const caseLetter = require('./case')
const symbol = require('./symbol')

// 生成从minNum到maxNum的随机数
const randomNum = (minNum = 0, maxNum) => {
  return parseInt(Math.random() * (maxNum - minNum + 1) + minNum, 10)
}

// 生成随机数串
const createRandomNumArr = (max = 9, length = 12, arr = []) => {
  arr.push(randomNum(0, max))
  if (arr.length < length) {
    return createRandomNumArr(max, length, arr)
  } else {
    return arr
  }
}

// 创建密码(长度,包含数字,包含字母,包含大小写,包含符号)
const createPwd = (length = 12, { isDigit = true, isLetter = true, isCase = true, isSymbol = true }) => {
  const list = []
  if (isDigit) list.push(...digit)
  if (isLetter) list.push(...letter)
  if (isCase) list.push(...caseLetter)
  if (isSymbol) list.push(...symbol)
  return createRandomNumArr(list.length - 1, length).map(item => list[item]).join('')
}

module.exports = createPwd
