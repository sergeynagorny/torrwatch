import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Torrent, TorrentState, torrentApi, torrentModel } from '@/entities/torrent';

export const usePauseTorrents = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: torrentApi.pauseTorrents,
    onSuccess: (_, hashes) => {
      queryClient.setQueriesData({ queryKey: torrentModel.torrentKeys.lists() }, (oldData?: Torrent[]) => {
        return oldData?.map((torrent) => {
          if (hashes?.includes(torrent.hash)) {
            return { ...torrent, state: TorrentState.PAUSED };
          }

          return torrent;
        });
      });
    },
  });
};
