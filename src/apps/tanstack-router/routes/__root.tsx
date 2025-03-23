import { QueryClient } from '@tanstack/react-query';
import { createRootRouteWithContext, Outlet, useRouterState } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { SpinnerIcon } from '@/components/icons';

interface RouterContext {
  isAuthenticated: boolean;
  queryClient: QueryClient;
}

const RouterSpinner = () => {
  const isLoading = useRouterState({ select: (s) => s.status === 'pending' });
  return isLoading ? <SpinnerIcon className='mr-2 h-4 w-4 animate-spin' /> : null;
};

export const Route = createRootRouteWithContext<RouterContext>()({
  component: () => {
    return (
      <>
        <header className='absolute z-[30] flex w-full items-center justify-between p-4'>
          <div className='flex items-center gap-2'>
            <span>Tanstack Router</span>
          </div>
        </header>
        <div className='flex h-screen items-center justify-center'>
          <div className='absolute w-100dvh h-100dwh flex justify-center align-middle'>
            <div>
              <RouterSpinner />
            </div>
          </div>
          <Outlet />
        </div>
        {import.meta.env.MODE === 'development' && <TanStackRouterDevtools />}
        {import.meta.env.MODE === 'development' && <ReactQueryDevtools />}
      </>
    );
  }
});
