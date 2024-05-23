import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth/next';
import { redirect } from 'next/navigation';

const ProtectedByServerComponent = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect('/sign-in?callbackUrl=/protected-by/server-component');
  }

  return (
    <div>
      <h1>Protected by Server Component</h1>
    </div>
  );
};
export default ProtectedByServerComponent;
