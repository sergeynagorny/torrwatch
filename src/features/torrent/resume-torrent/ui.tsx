import { ElementRef, forwardRef } from 'react';

import { PlayCircle } from 'lucide-react';

import { useResumeTorrents } from '@/features/torrent/resume-torrent/api';

import { Torrent } from '@/entities/torrent';

import { Button, ButtonProps } from '@/shared/components/ui/button';

interface Props extends ButtonProps {
  hash: Torrent['hash'];
}

export const ResumeTorrentsButton = forwardRef<ElementRef<typeof Button>, Props>(({ hash, ...props }, ref) => {
  const { mutate } = useResumeTorrents();

  return (
    <Button onClick={() => mutate([hash])} size="icon" ref={ref} {...props}>
      <PlayCircle className="w-5 h-5" />
    </Button>
  );
});
