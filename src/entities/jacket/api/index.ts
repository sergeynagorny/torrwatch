import axios from 'axios';

import { combineJacketsByTracker } from '@/entities/jacket/api/lib.ts';
import { Jacket } from '@/entities/jacket/types.ts';

export const getJacketList = ({
  q,
  signal,
  year,
}: {
  year?: number;
  q: string;
  signal?: AbortSignal;
}): Promise<Jacket[]> => {
  return axios
    .get(`${import.meta.env.VITE_JACKET_API}/api/v2.0/indexers/all/results`, {
      params: { year, query: q, apikey: null },
      signal,
    })
    .then((r) => r.data.Results)
    .then(combineJacketsByTracker);
};
