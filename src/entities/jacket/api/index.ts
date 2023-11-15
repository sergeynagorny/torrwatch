import { combineJacketsByTracker } from '@/entities/jacket/api/lib.ts';
import { Jacket } from '@/entities/jacket/types.ts';

export const getJacketList = ({ q, signal }: { q: string; signal?: AbortSignal }): Promise<Jacket[]> => {
  return fetch(`https://jacred.xyz/api/v1.0/torrents?apikey=null&search=${q}&take=100`, { signal })
    .then((r) => r.json())
    .then(combineJacketsByTracker);
};
