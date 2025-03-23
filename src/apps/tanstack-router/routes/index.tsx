import { ROUTES } from '@/utils/constants/routes';
import { createRoute, Outlet } from '@tanstack/react-router';
import { Route as ProtectedRoute } from './protected';

export const Route = createRoute({
  path: ROUTES.INDEX,
  getParentRoute: () => ProtectedRoute,
  component: () => <Outlet />
});
