export function secondsToTimeFormat(secs: number) {
  const hours = Math.floor(secs / 3600);
  const minutes = Math.floor((secs % 3600) / 60);

  let formattedTime = '';

  if (hours > 0) {
    formattedTime += hours + 'h ';
  }

  formattedTime += (minutes < 10 ? '0' : '') + minutes + 'm';

  return formattedTime;
}
