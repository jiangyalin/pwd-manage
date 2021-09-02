const checkPwdInput = () => {
  return Boolean(document.querySelector('input[type="password"]'))
}

const host = window.location
console.log('test', checkPwdInput())
