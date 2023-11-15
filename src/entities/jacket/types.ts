export interface JacketAPI {
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

export interface Jacket extends Omit<JacketAPI, 'tracker'> {
  tracker: JacketAPI['tracker'][];
}
