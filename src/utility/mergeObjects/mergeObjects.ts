import { merge } from 'lodash';

const mergeObjects = <T = object, K = object>(master: T, slave: K): T =>
  merge(master, slave);
export default mergeObjects;
