'use client';

import { useCounterStore } from '@/providers/counter-store-provider';
import { WatchState } from './watchState';
import { Button } from '@/components/ui/button';

const Zustand = () => {
  const { incrementCount, decrementCount } = useCounterStore((state) => state);

  return (
    <div className="min-w-screen flex min-h-screen  items-center justify-center">
      <div className="mx-auto flex w-full max-w-xs flex-col space-y-3 text-center">
        <Button type="button" onClick={() => void incrementCount()}>
          Increment Count
        </Button>
        <Button type="button" onClick={() => void decrementCount()}>
          Decrement Count
        </Button>

        <WatchState />
      </div>
    </div>
  );
};
export default Zustand;
