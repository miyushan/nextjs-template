import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { redirect } from 'next/navigation';

const ProtectedByMiddleware = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect('/sign-in?callbackUrl=/protected-by/server-component');
  }

  return (
    <div>
      <h1>Protected by Middleware</h1>
    </div>
  );
};
export default ProtectedByMiddleware;
