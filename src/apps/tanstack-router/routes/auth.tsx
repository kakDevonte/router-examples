import { ROUTES } from '@/utils/constants/routes';
import { createRoute, redirect } from '@tanstack/react-router';
import { AuthPage } from '../pages/auth/page';
import { Route as RootRoute } from './__root';

export const Route = createRoute({
  path: ROUTES.AUTH,
  getParentRoute: () => RootRoute,
  component: AuthPage,
  beforeLoad: ({ context }) => {
    if (context.isAuthenticated) {
      redirect({
        throw: ROUTES.INDEX
      });
    }
  }
});
