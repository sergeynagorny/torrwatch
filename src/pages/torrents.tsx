import { PauseTorrentsButton } from '@/features/torrent/pause-torrent';
import { ResumeTorrentsButton } from '@/features/torrent/resume-torrent';

import { TorrentRow, TorrentState, torrentModel } from '@/entities/torrent';

export const Torrents = () => {
  const { data: torrents } = torrentModel.useTorrentList();

  return (
    <section>
      <ul className="m-2 space-y-2">
        {torrents?.map((torrent) => (
          <TorrentRow
            key={torrent.hash}
            data={torrent}
            controls={
              <>
                {torrent.state === TorrentState.DOWNLOADING && (
                  <PauseTorrentsButton variant="secondary" hash={torrent.hash} />
                )}
                {torrent.state === TorrentState.WAITING && (
                  <ResumeTorrentsButton disabled variant="secondary" hash={torrent.hash} />
                )}
                {torrent.state === TorrentState.PAUSED && (
                  <ResumeTorrentsButton variant="secondary" hash={torrent.hash} />
                )}
              </>
            }
          ></TorrentRow>
        ))}
      </ul>
    </section>
  );
};
