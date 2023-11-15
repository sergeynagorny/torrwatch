import { useQuery } from '@tanstack/react-query';

import { getJacketList } from '@/entities/jacket/api';

export const useJacketList = ({ q }: { q: string; order: string }) => {
  return useQuery({
    enabled: Boolean(q),
    queryKey: ['jacket', 'list', q],
    queryFn: ({ signal }) => getJacketList({ q, signal }),
    select: (data) => {
      return data;
    },
  });
};
