import { useLayoutEffect } from 'react';
import { createRouter, RouterProvider } from '@tanstack/react-router';

import { useSession } from '@/utils/contexts/session';
import { queryClient } from '@/utils/api/instance';

import { routeTree } from './route';

import '@/assets/styles/globals.css';

const router = createRouter({
  routeTree,
  defaultPreload: 'intent',
  defaultPreloadStaleTime: 0,
  scrollRestoration: true,
  context: {
    queryClient,
    isAuthenticated: false
  }
});

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export const App = () => {
  const { session } = useSession();

  useLayoutEffect(() => {
    const root = window.document.documentElement;
    root.classList.add('dark');
  }, []);

  return <RouterProvider context={{ isAuthenticated: session }} router={router} />;
};
