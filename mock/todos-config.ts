import { RestRequestConfig } from 'mock-config-server';
import { DATABASE } from './database';

export const getTodos: RestRequestConfig = {
  method: 'get',
  path: '/todo/list',
  routes: [
    {
      data: () => DATABASE.todos
    }
  ]
};
