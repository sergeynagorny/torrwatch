import { ElementRef, forwardRef } from 'react';

import { PauseCircle } from 'lucide-react';

import { usePauseTorrents } from '@/features/torrent/pause-torrent/api';

import { Torrent } from '@/entities/torrent';

import { Button, ButtonProps } from '@/shared/components/ui/button';

interface Props extends ButtonProps {
  hash: Torrent['hash'];
}

export const PauseTorrentsButton = forwardRef<ElementRef<typeof Button>, Props>(({ hash, ...props }, ref) => {
  const { mutate } = usePauseTorrents();

  return (
    <Button onClick={() => mutate([hash])} size="icon" ref={ref} {...props}>
      <PauseCircle className="w-5 h-5" />
    </Button>
  );
});
