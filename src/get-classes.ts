import { flow, curryRight, pickBy, keys, Dictionary } from 'lodash';

export default function getClasses(x: Dictionary<boolean>): string {
  return flow((curryRight as any)(pickBy)(x => !!x), keys, x => x.join(' '))(x);
};
