import groupBy from 'lodash/groupBy';
import map from 'lodash/map';
import sum from 'lodash/sum';
import uniq from 'lodash/uniq';

import { Jacket, JacketAPI } from '@/entities/jacket/types.ts';

export const combineJacketsByTracker = (data: JacketAPI[]): Jacket[] => {
  const grouped = groupBy(data, (item) => item.magnet.split('&')[0]);

  return map(grouped, (items, magnet) => {
    const [{ ...rest }] = items;

    return {
      ...rest,
      tracker: map(items, 'tracker'),
      voices: uniq(map(items, 'voices').flat()),
      sid: sum(map(items, 'sid')) || 0,
      pir: sum(map(items, 'pir')) || 0,
      size: items[0].size,
      magnet: magnet,
    };
  });
};
