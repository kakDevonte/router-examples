import type { RestRequestConfig } from 'mock-config-server';

export const signInConfig: RestRequestConfig = {
  path: '/signin/login',
  method: 'post',
  interceptors: {
    response: () => {
      const needConfirmation = Math.random() > 0.5;

      if (needConfirmation) {
        return { needConfirmation };
      }
    }
  },
  routes: [
    {
      data: { success: true }
    }
  ]
};
