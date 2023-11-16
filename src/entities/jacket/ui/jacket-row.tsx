import { HTMLAttributes, forwardRef } from 'react';

import filter from 'lodash/filter';
import { ListMinusIcon, MicIcon } from 'lucide-react';

import { Jacket } from '@/entities/jacket';

import { Badge } from '@/shared/components/ui/badge.tsx';
import { Card, CardContent, CardHeader, CardTitle } from '@/shared/components/ui/card.tsx';
import { formatBytes } from '@/shared/lib/format-bytes.ts';
import { cn } from '@/shared/lib/utils.ts';

export interface JacketRowProps extends HTMLAttributes<HTMLDivElement> {
  data: Jacket;
}

export const JacketRow = forwardRef<HTMLDivElement, JacketRowProps>(({ data, className, ...props }, ref) => {
  const { title, publishDate, magnet, size, sid, pir, tracker, ffprobe } = data;

  return (
    <Card className={cn('', className)} ref={ref} {...props}>
      <CardHeader>
        <CardTitle className="line-clamp-2 leading-6">{title}</CardTitle>
        <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
          {filter(ffprobe, { codec_type: 'subtitle' }).map((item, index) => (
            <Badge
              key={magnet + item?.tags?.title + index}
              variant="secondary"
              className=" inline-flex items-center gap-1 rounded-sm px-1.5 text-muted-foreground"
            >
              <ListMinusIcon className="h-3.5 w-3.5 text-foreground" />
              <span className="line-clamp-1">
                {item?.tags?.language?.toUpperCase()} {item?.tags?.title}
              </span>
            </Badge>
          ))}
          {filter(ffprobe, { codec_type: 'audio' }).map((item, index) => (
            <Badge
              key={magnet + item?.tags?.title + index}
              variant="secondary"
              className=" inline-flex items-center gap-1 rounded-sm px-1.5 text-muted-foreground"
            >
              <MicIcon className="h-3.5 w-3.5 text-foreground" />
              <span className="line-clamp-1">
                {item?.tags?.language?.toUpperCase()} {item?.tags?.title}
              </span>
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent className="flex items-center gap-2">
        <div className="text-xs text-muted-foreground">{new Date(publishDate).toLocaleDateString()}</div>
        <div className="truncate text-xs text-muted-foreground">{tracker}</div>
        <div className="text-xs text-muted-foreground"></div>
        <div className="ml-auto shrink-0 text-xs text-muted-foreground">
          {sid} / {pir}
        </div>
        <div className="shrink-0 text-xs font-medium">{formatBytes(size)}</div>
      </CardContent>
    </Card>
  );
});
