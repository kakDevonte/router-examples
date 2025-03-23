import { createRoute } from '@tanstack/react-router';
import { z } from 'zod';

import { todoListQueryOptions } from '@/utils/api/requests/todo/list';
import { ROUTES } from '@/utils/constants/routes';
import { Route as ProtectedRoute } from './protected';
import { TodosPage } from '../pages/todos/page';

export const TodoListFilterSchema = z.object({
  title: z.string().optional()
});

export type TodoListFilter = z.infer<typeof TodoListFilterSchema>;

export const TodoListSearchParams = z.object({
  _page: z.number().catch(1),
  _limit: z.number().catch(20),
  // sort: z
  //   .object({
  //     column: z.string(),
  //     dir: z.enum(['asc', 'desc'])
  //   })
  //   .catch({ column: 'createdAt', dir: 'asc' }),
  filter: TodoListFilterSchema.optional()
});

export const TodoListRoute = createRoute({
  path: ROUTES.TODOS,
  getParentRoute: () => ProtectedRoute,
  component: TodosPage,
  validateSearch: TodoListSearchParams,
  loaderDeps: ({ search }) => search,
  // pendingComponent: TodosLoading,
  loader: ({ context: { queryClient }, deps }) =>
    queryClient.ensureQueryData(todoListQueryOptions(deps))
});
