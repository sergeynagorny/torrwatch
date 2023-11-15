// https://github.com/qbittorrent/qBittorrent/wiki/WebUI-API-(qBittorrent-4.1)#get-torrent-list
export enum TorrentState {
  DOWNLOADING = 'downloading',
  PAUSED = 'pausedDL',
  DISTRIBUTING = 'stalledUP', // loaded + wait
  PAUSED_UP = 'pausedUP', //  loaded + paused
  WAITING = 'stalledDL',
}

export type Torrent = {
  added_on: number; // 1699428037,
  amount_left: number; // 0,
  auto_tmm: boolean; // false,
  availability: number; // -1,
  category: string; // "",
  completed: number; // 36842893752,
  completion_on: number; // 1699540426,
  content_path: string; // "/Users/sergeynagorny/Downloads/Do.The.Right.Thing.1989.BDRemux.1080p.-Kyle.mkv",
  dl_limit: number; // -1,
  dlspeed: number; // 0,
  downloaded: number; // 36845133237,
  downloaded_session: number; // 0,
  eta: number; // 8640000,
  f_l_piece_prio: boolean; // false,
  force_start: boolean; // false,
  hash: string; // "fda5983c21d8e25a47031997990ee8e79078c451",
  last_activity: number; // 1699973458,
  magnet_uri: string; // "magnet:?xt=urn:btih:fda5983c21d8e25a47031997990ee8e79078c451&dn=Do.The.Right.Thing.1989.BDRemux.1080p.-Kyle.mkv&tr=http%3a%2f%2fbt4.t-ru.org%2fann%3fmagnet",
  max_ratio: number; // -1,
  max_seeding_time: number; // -1,
  name: string; // "Do.The.Right.Thing.1989.BDRemux.1080p.-Kyle.mkv",
  num_complete: number; // 1,
  num_incomplete: number; // 21,
  num_leechs: number; // 0,
  num_seeds: number; // 0,
  priority: number; // 0,
  progress: number; // 1,
  ratio: number; // 0.018106146955931553,
  ratio_limit: number; // -2,
  save_path: string; // "/Users/sergeynagorny/Downloads/",
  seeding_time: number; // 286379,
  seeding_time_limit: number; // -2,
  seen_complete: number; // 1699994117,
  seq_dl: boolean; // false,
  size: number; // 36842893752,
  state: TorrentState; // "stalledUP",
  super_seeding: boolean; // false,
  tags: string; // "",
  time_active: number; // 384672,
  total_size: number; // 36842893752;
  tracker: string; // 'http://bt4.t-ru.org/ann?magnet';
  trackers_count: number; // 1;
  up_limit: number; // -1;
  uploaded: number; // 667123397;
  uploaded_session: number; // 0;
  upspeed: number; // 0;
};
