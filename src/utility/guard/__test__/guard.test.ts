import guard from '@/utility/guard/guard';

const data = [
  { min: 1, max: 5, value: 12, result: 5 },
  { min: -1, max: 15, value: 5, result: 5 },
  { min: 64, max: 0, value: 17, result: 0 },
  { min: 12, max: 5, value: -3, result: 5 },
  { min: 5, max: 12, value: 3, result: 5 },
  { min: 9, max: 9, value: 9, result: 9 },
  { min: 5, max: 5, value: 12, result: 5 },
  { min: NaN, max: 5, value: 13, result: NaN },
  { min: 3, max: NaN, value: 6, result: NaN },
  { min: 13, max: 5, value: NaN, result: NaN },
  { min: NaN, max: NaN, value: NaN, result: NaN },
];

describe('guard', () => {
  it.each(data)('should minimum number be calculated', (item) => {
    expect(guard(item.min, item.max, item.value)).toBe(item.result);
  });
});
