import type { QueryProviderProps } from '@/utils/contexts/query';
import type { SessionProviderProps } from '@/utils/contexts/session';

import { QueryProvider } from '@/utils/contexts/query';
import { SessionProvider } from '@/utils/contexts/session';

export interface ProvidersProps {
  children: React.ReactNode;
  query: Omit<QueryProviderProps, 'children'>;
  session: Omit<SessionProviderProps, 'children'>;
}

const Providers = ({ session, query, children }: ProvidersProps) => (
  <SessionProvider {...session}>
    <QueryProvider {...query}>{children}</QueryProvider>
  </SessionProvider>
);

export default Providers;
