/*
 * Необходимо покрыть все возможные
 * и невозможные кейсы. Например,
 * convertBytesToHuman(-1) === false,
 * convertBytesToHuman(-1) !== '1 B',
 * convertBytesToHuman('string') === false
 * convertBytesToHuman(5) === '5 B'
 */

import convertBytesToHuman from './convertBytesToHuman';

test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman(-1)).toBe(false)
  // ...
});

test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(1024)).toBe("1 KB")
  // ...
});
test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(5)).toBe("5 B")
  // ...
});
test('Возвращает false для неправильного типа данных', () => {
  expect(convertBytesToHuman("string")).toBe(false)
  // ...
});
test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(123123123)).toBe("117.42 MB")
  // ...
});
test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(123123123123)).toBe("114.67 GB")
  // ...
});
test('Возвращает корректное значение для чисел', () => {
  expect(convertBytesToHuman(123123123123123)).toBe("111.98 TB")
  // ...
});
// другая группа проверок
