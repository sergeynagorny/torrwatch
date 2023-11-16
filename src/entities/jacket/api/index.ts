import { combineJacketsByTracker } from '@/entities/jacket/api/lib.ts';
import { Jacket } from '@/entities/jacket/types.ts';

export const getJacketList = ({
  q,
  signal,
  year = 1985,
}: {
  year?: number;
  q: string;
  signal?: AbortSignal;
}): Promise<Jacket[]> => {
  return fetch(`http://jacred.xyz/api/v2.0/indexers/all/results?apikey=&query=${q}&year=${year}`, { signal })
    .then((r) => r.json())
    .then((r) => r.Results)
    .then(combineJacketsByTracker);
};
