'use client';
import { useCounterStore } from '@/providers/counter-store-provider';

export const WatchState = () => {
  const { count } = useCounterStore((state) => state);

  return <div>Count: {count}</div>;
};
