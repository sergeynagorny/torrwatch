import { useMutation, useQueryClient } from '@tanstack/react-query';

import { Torrent, TorrentState, torrentApi, torrentModel } from '@/entities/torrent';

export const useResumeTorrents = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: torrentApi.resumeTorrents,
    onSuccess: (_, hashes) => {
      queryClient.setQueriesData({ queryKey: torrentModel.torrentKeys.lists() }, (oldData?: Torrent[]) => {
        console.log({ hashes });
        return oldData?.map((torrent) => {
          if (hashes?.includes(torrent.hash)) {
            return { ...torrent, state: TorrentState.WAITING };
          }

          return torrent;
        });
      });
    },
  });
};
