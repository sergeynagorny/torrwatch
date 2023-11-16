import map from 'lodash/map';

import { Jacket, JacketAPIv2 } from '@/entities/jacket/types.ts';

export const combineJacketsByTracker = (items: JacketAPIv2[]): Jacket[] => {
  return map(items, (item) => ({
    magnet: item.MagnetUri,
    tracker: item.Tracker,
    title: item.Title,
    size: item.Size,
    publishDate: item.PublishDate,
    sid: item.Seeders,
    pir: item.Peers,
    ffprobe: item.ffprobe,
    name: item.info.name,
    originalname: item.info.originalname,
    year: item.info.relased,
    videotype: item.info.videotype,
    quality: item.info.quality,
    voices: item.info.voices,
    languages: item?.languages || [],
  }));
};
