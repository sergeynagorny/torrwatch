import { useState } from 'react';

import { useDebounce, useLocalStorage, useSessionStorage } from 'usehooks-ts';

import { JacketRow } from '@/entities/jacket';
import { useJacketList } from '@/entities/jacket/model';

import { Input } from '@/shared/components/ui/input.tsx';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/shared/components/ui/select.tsx';
import { Spinner } from '@/shared/components/ui/spinner';

export const Home = () => {
  const [value, setValue] = useSessionStorage<string>('search', '');

  const debouncedValue = useDebounce<string>(value, 1000);
  const [quality, setQuality] = useLocalStorage<number>('quality', 1080);
  const [order] = useState<'sid' | 'createTime' | 'size'>('sid');

  const { data: jackets, isLoading } = useJacketList({ q: debouncedValue, quality, order });

  return (
    <div className="flex grow flex-col">
      <div className="sticky inset-x-0 top-0 space-y-2 border-b bg-background px-4 py-3">
        <Input defaultValue={value} placeholder="Oppenheimer" onChange={(e) => setValue(e.target.value)} />
        <Select defaultValue={String(quality)} onValueChange={(v) => setQuality(Number(v))}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="480">480</SelectItem>
            <SelectItem value="720">720</SelectItem>
            <SelectItem value="1080">1080</SelectItem>
            <SelectItem value="2160">2160</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="flex grow flex-col gap-3 p-3">
        {isLoading && <Spinner className="m-auto" />}
        {jackets?.map((jacket) => <JacketRow key={jacket.magnet} data={jacket} />)}
      </div>
    </div>
  );
};
