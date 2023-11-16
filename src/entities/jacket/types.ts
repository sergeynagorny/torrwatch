export interface JacketAPIv1 {
  tracker: string; // "rutracker"
  url: string; // "https://rutracker.net/forum/viewtopic.php?t=6395780"
  title: string; // "Дюнкерк / Dunkirk (Кристофер Нолан / Christopher Nolan) [2017, Великобритания, Нидерланды, Франция, США, военный, драма, история, WEB-DL 2160p, Dolby Vision]",
  size: number; // 15569256448
  sizeName: string; // "14.5 GB"
  createTime: string; // "2023-08-10T15:53:00"
  sid: number; // 7
  pir: number; // 1
  magnet: string; // "magnet:?xt=urn:btih:868431010139F11A352B77175CF45B551B96CE4E&tr=http%3A%2F%2Fbt4.t-ru.org%2Fann%3Fmagnet"
  name: string; // "Дюнкерк"
  originalname: string; // "Dunkirk"
  relased: number; // 2017
  videotype: 'sdr' | 'hdr';
  quality: number; // 2160
  voices: string[]; // ['Дубляж', 'Сербин', 'Гаврилов', 'Есарев', 'Дохалов', 'Postmodern']
  seasons: []; // []
  types: string[]; // ['movie']
}

export type JacketAPIv2 = {
  Tracker: string; // bitru
  Details: string; // https://bitru.org/details.php?id=562054
  Title: string; // 'Улика / Clue (1985) BDRip 2160p | HEVC | SDR, 10-bit | Hand made upscale AI @ СТС'
  Size: number; // 18006650388
  PublishDate: string; // '2023-09-18T16:00:02.2503221Z'
  Category: number[]; // [2000]
  CategoryDesc: string; // 'Movies'
  Seeders: number; // 4
  Peers: number; // 1
  MagnetUri: string; // 'magnet:?xt=urn:btih:2696885eee678f3c8e337bb3948982f1f1d582f0'
  ffprobe?: { codec_type: 'audio' | 'subtitle'; tags?: { language?: string; title?: string } }[];
  languages: string[]; // ['rus', 'eng']
  info: {
    name: string; // 'Улика'
    originalname: string; // 'Clue'
    sizeName: string; // '16.77 ГБ'
    relased: number; // 1985
    videotype: 'sdr' | 'hdr';
    quality: number; // 2160
    voices: string[]; // []
    types: string[]; // ['movie']
  };
};

export interface Jacket {
  tracker: JacketAPIv2['Tracker'];
  title: JacketAPIv2['Title'];
  size: JacketAPIv2['Size'];
  publishDate: JacketAPIv2['PublishDate'];
  sid: JacketAPIv2['Seeders'];
  pir: JacketAPIv2['Peers'];
  magnet: JacketAPIv2['MagnetUri'];
  name: JacketAPIv2['info']['name'];
  originalname: JacketAPIv2['info']['originalname'];
  year: JacketAPIv2['info']['relased'];
  videotype: JacketAPIv2['info']['videotype'];
  quality: JacketAPIv2['info']['quality'];
  voices: JacketAPIv2['info']['voices'];
  ffprobe: JacketAPIv2['ffprobe'];
  languages?: JacketAPIv2['languages'];
}
