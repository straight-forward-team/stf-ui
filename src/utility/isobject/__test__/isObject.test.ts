import isObject from '@/utility/isobject/isObject';

describe('is object', () => {
  it('should be false when input is null', () => {
    expect(isObject(null)).toBe(false);
  });

  it('should be false when input is undefine', () => {
    expect(isObject(undefined)).toBe(false);
  });
  it('should be true when input is empty object', () => {
    expect(isObject({})).toBe(true);
  });
  it('should be true when input is object with some properties', () => {
    expect(
      isObject({
        test: "I'm object",
      }),
    ).toBe(true);
  });
  it('should be false when input is array', () => {
    expect(isObject([])).toBe(false);
  });
  it('should be false when input is number', () => {
    expect(isObject(23)).toBe(false);
  });
  it('should be false when input is string', () => {
    expect(isObject('object')).toBe(false);
  });
});
