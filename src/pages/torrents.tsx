import { useState } from 'react';

import orderBy from 'lodash/orderBy';

import { PauseTorrentsButton } from '@/features/torrent/pause-torrent';
import { ResumeTorrentsButton } from '@/features/torrent/resume-torrent';

import { TorrentRow, TorrentState, torrentLib, torrentModel } from '@/entities/torrent';

import { Tabs, TabsList, TabsTrigger } from '@/shared/components/ui/tabs';

export const Torrents = () => {
  const [activeTab, setActiveTab] = useState<string>('active');
  const { data: torrents } = torrentModel.useTorrentList();

  const filteredTorrents = torrents?.filter((torrent) => {
    return activeTab === 'active'
      ? !torrentLib.isTorrentFinished(torrent.state)
      : torrentLib.isTorrentFinished(torrent.state);
  });

  return (
    <section className="flex grow flex-col p-3">
      <Tabs defaultValue={activeTab} onValueChange={setActiveTab}>
        <TabsList defaultValue={activeTab} className="mb-3 grid w-full grid-cols-2">
          <TabsTrigger value="active">Active</TabsTrigger>
          <TabsTrigger value="loaded">Loaded</TabsTrigger>
        </TabsList>
      </Tabs>
      <ul className="space-y-2">
        {orderBy(filteredTorrents, [activeTab === 'active' ? 'progress' : 'added_on'], ['desc'])?.map((torrent) => (
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
