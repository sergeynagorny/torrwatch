import { useRef } from 'react';

import { useQuery } from '@tanstack/react-query';
import map from 'lodash/map';
import orderBy from 'lodash/orderBy';
import uniq from 'lodash/uniq';

import { Jacket } from '@/entities/jacket';
import { getJacketList } from '@/entities/jacket/api';

export const useJacketList = ({
  q,
  quality,
  order = 'sid',
  year,
}: {
  q: string;
  quality: Jacket['quality'];
  order?: string;
  year?: number;
}) => {
  const filtersRef = useRef<{ years: number[] }>();

  const query = useQuery({
    enabled: Boolean(q),
    queryKey: ['jacket', 'list', q],
    queryFn: ({ signal }) => getJacketList({ q, signal }),
    select: (jackets) => {
      const results = orderBy(jackets, [order], ['desc'])
        .filter((jacket) => jacket.quality === quality)
        .filter((jacket) => !year || jacket.year === year);

      const filters = {
        years: uniq(map(jackets, 'year').filter(Boolean)),
      };

      return {
        filters,
        results,
      };
    },
  });

  return {
    ...query,
    filters: filtersRef.current,
  };
};
