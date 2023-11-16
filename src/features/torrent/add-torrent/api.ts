import { useMutation } from '@tanstack/react-query';

import { torrentApi } from '@/entities/torrent';

export const useAddTorrent = () => {
  return useMutation({
    mutationFn: torrentApi.addTorrent,
  });
};
