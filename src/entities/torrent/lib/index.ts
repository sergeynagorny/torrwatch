import { Torrent, TorrentState } from '@/entities/torrent';

export const isTorrentFinished = (state: Torrent['state']) => {
  return [TorrentState.PAUSED_UP, TorrentState.DISTRIBUTING].includes(state);
};
