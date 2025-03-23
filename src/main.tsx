const APPS = {
  'tanstack-router': () => import('./apps/tanstack-router/main')
};

console.log('app variant:', import.meta.env.VITE_APP);

const init = async () => {
  (await (await APPS[import.meta.env.VITE_APP])()).init();
};

init();
