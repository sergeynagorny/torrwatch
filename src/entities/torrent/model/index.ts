import { useQuery } from '@tanstack/react-query';

import { torrentApi } from '@/entities/torrent';

export const torrentKeys = {
  all: ['torrents'] as const,
  lists: () => [...torrentKeys.all, 'list'],
  list: () => [...torrentKeys.lists()],
  // details: () => [...torrentKeys.all, 'detail'] as const,
  // detail: (id: number) => [...torrentKeys.details(), id] as const,
};

export const useTorrentList = () => {
  return useQuery({
    queryKey: torrentKeys.list(),
    queryFn: torrentApi.getTorrentList,
    refetchInterval: 3000,
  });
};
