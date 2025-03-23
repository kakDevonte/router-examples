import type { FlatMockServerConfig } from 'mock-config-server';
import { signInConfig } from './mock/signin-config';
// import { getTodos } from 'mock/todos-config';
import { DATABASE } from 'mock/database';

const mockServerConfig: FlatMockServerConfig = [
  {
    baseUrl: '/api',
    interceptors: {
      request: ({ setDelay }) => setDelay(1000)
    },
    database: {
      data: {
        todos: DATABASE.todos
      },
      routes: {
        '/*/todos/:id': '/api/todos/:id'
      }
    }
  },
  {
    name: 'auth',
    configs: [signInConfig]
  }
  // {
  //   name: 'todo',
  //   configs: getTodos
  // }
];

export default mockServerConfig;
