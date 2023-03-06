class Validator {
  constructor() {
  }

  validateUsername(v) {
    const validCharacters = '([a-zA-Z]+)'
    const validSymbols = '([-_]*)'
    const onlyThreeNum = '([0-9]{0,3})'

    //const reg = new RegExp(/^([-_a-zA-Z]+)([0-9]{0,3})([-_a-zA-Z]+)$/)
    const reg = new RegExp('^' + validCharacters + validSymbols + onlyThreeNum + validSymbols + validCharacters + '$')
    //console.log(reg)
    return reg.test(v)
  }

  validatePhone(v) {
    return v.replace(/^\d/, '+7').replace(/[^0-9+]/g, '')
  }
}

export default Validator