import { HTMLAttributes, ReactNode, forwardRef } from 'react';

import { ArrowDownSquareIcon, ClockIcon, GaugeCircleIcon, SquareDotIcon } from 'lucide-react';

import { Torrent, TorrentState } from '@/entities/torrent';
import { isTorrentFinished } from '@/entities/torrent/lib';

import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { Progress } from '@/shared/components/ui/progress';
import { formatBytes } from '@/shared/lib/format-bytes';
import { secondsToTimeFormat } from '@/shared/lib/seconds-to-time-format';
import { cn } from '@/shared/lib/utils';

export interface TorrentRowProps extends HTMLAttributes<HTMLDivElement> {
  data: Torrent;
  controls?: ReactNode;
}

{
  /*  <span>{`${num_seeds} / ${num_complete} | ${num_leechs} / ${num_incomplete}`}</span>*/
}

export const TorrentRow = forwardRef<HTMLDivElement, TorrentRowProps>(
  ({ data, controls, className, ...props }, ref) => {
    const { name, state, progress, size, added_on, dlspeed, eta } = data;

    return (
      <Card className={cn('', className)} ref={ref} {...props}>
        <CardHeader className="flex flex-row gap-5">
          <div className="space-y-1 truncate">
            <CardTitle className="truncate">{name}</CardTitle>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <div className="flex items-center">
                <span>{new Date(added_on * 1000).toLocaleDateString()}</span>
              </div>
              <div className="flex items-center">
                <span>{formatBytes(size)}</span>
              </div>
            </div>
          </div>
          <div className="ml-auto flex min-w-[36px] shrink-0 items-start justify-center">{controls}</div>
        </CardHeader>
        {!isTorrentFinished(state) && (
          <CardContent>
            <div className="flex gap-3 text-sm">
              <div className="mr-auto flex items-center gap-1 font-medium">
                {state === TorrentState.WAITING && <SquareDotIcon className="h-3.5 w-3.5 text-blue-600" />}
                {state === TorrentState.PAUSED && <SquareDotIcon className="h-3.5 w-3.5 text-red-600" />}
                {state === TorrentState.DOWNLOADING && <ArrowDownSquareIcon className="h-3.5 w-3.5 text-blue-600" />}
                <span className="">{Math.floor(progress * 100) + '%'}</span>
              </div>
              {state === TorrentState.DOWNLOADING && (
                <>
                  <div className="flex items-center gap-1.5">
                    <ClockIcon className="h-3.5 w-3.5" />
                    <span>{secondsToTimeFormat(eta)}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <GaugeCircleIcon className="h-3.5 w-3.5" />
                    <span>{formatBytes(dlspeed)}/s</span>
                  </div>
                </>
              )}
            </div>
            <Progress className="mt-1" value={progress * 100} />
          </CardContent>
        )}
      </Card>
    );
  },
);
