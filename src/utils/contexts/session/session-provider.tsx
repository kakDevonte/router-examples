import { ReactNode, useMemo, useState } from 'react';
import { SessionContext } from './session-context';

export interface SessionProviderProps {
  children: ReactNode;
  defaultSession?: boolean;
}

export const SessionProvider = ({ children, defaultSession = false }: SessionProviderProps) => {
  const [session, setSession] = useState(defaultSession);

  const value = useMemo(() => ({ session, setSession }), [session]);

  return <SessionContext.Provider value={value}>{children}</SessionContext.Provider>;
};
