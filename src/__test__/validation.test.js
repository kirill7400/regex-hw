import Validator from "../class/Validator";
import {expect, jest, test} from '@jest/globals';

test('validateUsername test', () => {
  const result = new Validator();

  expect(result.validateUsername('user-_555-_user')).toBe(true);
  expect(result.validateUsername('user555')).toBe(false);
  expect(result.validateUsername('555user')).toBe(false);
  expect(result.validateUsername('-user')).toBe(false);
  expect(result.validateUsername('user_')).toBe(false);
  expect(result.validateUsername('us-_er')).toBe(true);
  expect(result.validateUsername('us55555er')).toBe(false);
});

test('validatePhone test', () => {
  const result = new Validator();

  expect(result.validatePhone('8 (927) 000-00-00')).toBe('+79270000000');
  expect(result.validatePhone('+7 960 000 00 00')).toBe('+79600000000');
  expect(result.validatePhone('+86 000 000 0000')).toBe('+860000000000');
});