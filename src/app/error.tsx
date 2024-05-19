'use client';

import { Button } from '@/components/ui/button';
import { useEffect } from 'react';

const Error = ({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="p-4">
      <h2 className="mb-2">Something went wrong!</h2>
      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
};
export default Error;
