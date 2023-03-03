import Validator from './class/Validator'

const validator = new Validator

console.log(validator.validateUsername('user555user'))
console.log(validator.validatePhone('8 (927) 000-00-00'))
console.log(validator.validatePhone('+7 960 000 00 00'))
console.log(validator.validatePhone('+86 000 000 0000'))