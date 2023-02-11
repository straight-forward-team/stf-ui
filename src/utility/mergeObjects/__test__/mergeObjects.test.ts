import { presetTheme } from '@/theme';
import mergeObjects from '@/utility/mergeObjects/mergeObjects';

const slaveZIndices = {
  zIndices: {
    drawer: 20,
    overlay: 70,
    layoutBar: 45,
    shadow: 0.5,
  },
};

describe('Merge objects', () => {
  it('The Master object should be changed in its inner layers', () => {
    const mergeZIndex = mergeObjects(presetTheme, slaveZIndices);
    expect(mergeZIndex).toEqual({
      ...presetTheme,
      zIndices: slaveZIndices.zIndices,
    });
  });

  it('The Master object should only be changed in its first layer', () => {
    expect(mergeObjects(presetTheme, { locale: 'en-GB' })).toEqual({
      ...presetTheme,
      locale: 'en-GB',
    });
  });
});
