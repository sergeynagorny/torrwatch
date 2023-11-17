import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';
import { useDebounce, useLocalStorage, useSessionStorage } from 'usehooks-ts';

import { AddTorrentForm } from '@/features/torrent/add-torrent';

import { Jacket, JacketRow } from '@/entities/jacket';
import { useJacketList } from '@/entities/jacket/model';

import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from '@/shared/components/ui/dialog';
import { Input } from '@/shared/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/components/ui/select';
import { Spinner } from '@/shared/components/ui/spinner';

export const Home = () => {
  const navigate = useNavigate();
  const [jacketToLoad, setJacketToLoad] = useState<Jacket | null>(null);
  const [value, setValue] = useSessionStorage<string>('search', '');
  const [year, setYear] = useSessionStorage<string>('year', '');

  const debouncedValue = useDebounce<string>(value, 1000);
  const [quality, setQuality] = useLocalStorage<number>('quality', 1080);
  const [order] = useState<'sid' | 'createTime' | 'size'>('sid');

  const onTorrentAdded = () => {
    setJacketToLoad(null);
    setValue('');
    navigate('/torrents');
  };

  const { data, isLoading } = useJacketList({
    q: debouncedValue,
    year: Number(year) || undefined,
    quality,
    order,
  });

  useEffect(() => {
    setYear('');
  }, [debouncedValue, setYear]);

  return (
    <div className="flex grow flex-col">
      <div className="sticky inset-x-0 top-0 space-y-2 border-b bg-background px-4 py-3">
        <Input defaultValue={value} placeholder="Oppenheimer" onChange={(e) => setValue(e.target.value)} />
        <Select defaultValue={String(quality)} onValueChange={(v) => setQuality(Number(v))}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="720">720</SelectItem>
            <SelectItem value="1080">1080</SelectItem>
            <SelectItem value="2160">2160</SelectItem>
          </SelectContent>
        </Select>
        <Select value={year} onValueChange={(v) => setYear(v)}>
          <SelectTrigger>
            <SelectValue placeholder="Realease Year" />
          </SelectTrigger>
          <SelectContent>
            {data?.filters.years?.map((year) => (
              <SelectItem key={year} value={String(year)}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="flex grow flex-col gap-3 p-3">
        {isLoading && <Spinner className="m-auto" />}
        {data?.results?.map((jacket) => (
          <JacketRow onClick={() => setJacketToLoad(jacket)} key={jacket.magnet} data={jacket} />
        ))}
      </div>
      <Dialog open={Boolean(jacketToLoad)} onOpenChange={() => setJacketToLoad(null)}>
        {jacketToLoad && (
          <DialogContent className="max-w-[300px]">
            <DialogHeader>
              <DialogTitle>Add Torrent</DialogTitle>
              <DialogDescription className="line-clamp-2 text-xs">{jacketToLoad?.title}</DialogDescription>
            </DialogHeader>
            <AddTorrentForm onSuccess={onTorrentAdded} data={jacketToLoad as Jacket} />
          </DialogContent>
        )}
      </Dialog>
    </div>
  );
};
