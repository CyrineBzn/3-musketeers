'use strict';

// 97.44% code coverage

const convert = require('..');
const Big = require('big.js');

//test 1 
test('should default to returning a Number', () => {
  //convert(2, 'BTC', 'BTC');
  expect(convert(2,'BTC','BTC')).toBe(2);
});

//test 2
test('should return a Number', () => {
  //convert(2, 'BTC', 'BTC', 'Number');
  expect(convert(2,'BTC','BTC','Number')).toBe(2);
});

//test 3
test('should return a Big number', () => {
  //convert(2, 'BTC', 'BTC', 'Big');
  expect(convert(2,'BTC','BTC','Big')).toEqual(new Big(2));
});

//test 4 
test('should return a String', () => {
  //convert(2100, 'mBTC', 'BTC', 'String');
  expect(typeof convert(2100, 'mBTC', 'BTC', 'String')).toBe('string');
});

//test 5 
test('should convert an integer', () => {
  //convert(123456789012345, 'Satoshi', 'BTC', 'Number');
  expect(convert(123456789012345, 'Satoshi', 'BTC', 'Number')).toBe(1234567.89012345);
});

//test 6 
test('should convert a number', () => {
  //convert(1234567.89012345, 'BTC', 'Satoshi', 'Number');
  expect(convert(1234567.89012345, 'BTC', 'Satoshi', 'Number')).toBe(123456789012345);
});

//test 7 
test('should convert a string', () => {
  //convert('2', 'BTC', 'BTC', 'Number');
  expect(convert('2', 'BTC', 'BTC', 'Number')).toBe(2);
});

//test 8 
test('should convert a Big number', () => {
  //convert(new Big(2), 'BTC', 'BTC', 'Number');
  expect(convert(new Big(2), 'BTC', 'BTC', 'Number')).toBe(2);
});

//test 9 
test('should convert a NaN to a Number', () => {
  //convert(NaN, 'BTC', 'BTC', 'Number');
  //convert(NaN, 'BTC', 'mBTC', 'Number');
  expect(typeof (convert(NaN, 'BTC', 'BTC', 'Number'))).toBe('number');
  expect(typeof (convert(NaN, 'BTC', 'mBTC', 'Number'))).toBe('number');
});

//test 10 
test('should convert a NaN to a String', () => {
  //convert(NaN, 'BTC', 'BTC', 'String');
  //convert(NaN, 'BTC', 'mBTC', 'String');
  expect(convert(NaN, 'BTC', 'BTC', 'String')).toBe('NaN');
  expect(convert(NaN, 'BTC', 'mBTC', 'String')).toBe('NaN');
});

//test 11 
test('should not convert a NaN to a Big', () => {
  //convert(NaN, 'BTC', 'BTC', 'Big');
  expect(() =>convert(NaN, 'BTC', 'BTC', 'Big')).toThrowError('NaN');
});

//test 12 
test('should handle rounding errors', () => {
  //convert(4.6, 'Satoshi', 'BTC', 'Number');
  //convert(0.000000046, 'BTC', 'Satoshi', 'Number');
  expect(convert(4.6, 'Satoshi', 'BTC', 'Number')).toBe(0.000000046);
  expect(convert(0.000000046, 'BTC', 'Satoshi', 'Number')).toBe(4.6);
});

//test 13 
test('should throw when untest is undefined', () => {
  //convert(new Big(2), 'x', 'BTC', 'Number');
  //convert(new Big(2), 'BTC', 'x', 'Number');
  //convert(NaN, 'x', 'BTC', 'Number');
  //convert(NaN, 'BTC', 'x', 'Number');
  expect(() => {convert(new Big(2), 'x', 'BTC', 'Number')}).toThrow();
  expect(() => {convert(new Big(2), 'BTC', 'x', 'Number')}).toThrow();
  expect(() => {convert(NaN, 'x', 'BTC', 'Number')}).toThrow();
  expect(() => {convert(NaN, 'BTC', 'x', 'Number')}).toThrow();
});

//test 14 
test('should throw when representaion is undefined', () => {
  //convert(2, 'BTC', 'mBTC', 'x');
  //convert(NaN, 'BTC', 'mBTC', 'x');
  expect(() => {convert(2, 'BTC', 'mBTC', 'x')}).toThrow();
  expect(() => {convert(NaN, 'BTC', 'mBTC', 'x')}).toThrow();
});

//test 15 
test('should allow untest aliases', () => {
  //convert(4.6, 'Satoshi', 'sat');
  //convert(4.6, 'μBTC', 'btest');
  expect(convert(4.6, 'Satoshi', 'sat')).toBe(4.6);
  expect(() => { convert(4.6, 'μBTC', 'btest') }).toThrow();
});

//test 16 
test('should allow to add unit', () => {
  convert.addUnit('TND', 0.283873);
  var units = convert.units();
  expect(units[units.length - 1]).toBe('TND');
});

//test 17 
test('should throw when adding existing unit', () => {
  expect(() => {convert.addUnit('BTC', 0.08)}).toThrow();
});

//test 18 
test('should throw when removing predefined unit', () => {
  expect(() => {convert.removeUnit('BTC')}).toThrow();
});


