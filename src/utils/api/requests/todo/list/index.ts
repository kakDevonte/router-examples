import { queryOptions } from '@tanstack/react-query';
import { api } from '../../../instance';

export type TodoFilter = {
  title?: string;
};

export type TodoListRequest = PageRequest<TodoFilter>;

export type TodoListRequestConfig = RequestConfig<TodoListRequest>;

export const getTodoList = ({ params, config }: TodoListRequestConfig) =>
  api.get<PageResponse<Todo>>('todos', { params, ...config }).then((res) => res.data);

export const todoListQueryOptions = (params: TodoListRequest) =>
  queryOptions({
    queryKey: ['todo-list', params],
    queryFn: () => getTodoList({ params })
  });
