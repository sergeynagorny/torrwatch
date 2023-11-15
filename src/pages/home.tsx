import { useState } from 'react';

import { useDebounce } from 'usehooks-ts';

import { useJacketList } from '@/entities/jacket/model';

import { Input } from '@/shared/components/ui/input.tsx';
import { Spinner } from '@/shared/components/ui/spinner';

export const Home = () => {
  const [value, setValue] = useState<string>('');
  const debouncedValue = useDebounce<string>(value, 1000);
  const [order] = useState<'sid' | 'createTime' | 'size'>('sid');

  const { data: jackets, isLoading } = useJacketList({ q: debouncedValue, order });

  return (
    <div className="flex grow flex-col p-10">
      <Input onChange={(e) => setValue(e.target.value)} />

      {isLoading && <Spinner />}
      <ul>{jackets && jackets.map((jacket) => <li key={jacket.magnet}>{jacket.name}</li>)}</ul>
    </div>
  );
};
