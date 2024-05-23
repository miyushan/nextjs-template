'use client';

import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const ProtectedByClientComponent = () => {
  const { status } = useSession();
  const router = useRouter();
  const currentUrl = usePathname();

  if (status === 'loading') {
    return <p>Loading...</p>;
  }

  if (status === 'unauthenticated') {
    router.push(`/sign-in?callbackUrl=${currentUrl}`);
  }

  return (
    <div>
      <h1>Protected by Client Component</h1>
    </div>
  );
};
export default ProtectedByClientComponent;
