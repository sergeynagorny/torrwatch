import { useRef } from 'react';

import { useQuery } from '@tanstack/react-query';
import orderBy from 'lodash/orderBy';

import { Jacket } from '@/entities/jacket';
import { getJacketList } from '@/entities/jacket/api';

export const useJacketList = ({
  q,
  quality,
  order = 'sid',
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
      return orderBy(jackets, [order], ['desc']).filter((jacket) => jacket.quality === quality);
    },
  });

  return {
    ...query,
    filters: filtersRef.current,
  };
};
