import axiosBase from 'axios';

import { Torrent } from '@/entities/torrent';

const axios = axiosBase.create({
  baseURL: '/torr-api/api/v2',
});

export const getTorrentList = () => {
  return axios.get<Torrent[]>('/torrents/info').then((r) => r.data);
};

export const addTorrent = (data: { urls: string[]; paused?: boolean; sequentialDownload?: boolean }) => {
  return axios
    .post(
      '/torrents/add',
      { ...data, urls: data.urls.join('\n') },
      { headers: { 'content-type': 'multipart/form-data' } },
    )
    .then((r) => r.data);
};

export const resumeTorrents = (h?: Torrent['hash'][]) => {
  const hashes = Array.isArray(h) ? h.join('|') : 'all';

  return axios.post('/torrents/resume', `hashes=${hashes}`).then((r) => r.data);
};

export const pauseTorrents = (h?: Torrent['hash'][]) => {
  const hashes = Array.isArray(h) ? h.join('|') : 'all';

  return axios.post('/torrents/pause', `hashes=${hashes}`).then((r) => r.data);
};

export const deleteTorrents = (h?: Torrent['hash'][]) => {
  const hashes = Array.isArray(h) ? h.join('|') : 'all';

  return axios.post('/torrents/delete', { params: hashes, deleteFiles: true }).then((r) => r.data);
};
