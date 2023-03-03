class Validator {
  constructor() {
  }

  validateUsername(v) {
    const reg = new RegExp(/^([-_a-zA-Z]+)([0-9]{0,3})([-_a-zA-Z]+)$/)
    return reg.test(v)
  }

  validatePhone(v) {
    return v.replace(/^\d/, '+7').replace(/[^0-9+]/g, '')
  }
}

export default Validator