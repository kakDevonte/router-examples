import ReactDOM from 'react-dom/client';

import { queryClient } from '@/utils/api/instance';

import Providers, { ProvidersProps } from './providers';
import { App } from './app';

export const init = async () => {
  const rootElement = document.getElementById('root')!;
  const root = ReactDOM.createRoot(rootElement);

  const providersProps: Omit<ProvidersProps, 'children'> = {
    session: { defaultSession: false },
    query: { client: queryClient }
  };

  root.render(
    <Providers {...providersProps}>
      <App />
    </Providers>
  );
};
