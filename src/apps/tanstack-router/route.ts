import { Route as RootRoute } from './routes/__root';
import { Route as ProtectedRoute } from './routes/protected';
import { Route as IndexRoute } from './routes/index';
import { Route as AuthRoute } from './routes/auth';
import { TodoListRoute } from './routes/todos';

export const routeTree = RootRoute.addChildren([
  ProtectedRoute,
  AuthRoute,
  IndexRoute.addChildren([TodoListRoute])
]);
