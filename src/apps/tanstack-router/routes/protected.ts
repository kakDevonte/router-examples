import { createRoute, redirect } from '@tanstack/react-router';
import { Route as RootRoute } from './__root';

export const Route = createRoute({
  id: 'protected-route',
  getParentRoute: () => RootRoute,
  beforeLoad: ({ context }) => {
    if (!context.isAuthenticated) {
      throw redirect({
        to: '/auth',
        search: {
          redirect: location.href
        }
      });
    }
  }
});
