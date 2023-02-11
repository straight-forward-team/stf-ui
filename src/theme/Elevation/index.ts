import type { Elevation, ElevationKeys } from './Elevation.types';

export const lightElevation: Elevation = {
  0: 'none',
  1: '0px 1px 1px rgba(97, 100, 117, 0.06), 0px 2px 1px rgba(97, 100, 117, 0.04), 0px 1px 3px rgba(97, 100, 117, 0.12)',
  2: '0px 2px 2px rgba(97, 100, 117, 0.06), 0px 3px 1px rgba(97, 100, 117, 0.04), 0px 1px 5px rgba(97, 100, 117, 0.12)',
  3: '0px 3px 4px rgba(97, 100, 117, 0.06), 0px 3px 3px rgba(97, 100, 117, 0.04), 0px 1px 8px rgba(97, 100, 117, 0.12)',
  4: '0px 4px 5px rgba(97, 100, 117, 0.06), 0px 1px 10px rgba(97, 100, 117, 0.04), 0px 2px 4px rgba(97, 100, 117, 0.12)',
  6: '0px 6px 10px rgba(97, 100, 117, 0.06), 0px 1px 18px rgba(97, 100, 117, 0.04), 0px 3px 5px rgba(97, 100, 117, 0.12)',
  8: '0px 8px 10px rgba(97, 100, 117, 0.06), 0px 3px 14px rgba(97, 100, 117, 0.04), 0px 5px 5px rgba(97, 100, 117, 0.12)',
  9: '0px 9px 12px rgba(97, 100, 117, 0.06), 0px 3px 16px rgba(97, 100, 117, 0.06), 0px 5px 6px rgba(97, 100, 117, 0.12)',
  12: '0px 12px 17px rgba(97, 100, 117, 0.06), 0px 5px 22px rgba(0, 0, 0, 0.04), 0px 7px 8px rgba(97, 100, 117, 0.12)',
  16: '0px 16px 24px rgba(97, 100, 117, 0.06), 0px 6px 30px rgba(97, 100, 117, 0.04), 0px 8px 10px rgba(97, 100, 117, 0.12)',
  24: '0px 24px 38px rgba(97, 100, 117, 0.06), 0px 9px 46px rgba(97, 100, 117, 0.04), 0px 11px 15px rgba(97, 100, 117, 0.12)',
};

export const darkElevation: Elevation = {
  0: 'none',
  1: '0px 1px 1px rgba(0, 0, 0, 0.14), 0px 2px 1px rgba(0, 0, 0, 0.12), 0px 1px 3px rgba(0, 0, 0, 0.2)',
  2: '0px 2px 2px rgba(0, 0, 0, 0.14), 0px 3px 1px rgba(0, 0, 0, 0.12), 0px 1px 5px rgba(0, 0, 0, 0.2)',
  3: '0px 3px 4px rgba(0, 0, 0, 0.14), 0px 3px 3px rgba(0, 0, 0, 0.12), 0px 1px 8px rgba(0, 0, 0, 0.2)',
  4: '0px 4px 5px rgba(0, 0, 0, 0.14), 0px 1px 10px rgba(0, 0, 0, 0.12), 0px 2px 4px rgba(0, 0, 0, 0.2)',
  6: '0px 6px 10px rgba(0, 0, 0, 0.14), 0px 1px 18px rgba(0, 0, 0, 0.12), 0px 3px 5px rgba(0, 0, 0, 0.2)',
  8: '0px 8px 10px rgba(0, 0, 0, 0.14), 0px 3px 14px rgba(0, 0, 0, 0.12), 0px 5px 5px rgba(0, 0, 0, 0.2)',
  9: '0px 9px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2)',
  12: '0px 12px 17px rgba(0, 0, 0, 0.14), 0px 5px 22px rgba(0, 0, 0, 0.12), 0px 7px 8px rgba(0, 0, 0, 0.2)',
  16: '0px 16px 24px rgba(0, 0, 0, 0.14), 0px 6px 30px rgba(0, 0, 0, 0.12), 0px 8px 10px rgba(0, 0, 0, 0.2)',
  24: '0px 24px 38px rgba(0, 0, 0, 0.14), 0px 9px 46px rgba(0, 0, 0, 0.12), 0px 11px 15px rgba(0, 0, 0, 0.2)',
};

export type { Elevation, ElevationKeys };
